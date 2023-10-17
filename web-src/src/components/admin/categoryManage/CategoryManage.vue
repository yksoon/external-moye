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

const err = CommonErrModule();

const searchKeyword = ref(null);
const state = reactive({
    categoryList: [],
    pageInfo: {},
    checkItems: [],
});
const modalTitle = ref("");
const isOpen = ref(false);

onMounted(() => {
    getCategoryList(1, maxRowNum.category, "");
});

// 리스트 가져오기
const getCategoryList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/people/categories
    // POST
    // 카테고리 목록
    const url = apiPath.api_admin_get_categories;
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

            state.categoryList = result_info;
            state.pageInfo = page_info;

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

// 카테고리 등록
const regCategory = () => {
    const modalOption = {
        title: "카테고리 등록",
        component: "CategoryModalMain",
        width: "800",
        handleNeedUpdate: () => handleNeedUpdate(),
    };

    CommonModal(modalOption);
};

// 카테고리 수정
const modCategoryModal = (modData) => {
    const modalOption = {
        title: "카테고리 수정",
        component: "CategoryModalMain",
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

    getCategoryList(page_num, maxRowNum.basic, keyword);
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
        state.categoryList.forEach((el) => checkArray.push(el.category_idx));
        state.checkItems = checkArray;
    } else {
        // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
        state.checkItems = [];
    }
};

// 삭제
const removeCategory = () => {
    const length = state.checkItems.length;

    if (length === 0) {
        CommonNotify({
            type: "alert",
            message: "삭제할 카테고리를 선택해주세요",
        });
    } else {
        CommonNotify({
            type: "confirm",
            message: "선택한 카테고리를 삭제하시겠습니까?",
            callback: () => removeLogic(),
        });

        const removeLogic = () => {
            CommonSpinner(true);

            let data = {};
            let checkCount = 0;

            for (let i = 0; i < length; i++) {
                // /v1/people/category
                // DELETE
                let url =
                    apiPath.api_admin_remove_category + `/${state.checkItems[i]}`;

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
                            message: `${checkCount} 건의 카테고리가 삭제 되었습니다.`,
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

// 카테고리 수정
const modCategory = (category_idx) => {
    CommonSpinner(true);

    const categoryIdx = String(category_idx);

    // /v1/people/category/{category_idx}
    // PUT
    const url = apiPath.api_admin_mod_category + `/${categoryIdx}`;
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

            modCategoryModal(result_info);
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
// [체크박스], [분류], [분류명], [노출여부], [등록자], [등록일], [수정]
const columns = [
    {
        accessorKey: "category_idx",
        header: () =>
            h("input", {
                type: "checkbox",
                name: "select-all",
                id: "select-all",
                onChange: (e) => handleAllCheck(e.target.checked),
                checked:
                    state.checkItems.length === state.categoryList.length
                        ? true
                        : false,
            }),
        cell: (info) =>
            h("input", {
                type: "checkbox",
                name: "categoryIdx_" + info.getValue(),
                id: info.getValue(),
                onChange: (e) =>
                    handleSingleCheck(e.target.checked, info.getValue()),
                checked: state.checkItems.includes(info.getValue())
                    ? true
                    : false,
            }),
        // enableSorting: false,
    },


    columnHelper.accessor((row) => row.category_div, {
        id: "category_div",
        cell: (info) => info.getValue(),
        header: "분류",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.category_name_ko, {
        id: "category_name_ko",
        cell: (info) => info.getValue(),
        header: "분류명",
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
                    onClick: () => modCategory(row.category_idx),
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
        return state.categoryList;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: false,
});
</script>

<template>
    <div class="content">
        <div class="title">
            <h3>카테고리</h3>
        </div>
        <div class="con_area">
            <div class="adm_search">
                <div>
                    <input type="text" class="input" ref="searchKeyword" />
                    <a class="btn btn02" @click="doSearch"> 검색 </a>
                </div>
                <div class="btn_box btn_right" style="margin: 0">
                    <a class="btn btn01" @click="regCategory"> 글쓰기 </a>
                    <a class="btn btn03" @click="removeCategory"> 삭제 </a>
                </div>
            </div>

            <div class="adm_table">
                <table class="table_a">
                    <colgroup>
                        <col width="5%" />
                        <col width="10%" />
                        <col width="*" />
                        <col width="7%" />
                        <col width="7%" />
                        <col width="10%" />
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
                    <tbody v-if="state.categoryList.length !== 0">
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
                    <tbody v-if="state.categoryList.length === 0">
                        <tr>
                            <td colSpan="9" style="height: 55px">
                                <b> 데이터가 없습니다. </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pagenation" v-if="state.categoryList.length !== 0">
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
