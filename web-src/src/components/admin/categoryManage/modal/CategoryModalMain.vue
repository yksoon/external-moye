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
const inputTitle = ref(null);

const useModal = useModalStore();

onMounted(() => {
    isModData = modData
        ? Object.keys(modData).length !== 0
            ? true
            : false
        : false;

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
        category_div: "000",
        category_name_ko: inputTitle.value.value,
    };

    
    const responsLogic = (res) => {
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
        callback: (res) => responsLogic(res),
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
        };

        const responsLogic = (res) => {
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
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);
    }
};


// 수정, 등록 완료 로직
const requestCategories = () => {
    // 모달 닫기
    handleClose();

    handleNeedUpdate();
};

// 검증
const validation = () => {
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
                    <td>
                        {{categoryDiv}}
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