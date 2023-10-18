<script setup>
import {
    CommonConsole,
    CommonErrModule,
    CommonModal,
    CommonNotify,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { apiPath } from "@/webPath";
import { reactive, ref, onMounted } from "vue";
import { marqueeInit } from "@/common/js/crawler";
import { routerPath } from '@/webPath';
import LeftMenu from '@/components/web/common/LeftMenu.vue';

// ------------------- import End --------------------

const searchKeyword = ref(null);
const state = reactive({
    boardList: [],
    pageInfo: {},
});

onMounted(() => {
    getBoardList(1, maxRowNum.basic, "");
});

const fileBaseUrl = apiPath.api_file;

// 영상게시판 리스트 가져오기
const getBoardList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/boards
    // POST
    // board_type
    // 000 : 공지사항
    // 100 : 상담문의
    // 200 : 포토게시판
    // 300 : 영상게시판 [v]
    // 400 : 회사소개
    // 900 : 기타
    const url = apiPath.api_admin_boards;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        board_type: "300",
    };

    // 파라미터
    const restParams = {
        method: "post",
        url: url,
        data: data,
        callback: (res) => responsLogic(res),
        admin: "Y",
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
            let page_info = res.data.page_info;

            state.boardList = result_info;

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
            <LeftMenu page="movie"/>
            <div id="content">
                <div id="subtitle">
                    <h2>영상 갤러리</h2>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <form name="flist" method="post">
                        <input type="hidden" name="hCode" value="">
                        <input type="hidden" name="page" value="">
                        <input type="hidden" name="sca" value="">
                        <input type="hidden" name="sfl" value="">
                        <input type="hidden" name="stx" value="">
                        <input type="hidden" name="pg" value="">
                        <div class="gallery_box" v-if="state.boardList.length !== 0">
                            <div class="col-md-3 gallery_thumb" v-for="board in state.boardList">
                                <a :href="`${routerPath.web_photo_url}/${board.board_idx}`">
                                    <div class="thumbnail">
                                        <div v-if="board.file_info.length" class="bg-thumb" :style="`background-image:url(''); background-size:cover;`">
                                            <span></span>
                                        </div>
                                        <div v-else  class="bg-thumb"></div>
                                        <div class="caption">
                                            <p>{{board.subject}}</p>
                                            <div class="info">
                                                <span class="datetime">{{board.reg_dttm}}</span>
                                                <span class="hits">조회수 : {{board.view_count}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="paginate">
                            <ul class="page_btn">
                                <a href="#" class="direction"><img src="/img/common/page_Btn_02.jpg" alt="이전페이지"></a>
                                <strong>1</strong> <a href="#" class="direction"><img src="/img/common/page_Btn_03.jpg"
                                        alt="다음페이지"></a>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>