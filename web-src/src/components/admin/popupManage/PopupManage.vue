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
import { reactive, ref, h, toRaw, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import {
    FlexRender,
    getCoreRowModel,
    useVueTable,
    createColumnHelper,
} from "@tanstack/vue-table";
import { useIsRefreshStore } from "@/stores/isRefresh";
import { storeToRefs } from "pinia";

// ------------------- import End --------------------

const useIsRefresh = useIsRefreshStore();
const { isRefresh } = storeToRefs(useIsRefresh);

const err = CommonErrModule();

const searchKeyword = ref(null);
const state = reactive({
    popupList: [],
    pageInfo: {},
    checkItems: [],
});
const modalTitle = ref("");
const isOpen = ref(false);

onMounted(() => {
    getPopupList(1, maxRowNum.basic, "");
});

watch(isRefresh, (oldval, newval) => {
    getPopupList(1, maxRowNum.people, "");
});

// 검색
const doSearch = () => {
    const searchKeywordValue = searchKeyword.value.value;
    getPopupList(1, maxRowNum.people, searchKeywordValue);
};

// 엔터입력검색
const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
        doSearch(); // Enter 입력이 되면 클릭 이벤트 실행
    }
};

// 리스트 가져오기
const getPopupList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/_popups
    // POST
    // 팝업 정보 목록
    const url = apiPath.api_admin_get_popups;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
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

            state.popupList = result_info;
            state.pageInfo = page_info;

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

// 팝업 등록
const regPopup = () => {
    const modalOption = {
        title: "팝업 작성",
        component: "PopupModalMain",
        width: "800",
        handleNeedUpdate: () => handleNeedUpdate(),
    };

    CommonModal(modalOption);
};

// 팝업 수정
const modPopupModal = (modData) => {
    const modalOption = {
        title: "팝업 수정",
        component: "PopupModalMain",
        width: "800",
        modData: modData,
        handleNeedUpdate: () => handleNeedUpdate(),
    };

    CommonModal(modalOption);
};

// 리스트 새로고침
const handleNeedUpdate = () => {
    console.log("handleNeedUpdate");
    getPopupList(1, maxRowNum.basic, "");
};

// 페이지네이션 이동
const handleChange = (page_num) => {
    const keyword = searchKeyword.value.value;

    getPopupList(page_num, maxRowNum.basic, keyword);
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
        state.popupList.forEach((el) => checkArray.push(el.popup_idx));
        state.checkItems = checkArray;
    } else {
        // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
        state.checkItems = [];
    }
};

// 팝업 삭제
const removePopup = () => {
    const length = state.checkItems.length;

    if (length === 0) {
        CommonNotify({
            type: "alert",
            message: "삭제할 팝업을 선택해주세요",
        });
    } else {
        CommonNotify({
            type: "confirm",
            message: "선택한 팝업을 삭제하시겠습니까?",
            callback: () => removeLogic(),
        });

        const removeLogic = () => {
            CommonSpinner(true);

            let data = {};
            let checkCount = 0;

            for (let i = 0; i < length; i++) {
                // v1/popup
                // DELETE
                let url =
                    apiPath.api_admin_remove_popup + `/${state.checkItems[i]}`;

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
                            message: `${checkCount} 건의 팝업이 삭제 되었습니다.`,
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

// 팝업 수정
const modPopup = (popup_idx) => {
    CommonSpinner(true);

    const popupIdx = String(popup_idx);

    // /v1/popup/{popup_idx}
    // GET
    const url = apiPath.api_admin_detail_popup + `/${popupIdx}`;
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

            modPopupModal(result_info);
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
// [체크박스], [제목], [시작일], [종료일], [노출여부], [등록자], [등록일], [수정]
const columns = [
    {
        accessorKey: "popup_idx",
        header: () =>
            h("input", {
                type: "checkbox",
                name: "select-all",
                id: "select-all",
                onChange: (e) => handleAllCheck(e.target.checked),
                checked:
                    state.checkItems.length === state.popupList.length
                        ? true
                        : false,
            }),
        cell: (info) =>
            h("input", {
                type: "checkbox",
                name: "popupIdx_" + info.getValue(),
                id: info.getValue(),
                onChange: (e) =>
                    handleSingleCheck(e.target.checked, info.getValue()),
                checked: state.checkItems.includes(info.getValue())
                    ? true
                    : false,
            }),
        // enableSorting: false,
    },

    columnHelper.accessor((row) => row.title, {
        id: "title",
        cell: (info) => info.getValue(),
        header: "제목",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.content, {
        id: "content",
        cell: (info) => info.getValue(),
        header: "내용",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.start_date, {
        id: "start_date",
        cell: (info) => info.getValue(),
        header: "시작일",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.end_date, {
        id: "end_date",
        cell: (info) => info.getValue(),
        header: "종료일",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.show_yn, {
        id: "show_yn",
        cell: (info) => (info.getValue() === "Y" ? "노출" : "비노출"),
        header: "노출여부",
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
                    onClick: () => modPopup(row.popup_idx),
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
        return state.popupList;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: false,
});
</script>

<template>
    <div class="content">
        <div class="title">
            <h3>팝업 관리</h3>
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
                    <a class="btn btn02" @click="doSearch"> 검색 </a>
                </div>
                <div class="btn_box btn_right" style="margin: 0">
                    <a class="btn btn01" @click="regPopup"> 글쓰기 </a>
                    <a class="btn btn03" @click="removePopup"> 삭제 </a>
                </div>
            </div>

            <div class="adm_table">
                <table class="table_a">
                    <colgroup>
                        <col width="2%" />
                        <col width="20%" />
                        <col width="*" />
                        <col width="7%" />
                        <col width="7%" />
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
                    <tbody v-if="state.popupList.length !== 0">
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
                    <tbody v-if="state.popupList.length === 0">
                        <tr>
                            <td colSpan="9" style="height: 55px">
                                <b> 데이터가 없습니다. </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pagenation" v-if="state.popupList.length !== 0">
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
