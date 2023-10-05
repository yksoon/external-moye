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

    // /v1/_file/000/
    // GET
    // 파일 다운로드
    api_file: `${base_api_url + slash + version + slash}_file/000/`,

    // ---------------------- ADMIN ----------------------

    // ---------------------- Sign In API ----------------------
    // /v1/signin
    // post
    // 공통 코드 result
    api_admin_signin: `${base_api_url + slash + version + slash}signin`,

    // /v1/signout
    // POST
    // 로그아웃
    api_auth_signout: `${base_api_url + slash + version + slash}signout`,

    // ---------------------- Menu Management API ----------------------
    // /v1/menus
    // GET
    // 메뉴 리스트 호출
    api_admin_menus: `${base_api_url + slash + version + slash}menus`,

    // ---------------------- Board Management API ----------------------
    // /v1/_boards
    // POST
    // 게시판 리스트 호출
    api_admin_boards: `${base_api_url + slash + version + slash}_boards`,

    // /v1/_board
    // POST
    // 게시판 등록
    api_admin_reg_board: `${base_api_url + slash + version + slash}_board`,

    // /v1/board/
    // DELETE
    // 게시판 삭제
    api_admin_remove_board: `${base_api_url + slash + version + slash}board`,

    // /v1/board/{board_idx}
    // GET
    // 게시판 상세
    api_admin_get_board: `${base_api_url + slash + version + slash}board`,

    // /v1/board/
    // PUT MULTI
    // 게시판 수정
    api_admin_mod_board: `${base_api_url + slash + version + slash}board`,
};

export { routerPath, apiPath };
