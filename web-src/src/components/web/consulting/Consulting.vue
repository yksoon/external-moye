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

// 상담문의 게시판 리스트 가져오기
const getBoardList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/boards
    // POST
    // board_type
    // 000 : 공지사항
    // 100 : 상담문의 [v]
    // 200 : 포토게시판
    // 300 : 영상게시판
    // 400 : 회사소개
    // 900 : 기타
    const url = apiPath.api_admin_boards;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        board_type: "100",
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
            state.pageInfo = page_info;

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

// 비밀글일 경우 비밀번호 확인 모달 표출
const passwordCheckModal = (board_idx) => {
    const modalOption = {
        title: "비밀번호 확인",
        component: "QNAPwdCheckModal",
        width: "800",
        boardIdx: board_idx,
        modData: {},
        handleNeedUpdate: () => requestBoards(),
    };

    CommonModal(modalOption);
};

// 비밀번호 확인 완료 로직
const requestBoards = (board_idx) => {
    location.replace(`${routerPath.web_consulting_url}/${board_idx}`);
};

// 리스트 새로고침
const handleNeedUpdate = () => {
    getBoardList(1, maxRowNum.basic, "");
};

// 페이지네이션 이동
const handleChange = (page_num) => {
    const keyword = searchKeyword.value;

    getBoardList(page_num, maxRowNum.basic, keyword);
};

// 게시글 클릭시 페이지 이동 함수
const boardOpen = (open_yn, board_idx) => {
    // 비밀글 여부 확인
    if (open_yn === "N") { // 비밀글
        passwordCheckModal(board_idx);
    } else { // 일반글
        location.href = routerPath.web_consulting_url + '/' + board_idx;
    }
}

const readyAlert = () => {
    alert('준비중입니다 :-)');
}
</script>

<template>
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
             <LeftMenu subvisual="subvisual_notice" page="consulting"/>
             <div id="content">
                <div id="subtitle">
                    <h2>상담문의</h2>
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
                            <input type="text" id="placeholder" name="stx" value="" autofocus="autofocus"
                                placeholder="검색">
                            <button type="button" @click="readyAlert" onclick="document.fsearch.submit()" class="btn_primary">검색</button>
                        </div>
                    </div>
                    <table class="board_table">
                        <colgroup>
                            <col width="5%" />
                            <col width="10%" />
                            <col width="*" />
                            <col width="10%" />
                            <col width="10%" />
                            <col width="10%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>공개여부</th>
                                <th>문의분야</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>답변여부</th>
                                <th>등록일</th>
                            </tr>
                        </thead>
                        <tbody v-if="state.boardList.length !== 0">
                            <tr v-for="board in state.boardList" @click="boardOpen(board.open_yn, board.board_idx)">
                                <td><img v-if="board.open_yn === 'N'" src="/img/common/lock.png" alt="비밀글입니다."></td>
                                <td>{{ board.category_type }}</td>
                                <td>{{ board.subject }}</td>
                                <td>{{ board.user_name_first_ko + board.user_name_last_ko }}</td>
                                <td>{{ board.comment_info ? '답변완료' : '미답변' }}</td>
                                <td>{{ board.reg_dttm.split(' ')[0] }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="board_btn_wrap">
                        <div class="boardList_btn">
                            <a :href="routerPath.web_consulting_write_url" class="back_btn">글쓰기
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