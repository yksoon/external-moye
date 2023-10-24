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

// 공지사항 리스트 가져오기
const getBoardList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/boards
    // POST
    // board_type
    // 000 : 공지사항 [v]
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
            <LeftMenu page="notice" />
            <div id="content">
                <div id="subtitle">
                    <h2>공지사항</h2>
                </div>
                <div>
                    <div class="form_group">
                        <select id="select_Option" title="select" name="sfl">
                            <option value="all">검색</option>
                            <option value="제목">제목</option>
                            <option value="내용">내용</option>
                            <option value="모두">제목 + 내용</option>
                        </select>
                        <div class="placeholder_box">
                            <input type="text" id="placeholder" name="stx" value="" autofocus="autofocus" placeholder="검색">
                            <button type="button" onclick="document.fsearch.submit()" class="btn_primary">검색</button>
                        </div>
                    </div>
                    <table class="board_table">
                        <colgroup>
                            <col width="5%" />
                            <col width="25%" />
                            <col width="10%" />
                            <col width="*" />
                            <col width="5%" />
                            <col width="10%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>부제목</th>
                                <th>내용</th>
                                <th>조회수</th>
                                <th>등록일</th>
                            </tr>
                        </thead>
                        <tbody v-if="state.boardList.length !== 0">
                            <tr v-for="(board, idx) in state.boardList">
                                <td>{{ idx + 1 }}</td>
                                <td><a :href="`${routerPath.web_notice_url}/${board.board_idx}`">{{ board.subject }}</a></td>
                                <td><a :href="`${routerPath.web_notice_url}/${board.board_idx}`">{{ board.sub_title }}</a></td>
                                <td><a :href="`${routerPath.web_notice_url}/${board.board_idx}`">{{ board.content }}</a></td>
                                <td>{{ board.view_count }}</td>
                                <td>{{ board.reg_dttm.split(' ')[0] }}</td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td>
                                    목록이 없습니다.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- <div class="paginate">
                        <ul class="page_btn">
                            <a href="#" class="direction"><img src="/img/common/page_Btn_02.jpg" alt="이전페이지"></a>
                            <strong>1</strong> <a href="#" class="direction"><img src="/img/common/page_Btn_03.jpg"
                                    alt="다음페이지"></a>
                        </ul>
                    </div> -->
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