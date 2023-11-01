<script setup>
import {
    CommonErrModule,
    CommonConsole,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from "@/webPath";
import { useRoute } from "vue-router";

// ------------------- import End --------------------

const props = defineProps({
    page: String,
    subvisual: String
});

const route = useRoute();

const searchKeyword = ref(null);
const state = reactive({
    lastBoard: [],
    board: [],
    filePath: null
});

onMounted(() => {
    if (props.subvisual === 'subvisual_notice') {
        getLastBoard(1, 1, "");
    }
});

const fileBaseUrl = apiPath.api_file;

// 회사소개서 다운로드 링크 가져오기
const getLastBoard = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

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
                CommonSpinner(false);
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
            state.filePath = state.board.file_info.length ? state.board.file_info[0].file_path_enc : '';

            CommonSpinner(false);
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
}

const readyAlert = () => {
    alert("준비중입니다 :-)");
};

</script>

<template>
    <!-- 모두의예체능 소개 -->
    <div v-if="props.subvisual === 'subvisual_intro'">
        <div id="subvisual" class="subvisual_intro">
            <div class="sub_txt">
                <h2>
                    모두의예체능 소개
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_greetings_url" :class="page === 'greetings' ? 'on' : ''">인사말</a></li>
                    <li><a :href="routerPath.web_introduction_url" :class="page === 'introduction' ? 'on' : ''">모두의 예체능
                            소개</a></li>
                    <li><a :href="routerPath.web_members_url" :class="page === 'members' ? 'on' : ''">조직 및 구성</a></li>
                    <li><a :href="routerPath.web_histories_url" :class="page === 'histories' ? 'on' : ''">연혁</a></li>
                    <li><a :href="routerPath.web_ci_url" :class="page === 'ci' ? 'on' : ''">CI</a></li>
                    <li><a :href="routerPath.web_location_url" :class="page === 'location' ? 'on' : ''">오시는길</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 사업소개 -->
    <div v-if="props.subvisual === 'subvisual_business'">
        <div id="subvisual" class="subvisual_business">
            <div class="sub_txt">
                <h2>
                    사업소개
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_businessAreas_url" :class="page === 'category' ? 'on' : ''">사업분야</a>
                    </li>
                    <li><a :href="routerPath.web_platform_url" :class="page === 'platform' ? 'on' : ''">플랫폼 서비스
                            소개</a></li>
                    <li><a :href="routerPath.web_promotion_url" :class="page === 'promotion' ? 'on' : ''">예체능 시설
                            Promotion</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 교육서비스 -->
    <div v-if="props.subvisual === 'subvisual_people'">
        <div id="subvisual" class="subvisual_people">
            <div class="sub_txt">
                <h2>
                    교육서비스
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_peoples_url" :class="page === 'people' ? 'on' : ''">코치진</a></li>
                    <li><a :href="routerPath.web_categories_url" :class="page === 'class' ? 'on' : ''">Class 130
                            Category</a></li>
                    <li><a :href="routerPath.web_growthProcess_url" :class="page === 'growth' ? 'on' : ''">성장과정별 교육</a></li>
                    <li><a :href="routerPath.web_scheduledEducation_url" :class="page === 'schedule' ? 'on' : ''">예정교육</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 파트너쉽 -->
    <div v-if="props.subvisual === 'subvisual_partnership'">
        <div id="subvisual" class="subvisual_partnership">
            <div class="sub_txt">
                <h2>
                    Partnership
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_partnership_url" :class="page === 'partnership' ? 'on' : ''">파트너쉽</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 모두의예체능 -->
    <div v-if="props.subvisual === 'subvisual_app'">
        <div id="subvisual" class="subvisual_app">
            <div class="sub_txt">
                <h2>
                    모두의예체능 APP
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_appIntro_url" :class="page === 'app' ? 'on' : ''">모두의예체능 APP</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 고객센터 -->
    <div v-if="props.subvisual === 'subvisual_notice'">
        <div id="subvisual" class="subvisual_notice">
            <div class="sub_txt">
                <h2>
                    고객센터
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_notices_url" :class="page === 'notice' ? 'on' : ''">공지사항</a></li>
                    <li><a :href="routerPath.web_consulting_url" :class="page === 'consulting' ? 'on' : ''">상담문의</a></li>
                    <li><a :href="state.filePath !== null ? `${fileBaseUrl}${state.filePath}` : ''">회사소개서 다운로드</a></li>
                    <li><a :href="routerPath.web_photoGallery_url" :class="page === 'photo' ? 'on' : ''">포토 갤러리</a></li>
                    <li><a :href="routerPath.web_movieGallery_url" :class="page === 'movie' ? 'on' : ''">영상 갤러리</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>