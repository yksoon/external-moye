<script>
import {
    CommonConsole,
    CommonErrModule,
    CommonModal,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { apiPath } from "@/webPath";
import { reactive, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default {
    name: "NoticeBoard",
    props: {
        isRefresh: Boolean,
    },
    setup(props) {
        const isRefresh = props.isRefresh;

        const err = CommonErrModule();

        const searchKeyword = ref(null);
        const state = reactive({
            boardList: [],
            pageInfo: {},
        });
        const modalTitle = ref("");
        const isOpen = ref(false);

        onMounted(() => {
            getBoardList(1, 10, "");
        });

        // 리스트 가져오기
        const getBoardList = (pageNum, pageSize, searchKeyword) => {
            CommonSpinner(true);

            // /v1/boards
            // POST
            // board_type
            // 000 : 공지사항
            // 100 : 상담문의
            // 200 : 포토게시판
            // 300 : 영상게시판
            // 400 : 회사소개
            // 900 : 기타
            const url = apiPath.api_admin_boards;
            const data = {
                page_num: pageNum,
                page_size: pageSize,
                search_keyword: searchKeyword,
                board_type: "000",
            };

            // 파라미터
            const restParams = {
                method: "post",
                url: url,
                data: data,
                err: err,
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

                    // setBoardList(result_info);
                    // setPageInfo(page_info);
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

        // 글쓰기
        const regBoard = () => {
            const modalOption = {
                title: "글쓰기",
                component: "RegNoticeModal",
                width: "800",
            };

            CommonModal(modalOption);
        };

        const handleModalClose = () => {
            modalTitle.value = "";
            isOpen.value = false;
        };

        return {
            searchKeyword,
            regBoard,
            isOpen,
            modalTitle,
            handleModalClose,
        };
    },
    // TODO: watch에 isNeedUpdate 구현
    // TODO: store로 전달
};
</script>

<template>
    <div class="content">
        <div class="title">
            <h3>공지사항</h3>
        </div>
        <div class="con_area">
            <div class="adm_search">
                <div>
                    <input type="text" class="input" ref="searchKeyword" />
                    <a class="btn btn02" @click="doSearch"> 검색 </a>
                </div>
                <div class="btn_box btn_right" style="margin: 0">
                    <a class="btn btn01" @click="regBoard"> 글쓰기 </a>
                    <a class="btn btn02" @click="removeBoard"> 삭제 </a>
                </div>
            </div>
        </div>
    </div>
</template>
