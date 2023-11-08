<script setup>
import {
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from "@/webPath";
import { useRoute } from "vue-router";
import LeftMenu from '@/components/web/common/LeftMenu.vue';

// ------------------- import End --------------------

const route = useRoute();

const state = reactive({
    board: null,
});

onMounted(() => {
    getBoardDetail();
});

const fileBaseUrl = apiPath.api_file;

// 상담문의 상세 데이터 가져오기
const getBoardDetail = () => {
    CommonSpinner(true);

    const boardIdx = route.params.qna;

    // /v1/board/{board_idx}
    // GET
    // 상담문의 상세
    const url = apiPath.api_admin_get_board + `/${boardIdx}`;
    const data = {};

    // 파라미터
    const restParams = {
        method: "get",
        url: url,
        data: data,
        callback: (res) => responseLogic(res),
        admin: "Y"
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
            // let page_info = res.data.page_info;

            state.board = result_info;

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

</script>

<template>
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_notice" page="consulting" />
            <div id="content">
                <div id="subtitle">
                    <h2>상담문의</h2>
                </div>
                <div>
                    <table class="board_Vtable" v-if="state.board">
                        <colgroup>
                            <col width="18%">
                            <col width="*">
                            <col width="*">
                        </colgroup>
                        <thead>
                            <tr>
                                <th colspan="3">{{ state.board.subject }} &nbsp;<img v-if="state.board.open_yn === 'N'"
                                        src="/img/common/common_lock.png" alt=""></th>
                                <!-- <th colspan="3">{{ state.board.subject }}</th> -->
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <ul>
                                        <li>{{ state.board.user_name_first_ko + state.board.user_name_last_ko }}</li>
                                        <li class="imbar">|</li>
                                        <li>{{ state.board.reg_dttm }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3"><b>{{ state.board.category_type }}</b></td>
                            </tr>
                            <tr v-if="state.board.file_info.length !== 0">
                                <td>
                                    <div>
                                        <div v-for="item in state.board.file_info" class="download_li">
                                            <a :href="`${fileBaseUrl}${item.file_path_enc}`">
                                                <img src="/img/common/file.svg" alt="" />
                                                {{ item.file_name }}
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan=3>
                                    <div class="board_content">
                                        {{ state.board.content }}
                                    </div>
                                </td>
                            </tr>
                            <!-- 관리자 댓글 답변 -->
                            <tr v-if="state.board.comment_info">
                                <th>{{ state.board.comment_info.user_name_ko }}</th>
                                <td colspan="2">{{ state.board.comment_info.content }}</td>
                            </tr>
                            <tr v-if="state.board.comment_info && state.board.comment_info.file_info.length !== 0">
                                <td>
                                    <div>
                                        <div v-for="item in state.board.comment_info.file_info" class="download_li">
                                            <a :href="`${fileBaseUrl}${item.file_path_enc}`">
                                                <img src="/img/common/file.svg" alt="" />
                                                {{ item.file_name }}
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="board_btn_wrap">
                        <div class="boardW_btn">
                            <a :href="routerPath.web_consulting_url" class="back_btn">목록</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>