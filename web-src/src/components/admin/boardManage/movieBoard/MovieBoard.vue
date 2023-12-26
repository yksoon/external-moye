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
import { reactive, ref, h, onMounted, watch } from "vue";
import { useIsRefreshStore } from "@/stores/isRefresh";
import { storeToRefs } from "pinia";

// ------------------- import End --------------------

const useIsRefresh = useIsRefreshStore();
const { isRefresh } = storeToRefs(useIsRefresh);

const searchKeyword = ref(null);
const state = reactive({
    boardList: [],
    pageInfo: {},
    checkItems: [],
});

const fileBaseUrl = apiPath.api_file;

onMounted(() => {
    getBoardList(1, maxRowNum.basic, "");
});

watch(isRefresh, (oldval, newval) => {
    getBoardList(1, maxRowNum.people, "");
});

// 검색
const doSearch = () => {
    const searchKeywordValue = searchKeyword.value.value;
    getBoardList(1, maxRowNum.people, searchKeywordValue);
};

// 엔터입력검색
const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
        doSearch(); // Enter 입력이 되면 클릭 이벤트 실행
    }
};

// 리스트 가져오기
const getBoardList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/_boards
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

// 글쓰기
const regBoard = () => {
    const modalOption = {
        title: "영상 갤러리 작성",
        component: "RegMovieModal",
        width: "800",
        handleNeedUpdate: () => handleNeedUpdate(),
    };

    CommonModal(modalOption);
};

// 글 수정
const modBoardModal = (modData) => {
    const modalOption = {
        title: "영상 갤러리 수정",
        component: "RegMovieModal",
        width: "800",
        modData: modData,
        handleNeedUpdate: () => handleNeedUpdate(),
    };

    CommonModal(modalOption);
};

// 리스트 새로고침
const handleNeedUpdate = () => {
    console.log("handleNeedUpdate");
    getBoardList(1, maxRowNum.basic, "");
};

// 페이지네이션 이동
const handleChange = (page_num) => {
    const keyword = searchKeyword.value.value;

    getBoardList(page_num, maxRowNum.basic, keyword);
};

// 체크박스 단일 선택
const handleSingleCheck = (checked, id) => {
    if (checked) {
        // 단일 선택 시 체크된 아이템을 배열에 추가
        state.checkItems = [...state.checkItems, id];
    } else {
        // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
        state.checkItems = state.checkItems.filter((el) => el !== id);
    }
};

// 체크박스 전체 선택
const handleAllCheck = (checked) => {
    if (checked) {
        // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
        const checkArray = [];
        state.boardList.forEach((el) => checkArray.push(el.board_idx));
        state.checkItems = checkArray;
    } else {
        // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
        state.checkItems = [];
    }
};

// 삭제
const removeBoard = () => {
    const length = state.checkItems.length;

    if (length === 0) {
        CommonNotify({
            type: "alert",
            message: "삭제할 게시글을 선택해주세요",
        });
    } else {
        CommonNotify({
            type: "confirm",
            message: "선택한 게시글을 삭제하시겠습니까?",
            callback: () => removeLogic(),
        });

        const removeLogic = () => {
            CommonSpinner(true);

            let data = {};
            let checkCount = 0;

            for (let i = 0; i < length; i++) {
                // v1/board
                // DELETE
                let url =
                    apiPath.api_admin_remove_board + `/${state.checkItems[i]}`;

                // console.log(url);
                // 파라미터
                const restParams = {
                    method: "delete",
                    url: url,
                    data: data,
                    callback: (res) => responseLogic(res),
                    admin: "Y",
                };
                CommonRest(restParams);
            }

            const responseLogic = (res) => {
                if (res.headers.result_code === successCode.success) {
                    checkCount++;

                    if (checkCount === length) {
                        CommonSpinner(false);

                        CommonNotify({
                            type: "alert",
                            message: `${checkCount} 건의 게시글이 삭제 되었습니다.`,
                            callback: () => refresh(),
                        });

                        const refresh = () => {
                            state.checkItems = [];

                            handleNeedUpdate();
                        };
                    }
                }
            };
        };
    }
};

