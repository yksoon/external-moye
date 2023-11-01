<script setup>
import { ref, reactive } from "vue";
import {
    CommonErrModule,
    CommonConsole,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { useModalStore } from "@/stores/modal";
import { storeToRefs } from "pinia";
import { categoryModel } from "@/components/admin/categoryManage/categoryModel";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { successCode } from "@/common/js/resultCode";
import { apiPath } from "@/webPath";
import { onMounted } from "vue";

// ------------------- import End --------------------

const props = defineProps({
    handleNeedUpdate: Function,
    modData: Object,
});

const handleNeedUpdate = props.handleNeedUpdate;
const modData = props.modData;

let isModData = false;

const selectShowYn = ref(null);
const categoryDiv = ref(null);
const selectCategoryDiv = ref(null);
const selectParentCategory = ref(null);
const inputTitle = ref(null);
const state = reactive({
    categoryList: []
})

const useModal = useModalStore();

onMounted(() => {
    isModData = modData
        ? Object.keys(modData).length !== 0
            ? true
            : false
        : false;


    !isModData && getCategoryList(1, 0, "");
    isModData && getDefaultValue();
});

// 수정일 경우 초기 세팅
const getDefaultValue = () => {
    selectShowYn.value.value = modData.show_yn;
    categoryDiv.value = modData.category_div;
    inputTitle.value.value = modData.category_name_ko;
};

// 모달 닫기
const handleClose = () => {
    useModal.setIsModalClose();
};

// 대분류 카테고리 리스트 가져오기
const getCategoryList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/people/_categories
    // POST
    // 카테고리 목록
    const url = apiPath.api_admin_get_categories;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        category_div: "000"
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

            state.categoryList = result_info;

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

// 등록
const regCategory = () => {
if (validation()) {
    CommonSpinner(true);

    const model = categoryModel;
    let data = {};

    let fileArr = [];

    data = {
        ...model,
        show_yn: selectShowYn.value.value,
        category_div: selectCategoryDiv.value.value,
        category_name_ko: inputTitle.value.value,
        category_parent_idx: selectParentCategory.value.value
    };

    
    const responseLogic = (res) => {
        let result_code = res.headers.result_code;
        if (result_code === successCode.success) {
            CommonSpinner(false);

            CommonNotify({
                type: "alert",
                message: "카테고리 등록이 완료 되었습니다",
                callback: () => requestCategories(),
            });
        } else {
            CommonSpinner(false);

            CommonNotify({
                type: "alert",
                message: "잠시 후 다시 시도해주세요",
            });
        }
    };

    const restParams = {
        method: "post",
        url: apiPath.api_admin_reg_category, // /v1/people/category
        data: data,
        admin: "Y",
        callback: (res) => responseLogic(res),
    };

    CommonRest(restParams);
    }
};

// 수정
const modCategory = () => {
    if (validation()) { // 유효성 검사 통과시 수정 로직 실행
        CommonSpinner(true);

        const model = categoryModel;
        let data = {};

        data = {
            ...model,
            category_idx: modData.category_idx,
            show_yn: selectShowYn.value.value,
            category_div: modData.category_div_cd,
            category_name_ko: inputTitle.value.value,
            category_parent_idx: modData.category_parent_idx,
        };

        const responseLogic = (res) => {
            let result_code = res.headers.result_code;
            if (result_code === successCode.success) {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    message: "카테고리 수정이 완료 되었습니다",
                    callback: () => requestCategories(),
                });
            } else {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    hook: alert,
                    message: "잠시 후 다시 시도해주세요",
                });
            }
        };

        // 수정
        // /v1/people/category
        // PUT
        const restParams = {
            method: "put",
            url: apiPath.api_admin_mod_category, // /v1/people/category
            data: data,
            admin: "Y",
            callback: (res) => responseLogic(res),
        };

        CommonRest(restParams);
    }
};

// 카테고리 분류 셀렉트 박스 선택 이벤트
const handleCategoryDiv = (e) => {
    const val = e.target.value;

    selectCategoryDiv.value = val;

    return;
};

const handleParentCategory = (e) => {
    const val = e.target.value;

    selectParentCategory.value = val;

    return;
}

// 수정, 등록 완료 로직
const requestCategories = () => {
    // 모달 닫기
    handleClose();

    handleNeedUpdate();
};

// 검증
const validation = () => {
    if (selectCategoryDiv.value.value == '100' && !selectParentCategory.value) {
        CommonNotify({
            type: "alert",
            message: "대분류를 선택해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                selectParentCategory.value.focus();
            }, 0);
        };

        return false;
    }

    if (!inputTitle.value.value) {
        CommonNotify({
            type: "alert",
            message: "카테고리명을 입력해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputTitle.value.focus();
            }, 0);
        };

        return false;
    }

    return true;
};
</script>

<template>
    <div class="admin">
        <table class="table_bb">
            <colgroup>
                <col width="30%" />
                <col width="*" />
            </colgroup>

            <tbody>
                <tr>
                    <th>노출여부</th>
                    <td>
                        <select class="wp100" ref="selectShowYn">
                            <option value="Y">노출</option>
                            <option value="N">비노출</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>분류</th>
                    <td v-if="!modData">
                        <select class="wp100" ref="selectCategoryDiv" @change="(e) => handleCategoryDiv(e)">
                            <option value="000">대분류</option>
                            <option value="100">중분류</option>
                        </select>
                        <select v-if="selectCategoryDiv && selectCategoryDiv.value == '100'" class="wp100" ref="selectParentCategory" @change="(e) => handleParentCategory(e)">
                            <option>대분류를 선택해주세요</option>
                            <option v-for="parent in state.categoryList" :value="parent.category_idx">{{ parent.category_name_ko }}</option>
                        </select>
                    </td>
                    <td v-if="modData">
                        {{ categoryDiv }}
                    </td>
                </tr>
                <tr>
                    <th>카테고리명</th>
                    <td>
                        <input
                            type="text"
                            class="input wp100"
                            ref="inputTitle"
                        />
                    </td>
                </tr>
              
                <tr v-if="modData">
                    <th>등록자</th>
                    <td>
                        {{ modData.reg_user_name_ko }}
                    </td>
                </tr>
                <tr v-if="modData">
                    <th>등록일</th>
                    <td>
                        {{ modData.reg_dttm }}
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="btn_box">
            <a v-if="!modData" class="btn btn01" @click="regCategory"> 등록 </a>
            <a v-if="modData" class="btn btn01" @click="modCategory"> 수정 </a>
            <a class="btn btn02" @click="handleClose"> 취소 </a>
        </div>
    </div>
</template>