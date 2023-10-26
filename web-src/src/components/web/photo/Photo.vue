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
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { useRoute } from "vue-router";

// ------------------- import End --------------------

const route = useRoute();

const searchKeyword = ref(null);
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

    const boardIdx = route.params.photo;

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
            <LeftMenu subvisual="subvisual_notice" page="photo"/>
            <div id="content">
                <div id="subtitle">
                    <h2>포토 갤러리</h2>
                </div>
                <div class="gallery_view" data-aos-duration="1000" data-aos-delay="400">
                    <table v-if="state.board">
                        <thead>
                            <tr>
                                <th class="gallery_title">{{ state.board.subject }}</th>
                            </tr>
                            <tr>
                                <th><span class="gallery_subtitle" v-if="state.board.sub_title">{{ state.board.sub_title }}</span></th>
                            </tr>
                            <tr>
                                <td>
                                    <ul class="gallery_info">
                                        <li>{{ state.board.reg_user_name_ko }}</li>
                                        <li class="imbar">|</li>
                                        <li>조회수 {{ state.board.view_count }}</li>
                                        <li class="imbar">|</li>
                                        <li>{{ state.board.reg_dttm }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <!-- <tr> -->
                                <!-- <td colspan="3"> -->
                                    <!-- <ul>
                                        <li class="download_li">
                                            <a href="#none" onclick class="attachment_parent">첨부파일
                                                <img src="/img/common/files.jpg">
                                            </a>
                                            <div class="attachment" style="display:none;">
                                                <div class="xbtn"><img src="/img/common/x_btn.png"></div>
                                            </div>
                                        </li>
                                    </ul> -->
                                    <!-- <ul
                                        v-if="state.board.file_info.length !== 0"
                                        v-for="item in state.board.file_info"
                                    >
                                        <li class="download_li">
                                            <a class="attachment_parent" :href="`${fileBaseUrl}${item.file_path_enc}`">{{ item.file_name }}
                                                <img src="/img/common/files.jpg">
                                            </a>
                                            <div class="attachment" style="display:none;">
                                                <div class="xbtn"><img src="/img/common/x_btn.png"></div>
                                            </div>
                                        </li>
                                    </ul> -->
                                <!-- </td> -->
                            <!-- </tr> -->
                        </thead>
                        <tbody>
                            <tr style="border-bottom: none;">
                                <td 
                                    v-if="state.board.file_info.length !== 0"
                                    v-for="item in state.board.file_info"
                                >
                                    <div class="gallery_content">
                                        <img :src="`${fileBaseUrl}${item.file_path_enc}`" :alt="item.file_name">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="gallery_content_text">
                                        {{ state.board.content }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="detail_btn_wrap">
                            <a :href="routerPath.web_photo_url" class="detail_btn">목록
                            </a>
                            <!-- <span class="left2_btn"><?=$btn_link['delete']?></span>
                            <span class="back_btn"><?=$btn_link['update']?></span> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>