// 게시글 수정
const modBoard = (board_idx) => {
    CommonSpinner(true);

    const boardIdx = String(board_idx);

    // v1/board/{board_idx}
    // GET
    const url = apiPath.api_admin_get_board + `/${boardIdx}`;
    const data = {};

    // 파라미터
    const restParams = {
        method: "get",
        url: url,
        data: data,
        callback: (res) => responseLogic(res),
        admin: "Y",
    };
    CommonRest(restParams);

    const responseLogic = (res) => {
        let result_code = res.headers.result_code;
        let result_info = res.data.result_info;

        // 성공
        if (result_code === successCode.success) {
            CommonSpinner(false);

            modBoardModal(result_info);
        }
        // 에러
        else {
            CommonConsole("log", res);

            CommonSpinner(false);

            CommonNotify({
                type: "alert",
                message: res.headers.result_message_ko,
            });
        }
    };
};
</script>

<template>
    <div class="content">
        <div class="title">
            <h3>영상 갤러리</h3>
        </div>
        <div class="con_area">
            <div class="adm_search">
                <div>
                    <input
                        type="text"
                        class="input"
                        ref="searchKeyword"
                        @keydown="handleOnKeyPress"
                    />
                    <a class="btn btn02"> 검색 </a>
                </div>
                <div class="btn_box btn_right" style="margin: 0">
                    <a class="btn btn01" @click="regBoard"> 글쓰기 </a>
                    <a class="btn btn03" @click="removeBoard"> 삭제 </a>
                </div>
            </div>

            <div class="adm_table">
                <table
                    v-if="state.boardList.length !== 0"
                    class="table_a"
                    style="margin-bottom: 1rem"
                >
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    name="select-all"
                                    id="select-all"
                                    @change="
                                        (e) => handleAllCheck(e.target.checked)
                                    "
                                    :checked="
                                        state.checkItems.length ===
                                        state.boardList.length
                                            ? true
                                            : false
                                    "
                                />
                                <b> 전체선택 </b>
                            </td>
                        </tr>
                    </tbody>
                    <v-container>
                        <v-row no-gutters>
                            <v-card width="19%" style="margin-right: 1%" v-for="item in state.boardList">
                                <div v-if="item.file_info.length === 0">
                                    <v-img height="200" cover
                                        :src="`https://img.youtube.com/vi/${item.content}/0.jpg`"
                                        :alt="item.subject"
                                    >
                                        <input type="checkbox" style="margin: 1rem"
                                            :name="`boardIdx_${item.board_idx}`"
                                            @change="(e) =>handleSingleCheck(e.target.checked, item.board_idx)"
                                            :checked="state.checkItems.includes(item.board_idx) ? true : false"
                                        />
                                    </v-img>
                                </div>
                                <div v-if="item.file_info.length !== 0">
                                    <v-img
                                        height="200"
                                        style="background-color: #f2f2f2"
                                    >
                                        <input type="checkbox" style="margin: 1rem"
                                            :name="`boardIdx_${item.board_idx}`"
                                            @change="(e) =>handleSingleCheck(e.target.checked, item.board_idx)"
                                            :checked="state.checkItems.includes(item.board_idx) ? true : false"
                                        />
                                    </v-img>
                                </div>
                                <v-card-title>{{ item.subject }}</v-card-title>
                                <v-card-subtitle>{{ item.sub_title }}</v-card-subtitle>
                                <v-card-text>
                                    <v-card-actions>
                                        <v-spacer>
                                            <div>
                                                조회수 : {{ item.view_count }}
                                            </div>
                                            <div>
                                                등록일 : {{ item.reg_dttm }}
                                            </div>
                                        </v-spacer>
                                        <v-btn
                                            variant="outlined"
                                            @click="modBoard(item.board_idx)"
                                            >수정</v-btn
                                        >
                                    </v-card-actions>
                                </v-card-text>
                            </v-card>
                        </v-row>
                    </v-container>
                </table>

                <table v-if="state.boardList.length === 0" class="table_a">
                    <tbody>
                        <tr>
                            <td>
                                <b> 데이터가 없습니다. </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="pagenation" v-if="state.boardList.length !== 0">
                    <v-pagination
                        :length="state.pageInfo.pages"
                        :total-visible="5"
                        rounded="2"
                        v-model="state.pageInfo.page_num"
                        @update:model-value="handleChange"
                    ></v-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
