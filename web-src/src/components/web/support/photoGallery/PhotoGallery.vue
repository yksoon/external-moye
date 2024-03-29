<script setup>
import {
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from '@/webPath';
import LeftMenu from '@/components/web/common/LeftMenu.vue';

// ------------------- import End --------------------

const searchKeyword = ref(null);
const state = reactive({
    boardList: [],
    pageInfo: {},
});

// 페이지네이션의 total-visible를 동적으로 설정
const paginationTotalVisible = ref(7); // 기본 total-visible 값

// 페이지네이션 total-visible 값을 조절하는 함수
const adjustTotalVisible = () => {
  const mediaQuery = window.matchMedia('(max-width: 640px)');
  paginationTotalVisible.value = mediaQuery.matches ? 4 : 7;
};

window.addEventListener('resize', adjustTotalVisible); // 창 크기 변경 감지

onMounted(() => {
    getBoardList(1, maxRowNum.basic, "");
    adjustTotalVisible(); // 페이지네이션 total-visible 초기 계산
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
    // 200 : 포토게시판 [v]
    // 300 : 영상게시판
    // 400 : 회사소개
    // 900 : 기타
    const url = apiPath.api_admin_boards;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        board_type: "200",
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
            let page_info = res.data.page_info;

            state.boardList = result_info;
            state.pageInfo = page_info;

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
            <LeftMenu subvisual="subvisual_notice" page="photo"/>
            <div id="content">
                <div id="subtitle">
                    <h2>포토 갤러리</h2>
                </div>
                <div>
                    <div class="gallery_wrap" v-if="state.boardList.length !== 0">
                        <div class="gallery" v-for="board in state.boardList">
                            <a :href="`${routerPath.web_photoGallery_url}/${board.board_idx}`">
                                <div class="thumb">
                                    <div v-if="board.file_info.length" class="bg-thumb" :style="`background-image:url('${fileBaseUrl}${board.file_info[0].file_path_enc}'); background-size:cover; background-color:#eee;`">
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
                            :total-visible="paginationTotalVisible"
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