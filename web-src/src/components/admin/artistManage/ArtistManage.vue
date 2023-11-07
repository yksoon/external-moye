<script setup>
import {
    CommonConsole,
    CommonModal,
    CommonNotify,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { reactive, ref, h, toRaw, onMounted, watch } from "vue";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { apiPath } from "@/webPath";
import { successCode } from "@/common/js/resultCode";
import {
    FlexRender,
    getCoreRowModel,
    useVueTable,
    createColumnHelper,
} from "@tanstack/vue-table";
import { useIsRefreshStore } from "@/stores/isRefresh";
import { storeToRefs } from "pinia";

// ------------------- import End --------------------

const props = defineProps({
    isRefresh: Boolean,
});

const useIsRefresh = useIsRefreshStore();
const { isRefresh } = storeToRefs(useIsRefresh);

const searchKeyword = ref(null);
const state = reactive({
    peopleList: [],
    pageInfo: {},
    checkItems: [],
});

const fileBaseUrl = apiPath.api_file;

onMounted(() => {
    getPeopleList(1, maxRowNum.people, "");
});

watch(isRefresh, (oldval, newval) => {
    getPeopleList(1, maxRowNum.people, "");
});

// 인물 등록
const regArtist = () => {
    const modalOption = {
        title: "인물 등록",
        component: "ArtistModalMain",
        width: "1400",
        handleNeedUpdate: () => handleNeedUpdate(),
    };

    CommonModal(modalOption);
};

// 리스트 업데이트 핸들러
const handleNeedUpdate = () => {
    // console.log("handleNeedUpdate");
    getPeopleList(1, maxRowNum.people, "");
};

// 검색
const doSearch = () => {
    const searchKeywordValue = searchKeyword.value.value;
    getPeopleList(1, maxRowNum.people, searchKeywordValue);
};

// 엔터입력검색
const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
        doSearch(); // Enter 입력이 되면 클릭 이벤트 실행
    }
};

// 리스트 가져오기
const getPeopleList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/_peoples
    // POST
    // 인물 목록
    const url = apiPath.api_admin_list_people;
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

            state.peopleList = result_info;
            state.pageInfo = page_info;

            // console.log(result_info);

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
    const keyword = searchKeyword.value.value;

    getPeopleList(page_num, maxRowNum.people, keyword);
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
        state.peopleList.forEach((el) => checkArray.push(el.people_idx));
        state.checkItems = checkArray;
    } else {
        // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
        state.checkItems = [];
    }
};

// 삭제
const removeArtist = () => {
    const length = state.checkItems.length;

    if (length === 0) {
        CommonNotify({
            type: "alert",
            message: "삭제할 항목을 선택해주세요",
        });
    } else {
        CommonNotify({
            type: "confirm",
            message: "선택한 항목을 삭제하시겠습니까?",
            callback: () => removeLogic(),
        });

        const removeLogic = () => {
            CommonSpinner(true);

            let data = {};

            let checkItemsStr = state.checkItems.join();

            const url = `${apiPath.api_admin_remove_people}/${checkItemsStr}`;

            const restParams = {
                method: "delete",
                url: url,
                data: data,
                callback: (res) => responseLogic(res),
                admin: "Y",
            };
            CommonRest(restParams);

            const responseLogic = (res) => {
                if (res.headers.result_code === successCode.success) {
                    const checkCount = state.checkItems.length;

                    CommonSpinner(false);

                    CommonNotify({
                        type: "alert",
                        message: `${checkCount} 건의 항목이 삭제 되었습니다.`,
                        callback: () => refresh(),
                    });

                    const refresh = () => {
                        state.checkItems = [];

                        handleNeedUpdate();
                    };
                }
            };
        };
    }
};

// 인물 수정
const modPeople = (people_idx) => {
    CommonSpinner(true);

    const peopleIdx = String(people_idx);

    // v1/board/{board_idx}
    // GET
    const url = apiPath.api_admin_detail_people + `/${peopleIdx}`;
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

            modPeopleModal(result_info);
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

// 글 수정
const modPeopleModal = (modData) => {
    const modalOption = {
        title: "인물 수정",
        component: "ArtistModalMain",
        width: "1400",
        modData: modData,
        handleNeedUpdate: () => handleNeedUpdate(),
    };

    CommonModal(modalOption);
};

// ------------------------------- 테이블 set ------------------------------------------
const columnHelper = createColumnHelper();

// 컬럼 세팅
// [체크박스], [이미지], [이름], [대분류], [중분류], [타입], [노출], [메인노출], [등록자], [등록일], [정보수정]
const columns = [
    {
        accessorKey: "people_idx",
        header: () =>
            h("input", {
                type: "checkbox",
                name: "select-all",
                id: "select-all",
                onChange: (e) => handleAllCheck(e.target.checked),
                checked:
                    state.checkItems.length === state.peopleList.length
                        ? true
                        : false,
            }),
        cell: (info) =>
            h("input", {
                type: "checkbox",
                name: "peopleIdx_" + info.getValue(),
                id: info.getValue(),
                onChange: (e) =>
                    handleSingleCheck(e.target.checked, info.getValue()),
                checked: state.checkItems.includes(info.getValue())
                    ? true
                    : false,
            }),
        // enableSorting: false,
    },

    columnHelper.accessor((row) =>
        h("img", {
            src: row.file_path_enc ? fileBaseUrl + row.file_path_enc : "/img/web/sub/default_full.jpg",
            alt: row.file_name_org,
            decoding: "async",
        }),
        {
            id: "file_path_enc",
            cell: (info) => info.getValue(),
            header: "이미지",
        }
    ),

    columnHelper.accessor((row) => row.name_ko, {
        id: "name_ko",
        cell: (info) => info.getValue(),
        header: "이름",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.category_parent_name_ko, {
        id: "category_parent_name_ko",
        cell: (info) => info.getValue(),
        header: "대분류",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.category_child_name_ko, {
        id: "category_child_name_ko",
        cell: (info) => info.getValue(),
        header: "중분류",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.people_type, {
        id: "people_type",
        cell: (info) => info.getValue(),
        header: "타입",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.show_yn, {
        id: "show_yn",
        cell: (info) => info.getValue(),
        header: "노출",
        // sortingFn: "alphanumericCaseSensitive",
    }),

    columnHelper.accessor((row) => row.main_show_yn, {
        id: "main_show_yn",
        cell: (info) => info.getValue(),
        header: "메인노출",
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
                    onClick: () => modPeople(row.people_idx),
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
        return state.peopleList;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
});
</script>
<template>
    <div class="content">
        <div class="title">
            <h3>인물 관리</h3>
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
                    <a class="btn btn01" @click="regArtist"> 인물 등록 </a>
                    <a class="btn btn03" @click="removeArtist"> 삭제 </a>
                </div>
            </div>

            <div class="adm_table">
                <table class="table_a">
                    <colgroup>
                        <col width="2%" />
                        <col width="10%" />
                        <col width="7%" />
                        <col width="10%" />
                        <col width="10%" />
                        <col width="5%" />
                        <col width="5%" />
                        <col width="5%" />
                        <col width="5%" />
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
                    <tbody v-if="state.peopleList.length !== 0">
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
                    <tbody v-if="state.peopleList.length === 0">
                        <tr>
                            <td colSpan="10" style="height: 55px">
                                <b> 데이터가 없습니다. </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    className="pagenation"
                    v-if="state.peopleList.length !== 0"
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
</template>
