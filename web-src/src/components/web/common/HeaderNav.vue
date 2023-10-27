<script setup>
import {
    CommonErrModule,
    CommonConsole,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { useModalStore } from "@/stores/modal";
import { storeToRefs } from "pinia";
import { boardModel } from "../notice/models/notice";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
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
    filePath: null,
});

onMounted(() => {
    getLastBoard(1, 1, "");
    // getCategoryList(1, 1, "");
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

            // CommonSpinner(false);

            CommonNotify({
                type: "alert",
                message: res.headers.result_message_ko,
            });
        }
    };
};

// 카테고리 리스트 가져오기
// const getCategoryList = (pageNum, pageSize, searchKeyword) => {
//     CommonSpinner(true);

//     // /v1/people/categories
//     // POST
//     // 카테고리 목록
//     const url = apiPath.api_admin_get_categories;
//     const data = {
//         page_num: pageNum,
//         page_size: pageSize,
//         search_keyword: searchKeyword,
//         category_div: "000"
//     };

//     // 파라미터
//     const restParams = {
//         method: "post",
//         url: url,
//         data: data,
//         callback: (res) => responseLogic(res),
//         admin: "Y",
//     };
//     CommonRest(restParams);

//     // 완료 로직
//     const responseLogic = (res) => {
//         let result_code = res.headers.result_code;

//         // 성공
//         if (
//             result_code === successCode.success ||
//             result_code === successCode.noData
//         ) {
//             let result_info = res.data.result_info;

//             state.categoryList = result_info;

//             if (state.categoryList.length) {
//                 console.log(state.categoryList)
//                 // for (let i = 0; i < state.categoryList.length; i++) {
//                 //     getCategoryList(1, maxRowNum.people, "");
//                 // }
//             }

//             // CommonSpinner(false);
//         } else {
//             // 에러
//             CommonConsole("log", res);

//             // CommonSpinner(false);
//         }
//     };
// };

const readyAlert = () => {
    alert("준비중입니다 :-)");
};
</script>

<template>
    <div id="gnb">
        <ul>
            <li>
                <a @click="readyAlert">모두의예체능 소개</a>
                <div class="submenu">
                    <a @click="readyAlert">인사말</a>
                    <a @click="readyAlert">모두의 예체능 소개</a>
                    <a @click="readyAlert">조직 및 구성</a>
                    <a :href="routerPath.web_history_url">연혁</a>
                    <a @click="readyAlert">CI</a>
                    <a @click="readyAlert">오시는길</a>
                </div>
            </li>
            <li>
                <a @click="readyAlert">사업소개</a>
                <div class="submenu">
                    <a @click="readyAlert">사업분야</a>
                    <a @click="readyAlert">플랫폼 서비스 </a>
                    <a @click="readyAlert">예체능 시설 Promotion</a>
                </div>
            </li>
            <li>
                <a :href="routerPath.web_people_url">교육서비스</a>
                <div class="submenu">
                    <a :href="routerPath.web_people_url">코치진</a>
                    <a @click="readyAlert">Class 130 Category</a>
                    <a @click="readyAlert">성장과정별 교육</a>
                    <a @click="readyAlert">예정교육</a>
                </div>
            </li>
            <li>
                <a @click="readyAlert">Partnership</a>
                <div class="submenu">
                    <a @click="readyAlert">파트너쉽</a>
                </div>
            </li>
            <li>
                <a @click="readyAlert">모두의예체능 APP</a>
                <div class="submenu">
                    <a @click="readyAlert">모두의예체능 APP</a>
                </div>
            </li>
            <li>
                <a :href="routerPath.web_notice_url">고객센터</a>
                <div class="submenu">
                    <a :href="routerPath.web_notice_url">공지사항</a>
                    <a :href="routerPath.web_consulting_url">상담문의</a>
                    <a
                        v-if="state.board"
                        :href="`${fileBaseUrl}${state.filePath}`"
                        >회사소개서 다운로드</a
                    >
                    <a :href="routerPath.web_photo_url">포토 갤러리</a>
                    <a :href="routerPath.web_movie_url">영상 갤러리</a>
                </div>
            </li>
        </ul>
    </div>
</template>
