import { RestServer } from "./rest";

// TODO : 서비스 활성화 상태 체크를 위한 health check 로직 생성 및 테스트 하기 (제한 권한 없음) - 메디시티 참고

// 공용 REST
/* 
-- restParams --
dispatch : useDispatch
alert : useAlert
method : "post", "get", "delete", "put", "post_multi", "put_multi"
url : ""
data : {}
callback : callback()
admin: ""
*/
const CommonRest = async (restParams = {}) => {
    const setIsSpinner = restParams.err.setIsSpinner;
    const alert = restParams.err.alert ? restParams.err.alert : "";
    const resetUserInfoAdmin = restParams.err.resetUserInfoAdmin;
    const resetUserTokenAdmin = restParams.err.resetUserTokenAdmin;

    const method = restParams.method;
    const url = restParams.url;
    const data = restParams.data;
    const admin = restParams.admin;

    await RestServer(method, url, data, admin)
        .then((response) => {
            restParams.callback(response);
        })
        .catch((error) => {
            CommonErrorCatch(
                error,
                setIsSpinner,
                alert,
                resetUserInfoAdmin,
                resetUserTokenAdmin
            );
        });
};


// --에러처리--
// 파라미터:
// error - error객체
// alert - useAlert()
const CommonErrorCatch = async (
    error,
    setIsSpinner,
    alert,
    resetUserInfoAdmin,
    resetUserTokenAdmin
) => {
    // 오류발생시 실행
    console.log(error);

    if (error.response) {
        if (
            error.response.status === errorCode.timeOut || // 타임아웃 - 500
            error.response.status === errorCode.timeOut2 // 타임아웃 - 503
        ) {
            setIsSpinner(false);

            CommonNotify({
                type: "alert",
                hook: alert,
                message: "잠시 후 다시 시도해주세요",
            });
        }
        // 비정상접근 or 비정상토큰
        else if (
            error.response.headers.result_code === errorCode.abnormalApproach || // 비정상 접근 - "9995"
            error.response.headers.result_code === errorCode.emptyToken || // 토큰이 없음 - "2000"
            error.response.headers.result_code === errorCode.tokenExpired || // 토큰 만료 - "2001"
            error.response.headers.result_code === errorCode.tokenTamperWith || // 올바른 토큰 아닐 시 - "2002"
            error.response.headers.result_code === errorCode.invalidToken // 올바른 토큰 아닐 시 - "2003"
        ) {
            tokenExpire(
                setIsSpinner,
                alert,
                resetUserInfoAdmin,
                resetUserTokenAdmin
            );
        }
        // 에러
        else {
            setIsSpinner(false);

            CommonNotify({
                type: "alert",
                hook: alert,
                message: error.response.headers.result_message_ko,
            });
        }
    } else {
        setIsSpinner(true);
    }

    // TODO: 타임아웃 전역 사용 가능하도록 (env 설정)
    const timeOut = 20000;

    // 타임아웃 (axios 타임아웃 걸릴경우)
    if (error.message === `timeout of ${timeOut}ms exceeded`) {

        setIsSpinner(false);

        CommonNotify({
            type: "alert",
            hook: alert,
            message: "잠시 후 다시 시도해주세요", // 다국어 지원을 위해 message_ko, message_en 방식으로 분류 & 메세지 자체를 따로 빼서 관리
        });
    }
};


export {CommonRest, CommonErrorCatch}