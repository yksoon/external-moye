// 콜론, slash
const colon = ":";
const slash = "/";

// 프로토콜
// 호스트
// 포트
// 버전
const protocol = "http://";

// 실행 환경에 따라 분기처리
// TODO: 백엔드 세팅 후 host 주소 변경
// const isDeveloping = process.env.VUE_APP_ISDEVELOPING;

// gateway.hicomp.com:60000 => gateway prefix로만 구분
// ex) http://gateway.hicomp.com:60000/jobara/v1/info
// ex) http://gateway.hicomp.com:60000/moye/v1/info

// let host = "";
// if (isDeveloping === "local" || isDeveloping === "dev") {
//     host = "dev-api.medi-city.co.kr";
// } else if (isDeveloping === "prd") {
//     host = "api.medi-city.co.kr";
// } else {
//     host = "dev-api.medi-city.co.kr";
// }

const host = "gateway.hicompint.com";

const port = "60000";

const version = "v1";

// const gateway = "jobara";.
const gateway = "moye";

// 기본 url
// const base_url = protocol + host + colon + port + slash + version + slash;
const base_url = "/";
const base_api_url = protocol + host + colon + port + slash + gateway;
// const base_api_url = protocol + host + colon + port;
// const base_api_url = process.env.REACT_APP_DB_HOST;
// const base_api_url = "http://localhost:3005";
// "proxy": "http://jejujobara.com:60000"

// admin
const admin = "admin";

const routerPath = {
    // ---------------------- web -------------------------
    // 메인
    // /
    web_main_url: `${base_url}`,

    // notice
    // /notice/notice-list
    web_notice_url: `${base_url}notice/notices`,

    // ---------------------- admin -------------------------
    // 메인
    // /admin
    admin_main_url: `${base_url + admin}`,

    // 로그인
    // /admin/signin
    admin_signin_url: `${base_url + admin + slash}signin${slash}`,
};

const apiPath = {
    // ---------------------- Code Management API ----------------------

    // /v1/_codes
    // POST
    // 공통 코드
    api_codes: `${base_api_url + slash + version + slash}_codes`,

    // /v1/info/result
    // GET
    // 공통 코드 result
    api_result: `${base_api_url + slash + version + slash}info/result`,
};

export { routerPath, apiPath };
