<script setup>
import { ref, reactive } from "vue";
import {
    CommonErrModule,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { useModalStore } from "@/stores/modal";
import { popupModel } from "@/components/admin/popupManage/popupModel";
import { successCode } from "@/common/js/resultCode";
import { apiPath } from "@/webPath";
import { onMounted } from "vue";

const props = defineProps({
    modData: Object,
    handleNeedUpdate: Function,
});

const fileBaseUrl = apiPath.api_file;

const selectShowYn = ref(null);
const inputTitle = ref(null);
const inputContent = ref(null);
const startDate = ref(null);
const endDate = ref(null);

const useModal = useModalStore();

const handleNeedUpdate = props.handleNeedUpdate;
const modData = props.modData;

let isModData = false;

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
    inputTitle.value.value = modData.title;
    inputContent.value.value = modData.content;
    startDate.value.value = modData.start_date;
    endDate.value.value = modData.end_date;
};

// 모달 닫기
const handleClose = () => {
    useModal.setIsModalClose();
};

// 팝업 등록
const regPopup = () => {
    if (validation()) {
        CommonSpinner(true);

        const model = popupModel;
        let data = {};

        let fileArr = [];

        data = {
            ...model,
            show_yn: selectShowYn.value.value,
            title: inputTitle.value.value,
            content: inputContent.value.value,
            start_date: startDate.value.value,
            end_date: endDate.value.value,
        };

        const responsLogic = (res) => {
            let result_code = res.headers.result_code;
            if (result_code === successCode.success) {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    message: "팝업 등록이 완료 되었습니다",
                    callback: () => requestPopups(),
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
            url: apiPath.api_admin_reg_popup, // /v1/popup
            data: data,
            admin: "Y",
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);
    }
};

// 팝업 수정
const modPopup = () => {
    if (validation()) {
        CommonSpinner(true);

        const model = popupModel;
        let data = {};

        let fileArr = [];

        data = {
            ...model,
            show_yn: modData.show_yn,
            popup_idx: modData.popup_idx,
            title: inputTitle.value.value,
            content: inputContent.value.value,
            start_date: startDate.value.value,
            end_date: endDate.value.value,
        };

        // 기본 formData append
        // for (const key in data) {
        //     formData.append(key, data[key]);
        // }

        const responsLogic = (res) => {
            let result_code = res.headers.result_code;
            if (result_code === successCode.success) {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    message: "팝업 수정이 완료 되었습니다",
                    callback: () => requestPopups(),
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
        // /v1/popup
        // PUT
        const restParams = {
            method: "put",
            url: apiPath.api_admin_mod_popup, // /v1/popup
            data: data,
            admin: "Y",
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);
    }
};

// 수정, 등록 완료 로직
const requestPopups = () => {
    // 모달 닫기
    handleClose();

    handleNeedUpdate();
};

// 검증
const validation = () => {
    if (!inputTitle.value.value) {
        CommonNotify({
            type: "alert",
            message: "제목을 입력해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputTitle.value.focus();
            }, 0);
        };

        return false;
    }

    if (!startDate.value.value) {
        CommonNotify({
            type: "alert",
            message: "시작일을 입력해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputContent.value.focus();
            }, 0);
        };

        return false;
    }

    if (!endDate.value.value) {
        CommonNotify({
            type: "alert",
            message: "종료일을 입력해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputContent.value.focus();
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
                    <th>제목</th>
                    <td>
                        <input
                            type="text"
                            class="input wp100"
                            ref="inputTitle"
                        />
                    </td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td>
                        <textarea
                            class="textarea_basic"
                            ref="inputContent"
                        ></textarea>
                    </td>
                </tr>
                <tr>
                    <th>시작일</th>
                    <td>
                        <input
                            type="date"
                            class="input wp80"
                            ref="startDate"
                        />
                    </td>
                    <th>종료일</th>
                    <td>
                        <input
                            type="date"
                            class="input wp80"
                            ref="endDate"
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
            <a v-if="!modData" class="btn btn01" @click="regPopup"> 등록 </a>
            <a v-if="modData" class="btn btn01" @click="modPopup"> 수정 </a>
            <a class="btn btn02" @click="handleClose"> 취소 </a>
        </div>
    </div>
</template>