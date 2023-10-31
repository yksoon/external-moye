<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import {
    CommonConsole,
    CommonNotify,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from '@/webPath';

// ------------------- import End --------------------

const searchKeyword = ref(null);
const state = reactive({
    historyTarget: [],
    historyInfo: [],
});

const fileBaseUrl = apiPath.api_file;

onMounted(() => {
    getHistoryList(1, maxRowNum.people, "");
});

// 연혁 리스트 가져오기
const getHistoryList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/_histories
    // POST
    // 연혁 목록
    const url = apiPath.api_admin_get_histories;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        show_yn: "Y"
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

            state.historyTarget = result_info;

            for (let i = 0; i < state.historyTarget.length; i++) {
                getHistoryDetail(state.historyTarget[i].history_idx);
            }

            // CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            // CommonSpinner(false);
        }
    };
};

// 연혁 상세 가져오기
const getHistoryDetail = (history_idx) => {
    CommonSpinner(true);

    const historyIdx = String(history_idx);

    // /v1/_history/{history_idx}
    // GET
    const url = apiPath.api_admin_detail_history + `/${historyIdx}`;
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
            CommonSpinner(false);

            // state.historyInfo = [
            //     ...state.historyInfo,
            //     { idx: result_info.history_idx, detail_info: result_info.detail_info }
            // ];

            if (result_info.detail_info.length) {
                state.historyInfo.push(...result_info.detail_info);
            }

            console.log(state.historyInfo);
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
</script>

<template>
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_intro" page="histories" />
            <div id="content">
                <div id="subtitle">
                    <h2>연혁</h2>
                </div>
                <div class="history">
                    <div v-if="state.historyInfo.length !== 0">
                        <div class="history_box" v-for="target in state.historyTarget">
                            <div class="year">{{ target.target_year }}</div>
                            <ul class="month">
                                <li v-if="state.historyInfo.filter((el) => el.history_idx === target.history_idx).length !== 0"
                                    v-for="history in state.historyInfo.filter((el) => el.history_idx === target.history_idx)">
                                    <div>
                                        <h6
                                            v-if="history.start_date && history.end_date && history.start_date !== history.end_date">
                                            {{ history.start_date + '~' + history.end_date }}월</h6>
                                        <h6 v-else-if="!history.start_date && !history.end_date">-</h6>
                                        <h6 v-else>{{ history.start_date ? history.start_date : history.end_date }}월</h6>
                                    </div>
                                    <div class="title_wrap">
                                        <div class="history_title">
                                            <p class="tit">{{ history.title }} <span v-if="history.place">({{ history.place
                                            }})</span></p>
                                            <a v-if="history.portfolio_link" :href="history.portfolio_link" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960"
                                                    width="24">
                                                    <path
                                                        d="M240-400h480L570-600 450-440l-90-120-120 160ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <p class="subtit" v-if="history.sub_title">{{ history.sub_title }}</p>
                                        <p class="txt" v-if="history.content">{{ history.content }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-if="state.historyInfo.length === 0" style="display: flex; justify-content: center;">
                        <b> 데이터가 없습니다. </b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>