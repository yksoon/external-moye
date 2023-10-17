<script setup>
import { onMounted, reactive, ref } from "vue";
import {
    CommonConsole,
    CommonNotify,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { apiPath } from "@/webPath";
// import { useCodesStore } from "@/stores/codes";
import { useModalStore } from "@/stores/modal";
import { storeToRefs } from "pinia";
import { historyModel } from "../historyModel";
// import "@/common/css/admin.css";

// ------------------- import End --------------------
const props = defineProps({
    modData: Object,
    handleNeedUpdate: Function,
});

const modData = props.modData;
const isModData = modData
    ? Object.keys(modData).length !== 0
        ? true
        : false
    : false;

const state = reactive({
    historyList: [],
    fileList: [],
});

const handleNeedUpdate = props.handleNeedUpdate;

const fileBaseUrl = apiPath.api_file;

// const useCodes = useCodesStore();
// const { codes } = storeToRefs(useCodes);
const useModal = useModalStore();

const inputYear = ref(null);
const inputMemo = ref(null);
const selectShowYn = ref(null);

const inputTitle = ref(null);
// const inputSubTitle = ref(null);
const inputContent = ref(null);
const startDate = ref(null);
const endDate = ref(null);
const inputAttachmentFile = ref(null);

// const birthday = ref(null);

onMounted(() => {
    isModData && getDefaultValue();
});

// 수정일 경우 초기 세팅
const getDefaultValue = () => {
    inputYear.value.value = modData.target_year;
    inputMemo.value.value = modData.target_memo;
    selectShowYn.value.value = modData.show_yn;
    inputTitle.value.value = modData.title;
    inputContent.value.value = modData.content;
    startDate.value.value = `${modData.birth_yyyy}-${modData.birth_mm}`;
    endDate.value.value = `${modData.birth_yyyy}-${modData.birth_mm}`;

    // state.fileList = modData.file_info;
};

// 연혁 정보 등록
const regHistory = () => {
    if (validation()) {
        CommonSpinner(true);

        const formData = new FormData();
        const model = historyModel;
        let data = {};

        let fileArr = [];
        let historyArr = [];

        data = {
            ...model,
            showYn: selectShowYn.value.value,
            targetYear: inputYear.value.value,
            targetMemo: inputMemo.value.value,
            // detailInfo: state.historyList
        };

        // 기본 formData append
        for (const key in data) {
            formData.append(key, data[key]);
        }

        // 연혁 formData append
        // detailInfo = Array.from(state.historyList);
        // let len = state.historyList.length;
        // for (let i = 0; i < len; i++) {
        //     formData.append("detailInfo", detailInfo[i]);
        // }

        // 담당자 formData append
        state.historyList.forEach((item, idx) => {
            //console.log(idx, ">>>>>>>>>>>>>", item);
            // formData.append(
            //     `detailInfo[${idx}].title`,
            //     item.title.value
            // );
            formData.append(
                `detailInfo[${idx}].title`,
                "testststsets"
            );
            console.log("@>>>>>>>>>>>>>", formData);
        });

  

        const responsLogic = (res) => {
            let result_code = res.headers.result_code;
            if (result_code === successCode.success) {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    message: "연혁 정보 등록이 완료 되었습니다",
                    callback: () => requestList(),
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
            method: "post_multi",
            url: apiPath.api_admin_reg_history, // /v1/history
            data: formData,
            admin: "Y",
            callback: (res) => responsLogic(res),
        };

//         let entries = formData.entries();
// for (const pair of entries) {
//     console.log(pair[0]+ ', ' + pair[1]); 
// }
        CommonRest(restParams);
    }
};


// 모달 닫기
const handleClose = () => {
    CommonNotify({
        type: "confirm",
        message: "취소 하시겠습니까?",
        callback: () => doClose(),
    });

    const doClose = () => {
        useModal.setIsModalClose();
    };
};

// 파일 첨부시
const attachFile = (input) => {
    const maxFileCnt = 5; // 첨부파일 최대 개수

    if (isFileImage(input.files)) {
        if (input.files.length > maxFileCnt) {
            CommonNotify({
                type: "alert",
                message: "파일은 5개까지 업로드 가능합니다.",
            });

            input.value = "";

            return false;
        }
    } else {
        CommonNotify({
            type: "alert",
            message: "이미지만 업로드 가능합니다..",
        });

        input.value = "";

        return false;
    }
};

// 이미지파일인지 검증
const isFileImage = (file) => {
    if (file) {
        for (let i = 0; i < file.length; i++) {
            return file[i] && file[i]["type"].split("/")[0] === "image";
        }
    }
};

const handelHistory = (handleType, idx) => {
    switch (handleType) {
        case "add":
            const lastHistoryIdx =
                state.historyList.length !== 0
                    ? state.historyList.at(-1).idx
                    : 0;
            const addHistoryIdx = lastHistoryIdx + 1;

            state.historyList = [
                ...state.historyList,
                { idx: addHistoryIdx, title: "" },
            ];

            break;

        case "remove":
            if (state.historyList.length > 1) {
                state.historyList = state.historyList.filter(
                    (el) => el.idx !== idx
                );

                // state.selectedProfile = state.selectedProfile.filter(
                //     (el) => el.parentIdx !== idx
                // );
            } else {
                CommonNotify({
                    type: "alert",
                    message: "한가지 이상 필수입니다.",
                });
            }

            break;

        default:
            break;
    }
};

// 인물 프로필 셀렉트 박스 선택 이벤트
const handleProfileType = (e, historyIdx) => {
    const val = e.target.value;

    if (
        state.historyList.filter((el) => el.title === val).length !==
        0
    ) {
        // CommonNotify({
        //     type: "alert",
        //     message: "이미 선택하였습니다. 선택된 항목에서 추가해주세요",
        // });

        if (
            state.selectedProfile.filter((el) => el.parentIdx === sectionIdx)
                .length !== 0
        ) {
            e.target.value = state.selectedProfile.filter(
                (el) => el.parentIdx === sectionIdx
            )[0].profileType;
        } else {
            e.target.value = "";
        }
    } else {
        for (let i = 0; i < state.profileSection.length; i++) {
            if (state.profileSection[i].idx === sectionIdx) {
                state.profileSection[i].sectionValue = val;
            }
        }

        for (let i = 0; i < state.selectedProfile.length; i++) {
            if (state.selectedProfile[i].parentIdx === sectionIdx) {
                state.selectedProfile[i].profileType = val;
            }
        }

        if (
            state.selectedProfile.filter((el) => el.parentIdx === sectionIdx)
                .length === 0
        ) {
            state.selectedProfile = [
                ...state.selectedProfile,
                {
                    parentIdx: sectionIdx,
                    profileType: val,
                    profileContent: "",
                    inputIdx: 1,
                },
            ];
        }
    }
};

// input 추가/삭제
const handleInputBtn = (handleType, parentIdx, inputIdx) => {
    switch (handleType) {
        case "add":
            const parentArr = state.selectedProfile.filter(
                (el) => el.parentIdx === parentIdx
            );

            const newItem = {
                parentIdx: parentIdx,
                profileType: parentArr.at(-1).profileType,
                profileContent: "",
                inputIdx: parentArr.at(-1).inputIdx + 1,
            };

            state.selectedProfile = [...state.selectedProfile, newItem];
            break;

        case "remove":
            const removeItem = state.selectedProfile.filter(
                (el) => el.parentIdx === parentIdx && el.inputIdx === inputIdx
            );

            state.selectedProfile = state.selectedProfile.filter(
                (el) => el !== removeItem[0]
            );

        default:
            break;
    }
};

// input change 이벤트
const handleInput = (e, parentIdx, inputIdx) => {
    const length = state.selectedProfile.length;

    for (let i = 0; i < length; i++) {
        if (
            state.selectedProfile[i].parentIdx === parentIdx &&
            state.selectedProfile[i].inputIdx === inputIdx
        ) {
            state.selectedProfile[i].profileContent = e.target.value;
        }
    }
};

// 검증
const validation = () => {
    if (!inputYear.value.value) {
        CommonNotify({
            type: "alert",
            message: "연도를 입력해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputName.value.focus();
            }, 0);
        };

        return false;
    }

    // if (!isModData) {
    //     if (inputAttachmentFile.value.files.length === 0) {
    //         CommonNotify({
    //             type: "alert",
    //             message: "한가지 이상의 이미지를 첨부해주세요",
    //         });
    //         return false;
    //     }
    // }
    if (state.historyList.length === 0) {
        CommonNotify({
            type: "alert",
            message: "한개 이상의 연혁을 추가해주세요",
        });
        return false;
    }

    return true;
};


</script>
<template>
    <div class="admin">
        <div class="con_area">
            <h4 className="mo_subtitle">연혁 필수 정보</h4>
            <table class="table_bb">
                <colgroup>
                    <col width="15%">
                    <col width="*">
                </colgroup>
                <tbody>
                    <tr>
                        <th>해당연도 <span class="red">*</span></th>
                        <td>
                            <input
                                type="text"
                                class="input wp50"
                                ref="inputYear"
                            /> 년
                        </td>
                        <th>노출여부 <span class="red">*</span></th>
                        <td>
                            <select class="select wp100" ref="selectShowYn">
                                <option value="Y">노출</option>
                                <option value="N">비노출</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>메모</th>
                        <td colSpan="3">
                            <input
                                type="text"
                                class="input wp100"
                                ref="inputMemo"
                            />
                        </td>
                    </tr>
                    <!-- <tr>
                        <th>인물정보파일 <span class="red">*</span></th>
                        <td class="fileicon_artist" colSpan="3">
                            <div style="margin-bottom: 5">
                                <b>
                                    여러 파일 선택이 가능합니다. 여러 파일 선택
                                    시 ctrl 누른 후 선택하시면 됩니다.
                                </b>
                            </div>
                            <div>
                                <input
                                    type="file"
                                    ref="inputAttachmentFile"
                                    multiple
                                    accept="image/*"
                                    @change="(e) => attachFile(e.target)"
                                />
                            </div>
                            <div>
                                <div v-if="state.fileList.length !== 0">
                                    <span
                                        v-for="item in state.fileList"
                                        className="hotel_img"
                                    >
                                        <img
                                            :src="`${fileBaseUrl}${item.file_path_enc}`"
                                            alt=""
                                        />&nbsp;
                                    </span>
                                </div>
                            </div>
                        </td>
                    </tr> -->
                </tbody>
            </table>
        </div>

        <div style="margin: 30px 0">
            <h4 className="mo_subtitle">인물 프로필 정보</h4>
            <a @click="handelHistory('add')">연혁 추가</a>
            <table class="table_bb" v-for="item in state.historyList" :id="item.idx">
                <colgroup>
                    <col width="15%" />
                    <col width="*" />
                    <col width="15%" />
                    <col width="*" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>연혁 제목 <span class="red">*</span></th>
                        <td colSpan="2">
                            <input
                                type="text"
                                class="input wp100"
                                ref="inputTitle"
                            />
                        </td>
                        <td>
                            <a
                            @click="
                            handelHistory('remove', item.idx)
                            "
                            >연혁 삭제</a>
                        </td>
                    </tr>
                    <tr>
                        <th>부제목</th>
                        <td colSpan="3">
                            <input
                                type="text"
                                class="input wp100"
                                ref="inputSubTitle"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colSpan="3">
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
                                type="month"
                                class="input wp80"
                                ref="startDate"
                            />
                        </td>
                        <th>종료일</th>
                        <td>
                            <input
                                type="month"
                                class="input wp80"
                                ref="endDate"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>파일첨부</th>
                        <td class="fileicon">
                            <div style="margin-bottom: 5">
                                <b>
                                    여러 파일 선택이 가능합니다. 여러 파일 선택 시
                                    ctrl 누른 후 선택하시면 됩니다.
                                </b>
                            </div>
                            <div>
                                <input
                                    type="file"
                                    ref="inputAttachmentFile"
                                    multiple
                                    @change="(e) => attachFile(e.target)"
                                />
                            </div>
                            <div>
                                <div
                                    v-if="state.fileList.length !== 0"
                                    v-for="item in state.fileList"
                                >
                                    <a
                                        :href="`${fileBaseUrl}${item.file_path_enc}`"
                                    >
                                        <img src="/img/common/file.svg" alt="" />
                                        {{ item.file_name }}
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="subbtn_box">
            <a v-if="!isModData" class="subbtn" @click="regHistory"> 등록 </a>
            <a v-if="isModData" class="subbtn delete" @click="removeHistory">
                삭제
            </a>
            <a v-if="isModData" class="subbtn" @click="modHistory"> 수정 </a>
            <a class="subbtn off" @click="handleClose"> 취소 </a>
        </div>
    </div>
</template>
