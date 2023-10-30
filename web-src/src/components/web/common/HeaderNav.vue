<script setup>
import {
    CommonConsole,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from "@/webPath";
import LeftMenu from "@/components/web/common/LeftMenu.vue";
import { useRoute } from "vue-router";

// ------------------- import End --------------------

const route = useRoute();

const searchKeyword = ref(null);
const state = reactive({
    lastBoard: [],
    board: [],
    lastCategory: [],
    filePath: null,
});

onMounted(() => {
    getLastBoard(1, 1, "");
    getFirstCategory(1, 1, "");
});

const fileBaseUrl = apiPath.api_file;

// 회사소개서 다운로드 링크 가져오기
const getLastBoard = (pageNum, pageSize, searchKeyword) => {
    // CommonSpinner(true);

    // /v1/boards
    // POST
    // board_type
    // 000 : 공지사항
    // 100 : 상담문의
    // 200 : 포토게시판
    // 300 : 영상게시판
    // 400 : 회사소개 [v]
    // 900 : 기타
    const url = apiPath.api_admin_boards;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        board_type: "400",
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

    // 완료 로직
    const responseLogic = (res) => {
        let result_code = res.headers.result_code;

        // 성공
        if (
            result_code === successCode.success ||
            result_code === successCode.noData
        ) {
            let result_info = res.data.result_info;

            state.lastBoard = result_info;

            // 최신 회사소개서 board_idx로 상세 데이터 요청
            if (state.lastBoard) {
                getBoard(state.lastBoard[0].board_idx);
            } else {
                // CommonSpinner(false);
            }
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

const getBoard = (board_idx) => {
    const boardIdx = String(board_idx);

    // v1/board/{board_idx}
    // GET
    const url = apiPath.api_admin_get_board + `/${boardIdx}`;
    const data = {};

    // 파라미터
    const restParams = {
        method: "get",
        url: url,
        data: data,
        callback: (res) => responseLogic(res),
        admin: "Y",
    };
    CommonRest(restParams);

    const responseLogic = (res) => {
        let result_code = res.headers.result_code;
        let result_info = res.data.result_info;

        // 성공
        if (result_code === successCode.success) {
            state.board = result_info;
            state.filePath = state.board.file_info.length
                ? state.board.file_info[0].file_path_enc
                : "";

            // CommonSpinner(false);
        }
        // 에러
        else {
            CommonConsole("log", res);

            CommonSpinner(false);

            CommonNotify({
                type: "alert",
                message: res.headers.result_message_ko,
            });
        }
    };
};

// 전체 카테고리 중 가장 최근 데이터 불러오기
const getFirstCategory = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/people/_categories
    // POST
    // 카테고리 목록
    const url = apiPath.api_admin_get_categories;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        category_div: "000"
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

    // 완료 로직
    const responseLogic = (res) => {
        let result_code = res.headers.result_code;

        // 성공
        if (
            result_code === successCode.success ||
            result_code === successCode.noData
        ) {
            let result_info = res.data.result_info;
            
            state.lastCategory = result_info[0];

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

const readyAlert = () => {
    alert("준비중입니다 :-)");
};
</script>

<template>
    <div id="gnb">
        <ul>
            <li>
                <a :href="routerPath.web_greetings_url">모두의예체능 소개</a>
                <div class="submenu">
                    <a :href="routerPath.web_greetings_url">인사말</a>
                    <a :href="routerPath.web_introduction_url">모두의 예체능 소개</a>
                    <a :href="routerPath.web_members_url">조직 및 구성</a>
                    <a :href="routerPath.web_histories_url">연혁</a>
                    <a :href="routerPath.web_ci_url">CI</a>
                    <a :href="routerPath.web_location_url">오시는길</a>
                </div>
            </li>
            <li>
                <a :href="routerPath.web_businessAreas_url">사업소개</a>
                <div class="submenu">
                    <a :href="routerPath.web_businessAreas_url">사업분야</a>
                    <a :href="routerPath.web_platform_url">플랫폼 서비스 </a>
                    <a :href="routerPath.web_promotion_url">예체능 시설 Promotion</a>
                </div>
            </li>
            <li>
                <a :href="routerPath.web_peoples_url + '/' + state.lastCategory.category_idx">교육서비스</a>
                <div class="submenu">
                    <a :href="routerPath.web_peoples_url + '/' + state.lastCategory.category_idx">코치진</a>
                    <a :href="routerPath.web_categories_url">Class 130 Category</a>
                    <a :href="routerPath.web_growthProcess_url">성장과정별 교육</a>
                    <a :href="routerPath.web_scheduledEducation_url">예정교육</a>
                </div>
            </li>
            <li>
                <a :href="routerPath.web_partnership_url">Partnership</a>
                <div class="submenu">
                    <a :href="routerPath.web_partnership_url">파트너쉽</a>
                </div>
            </li>
            <li>
                <a :href="routerPath.web_appIntro_url">모두의예체능 APP</a>
                <div class="submenu">
                    <a :href="routerPath.web_appIntro_url">모두의예체능 APP</a>
                </div>
            </li>
            <li>
                <a :href="routerPath.web_notices_url">고객센터</a>
                <div class="submenu">
                    <a :href="routerPath.web_notices_url">공지사항</a>
                    <a :href="routerPath.web_consulting_url">상담문의</a>
                    <a
                        v-if="state.board"
                        :href="`${fileBaseUrl}${state.filePath}`"
                        >회사소개서 다운로드</a
                    >
                    <a :href="routerPath.web_photoGallery_url">포토 갤러리</a>
                    <a :href="routerPath.web_movieGallery_url">영상 갤러리</a>
                </div>
            </li>
        </ul>
    </div>
</template>
