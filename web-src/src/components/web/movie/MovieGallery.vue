<script setup>
import {
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { apiPath } from "@/webPath";
import { reactive, ref, onMounted } from "vue";
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
        show_yn: "Y"
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

// 페이지네이션 이동
const handleChange = (page_num) => {
    const keyword = searchKeyword.value;

    getBoardList(page_num, maxRowNum.basic, keyword);
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
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div class="movie_wrap" v-if="state.boardList.length !== 0">
                        <div class="movie" v-for="board in state.boardList">
                            <a :href="`${routerPath.web_movie_url}/${board.board_idx}`">
                                <div class="thumb">
                                    <div v-if="board.content" :style="`background-image:url('https://img.youtube.com/vi/${board.content}/0.jpg'); background-size:cover;`" class="bg-thumb">
                                        <span></span>
                                    </div>
                                    <div v-else  class="bg-thumb"></div>
                                    <div class="title">
                                        <p>{{board.subject}}</p>
                                        <div class="info">
                                            <span class="datetime">{{board.reg_dttm}}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        className="pagenation"
                        v-if="state.boardList.length !== 0"
                    >
                        <v-pagination
                            :length="state.pageInfo.pages"
                            :total-visible="7"
                            rounded="2"
                            v-model="state.pageInfo.page_num"
                            @update:model-value="handleChange"
                        ></v-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>