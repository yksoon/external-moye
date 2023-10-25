<script setup>
import {
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from "@/webPath";
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { useRoute } from "vue-router";

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

    const boardIdx = route.params.movie;

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
        callback: (res) => responsLogic(res),
        admin: "Y"
    };
    CommonRest(restParams);

    // 완료 로직
    const responsLogic = (res) => {
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
            <LeftMenu subvisual="subvisual_notice" page="movie"/>
            <div id="content">
                <div id="subtitle">
                    <h2>영상 갤러리</h2>
                </div>
                <div data-aos-duration="1000" data-aos-delay="400">
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
                                        <li>조회수 {{ state.board.view_count }}</li>
                                        <li class="imbar">|</li>
                                        <li>{{ state.board.reg_dttm }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <!-- <tr>
                                <td colspan="3">
                                    <ul>
                                        <li class="download_li">
                                            <a href="#none" onclick class="attachment_parent">첨부파일
                                                <img src="/img/common/files.jpg">
                                            </a>
                                            <div class="attachment" style="display:none;">
                                                <div class="xbtn"><img src="/img/common/x_btn.png"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </td>
                            </tr> -->
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan=3>
                                    <div class="board_content" style="display: flex; justify-content: center; align-items:center;">
                                        <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${state.board.content}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="board_btn_wrap">
                        <div class="boardW_btn">
                            <a :href="routerPath.web_movie_url" class="back_btn">목록
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>