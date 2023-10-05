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
import { reactive, ref, h, toRaw, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
    FlexRender,
    getCoreRowModel,
    useVueTable,
    createColumnHelper,
} from "@tanstack/vue-table";

// ------------------- import End --------------------

// props 샘플
const props = defineProps({
    isRefresh: Boolean,
});
const emit = defineEmits(["update:value"]);
console.log(props.isRefresh);
// props 샘플 End

const err = CommonErrModule();

const searchKeyword = ref(null);
const state = reactive({
    boardList: [],
    pageInfo: {},
    checkItems: [],
});
const modalTitle = ref("");
const isOpen = ref(false);

onMounted(() => {
    getBoardList(1, maxRowNum, "");
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

// 글쓰기
const regBoard = () => {
    const modalOption = {
        title: "공지사항 작성",
        component: "RegNoticeModal",
        width: "800",
        handleNeedUpdate: () => handleNeedUpdate(),
    };

    CommonModal(modalOption);
};

// 글 수정
const modBoardModal = (modData) => {
    const modalOption = {
        title: "공지사항 수정",
        component: "RegNoticeModal",
        width: "800",
        modData: modData,
        handleNeedUpdate: () => handleNeedUpdate(),
    };

    CommonModal(modalOption);
};

// 리스트 새로고침
const handleNeedUpdate = () => {
    console.log("handleNeedUpdate");
    getBoardList(1, maxRowNum, "");
};

// 페이지네이션 이동
const handleChange = (page_num) => {
    const keyword = searchKeyword.value.value;

    getBoardList(page_num, maxRowNum, keyword);
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
                    callback: (res) => responsLogic(res),
                    admin: "Y",
                };
                CommonRest(restParams);
            }

            const responsLogic = (res) => {
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
        callback: (res) => responsLogic(res),
        admin: "Y",
    };
    CommonRest(restParams);

    const responsLogic = (res) => {
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

// ------------------------------- 테이블 set ------------------------------------------

const columnHelper = createColumnHelper();

// 컬럼 세팅
// [체크박스],[제목],[부제목],[내용],[등록자],[등록일],[수정]
const columns = [
    {
        accessorKey: "board_idx",
        header: () =>
            h("input", {
                type: "checkbox",
                name: "select-all",
                id: "select-all",
                onChange: (e) => handleAllCheck(e.target.checked),
                checked:
                    state.checkItems.length === state.boardList.length
                        ? true
                        : false,
            }),
        cell: (info) =>
            h("input", {
                type: "checkbox",
                name: "boardIdx_" + info.getValue(),
                id: info.getValue(),
                onChange: (e) =>
                    handleSingleCheck(e.target.checked, info.getValue()),
                checked: state.checkItems.includes(info.getValue())
                    ? true
                    : false,
            }),
        // enableSorting: false,
    },

    columnHelper.accessor((row) => row.show_yn, {
        id: "show_yn",
        cell: (info) => (info.getValue() === "Y" ? "노출" : "비노출"),
        header: "노출여부",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.subject, {
        id: "subject",
        cell: (info) => info.getValue(),
        header: "제목",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.sub_title, {
        id: "sub_title",
        cell: (info) => info.getValue(),
        header: "부제목",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.content, {
        id: "content",
        cell: (info) => info.getValue(),
        header: "내용",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.view_count, {
        id: "view_count",
        cell: (info) => info.getValue(),
        header: "조회수",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.reg_user_name_ko, {
        id: "reg_user_name_ko",
        cell: (info) => info.getValue(),
        header: "등록자",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.reg_dttm.split(" ")[0], {
        id: "reg_dttm",
        cell: (info) => info.getValue(),
        header: "등록일",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor(
        (row) =>
            h(
                "a",
                {
                    class: "tablebtn",
                    onClick: () => modBoard(row.board_idx),
                },
                "수정"
            ),
        {
            id: "viewDetail",
            cell: (info) => info.getValue(),
            header: "정보수정",
            // enableSorting: false,
        }
    ),
];

const table = useVueTable({
    get data() {
        return state.boardList;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: false,
});
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
                    <a class="btn btn03" @click="removeBoard"> 삭제 </a>
                </div>
            </div>

            <div class="adm_table">
                <table class="table_a">
                    <colgroup>
                        <col width="2%" />
                        <col width="5%" />
                        <col width="20%" />
                        <col width="15%" />
                        <col width="*" />
                        <col width="5%" />
                        <col width="7%" />
                        <col width="7%" />
                        <col width="5%" />
                    </colgroup>
                    <thead>
                        <tr
                            v-for="headerGroup in table.getHeaderGroups()"
                            :key="headerGroup.id"
                        >
                            <th
                                v-for="header in headerGroup.headers"
                                :key="header.id"
                                :colSpan="header.colSpan"
                            >
                                <FlexRender
                                    v-if="!header.isPlaceholder"
                                    :render="header.column.columnDef.header"
                                    :props="header.getContext()"
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="state.boardList.length !== 0">
                        <tr
                            v-for="row in table.getRowModel().rows"
                            :key="row.id"
                        >
                            <td
                                v-for="cell in row.getVisibleCells()"
                                :key="cell.id"
                            >
                                <FlexRender
                                    :render="cell.column.columnDef.cell"
                                    :props="cell.getContext()"
                                />
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-if="state.boardList.length === 0">
                        <tr>
                            <td colSpan="9" style="height: 55px">
                                <b> 데이터가 없습니다. </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
</template>
