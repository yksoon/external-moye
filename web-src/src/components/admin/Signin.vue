<script>
import { onMounted, ref, toRaw } from "vue";
import { apiPath } from "@/webPath.js";
import {
    CommonErrModule,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { useUserInfoStore, useUserTokenStore } from "@/stores/userInfo";
import { useRouter } from "vue-router";
import "@/common/css/admin.css";

export default {
    name: "Signin",
    setup() {
        const inputID = ref(null);
        const inputPW = ref(null);

        const router = useRouter();

        const useUserInfo = useUserInfoStore();
        const useUserToken = useUserTokenStore();
        const userToken = useUserToken.getUserToken;

        onMounted(() => {
            if (userToken) {
                router.push({ name: "admin" });
            }
        });

        // 로그인 버튼
        const clickLogin = () => {
            if (!inputID.value.value) {
                CommonNotify({
                    type: "alert",
                    message: "아이디를 입력해주세요",
                    callback: () => callbackLogic(),
                });

                const callbackLogic = () => {
                    setTimeout(() => {
                        inputID.value.focus();
                    }, 0);
                };

                return false;
            }
            if (!inputPW.value.value) {
                CommonNotify({
                    type: "alert",
                    message: "비밀번호를 입력해주세요",
                    callback: () => callbackLogic(),
                });

                const callbackLogic = () => {
                    setTimeout(() => {
                        inputPW.value.focus();
                    }, 0);
                };
                return false;
            }

            login();
        };

        // 로그인
        const login = () => {
            CommonSpinner(true);

            // /v1/signin
            // POST
            const url = apiPath.api_admin_signin;
            const data = {
                // signup_type: "000",
                user_id: inputID.value.value,
                user_pwd: inputPW.value.value,
                admin_yn: "Y",
            };

            // 처리 완료 후 로직
            const responseLogic = (res) => {
                let result_code = res.headers.result_code;

                if (result_code === successCode.success) {
                    let user_info = res.data.result_info;

                    // 블랙리스트
                    let deleteKey = [
                        "md_licenses_number",
                        // "signin_policy",
                        // "signin_policy_cd",
                        "user_pwd",
                        "user_role",
                        "user_salt",
                    ];

                    for (let i = 0; i < deleteKey.length; i++) {
                        delete user_info[deleteKey[i]];
                    }

                    // setUserInfoAdmin(user_info);
                    useUserInfo.setUserInfo(user_info);
                    // setUserTokenAdmin(user_info.token);
                    useUserToken.setUserToken(user_info.token);

                    // setIsSpinner(false);
                    CommonSpinner(false);

                    // navigate(routerPath.admin_main_url);
                    router.push({ name: "admin" });
                } else {
                    // setIsSpinner(false);
                    CommonSpinner(false);

                    CommonNotify({
                        type: "alert",
                        message: res.headers.result_message_ko,
                    });
                }
            };

            // 파라미터
            const restParams = {
                method: "post",
                url: url,
                data: data,
                callback: (res) => responseLogic(res),
                admin: "Y",
            };

            CommonRest(restParams);
        };

        const handleOnKeyPress = (e) => {
            if (e.key === "Enter") {
                clickLogin(); // Enter 입력이 되면 클릭 이벤트 실행
            }
        };

        return {
            inputID: inputID,
            inputPW: inputPW,
            clickLogin,
            handleOnKeyPress,
        };
    },
};

</script>

<template>
    <div class="wrap">
        <div class="admin">
            <header>
                <div class="login_wrap">
                    <div class="login">
                        <h1>
                            <img
                                src="/img/admin/logo_adm.png"
                                alt=""
                                style="width: 210px"
                            />
                        </h1>
                        <p>로그인을 해주세요</p>
                        <div class="input_id">
                            <h5>아이디</h5>
                            <input
                                type="text"
                                class="input"
                                placeholder="ID"
                                id="inputID"
                                ref="inputID"
                                @keydown="handleOnKeyPress"
                                autofocus
                            />
                        </div>
                        <div>
                            <h5>비밀번호</h5>
                            <input
                                type="password"
                                class="input"
                                placeholder="PW"
                                id="inputPW"
                                ref="inputPW"
                                @keydown="handleOnKeyPress"
                            />
                        </div>
                        <div class="flex login_btn">
                            <div>
                                <!-- <input type="checkbox" id="id_remember" />
                                <label for="id_remember">아이디 저장</label> -->
                            </div>
                            <div>
                                <a
                                    class="subbtn on"
                                    @click="clickLogin"
                                    style="cursor: pointer"
                                >
                                    로그인
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<!-- import 시 동일하게 scoped 옵션이 적용되어 다른 컴포넌트에 영향 없는지 테스트 해보기 -->
<!-- 퍼블리싱 어떻게 적용하는게 좋을지 고민해보기 -->
<style scoped></style>
