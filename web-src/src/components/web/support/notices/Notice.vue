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

const searchKeyword = ref(null);
const board = ref(null);
const state = reactive({
    board: null,
});

onMounted(() => {
    getBoardDetail();
});

const fileBaseUrl = apiPath.api_file;

// 공지사항 상세 데이터 가져오기
const getBoardDetail = () => {
    CommonSpinner(true);

    const boardIdx = route.params.notice;

    // /v1/board/{board_idx}
    // GET
    // 게시판 상세
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
            <LeftMenu subvisual="subvisual_notice" page="notice" />
            <div id="content">
                <div id="subtitle">
                    <h2>공지사항</h2>
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
                                <th colspan="3">{{ state.board.subject }}</th>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <ul>
                                        <li>{{ state.board.reg_user_name_ko }}</li>
                                        <li class="imbar">|</li>
                                        <li>{{ state.board.view_count }}</li>
                                        <li class="imbar">|</li>
                                        <li>{{ state.board.reg_dttm }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" v-if="state.board.file_info.length !== 0">
                                    <ul>
                                        <li class="download_li" v-for="item in state.board.file_info">
                                            <a class="attachment_parent" :href="`${fileBaseUrl}${item.file_path_enc}`">
                                                <img src="/img/common/file.svg">
                                                {{ item.file_name }}
                                            </a>
                                            <div class="attachment" style="display:none;">
                                                <div class="xbtn"><img src="/img/common/x_btn.png"></div>
                                            </div>
                                        </li>
                                    </ul>
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
                        </tbody>
                    </table>
                    <div class="board_btn_wrap">
                        <div class="boardW_btn">
                            <a :href="routerPath.web_notices_url" class="back_btn">목록
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>