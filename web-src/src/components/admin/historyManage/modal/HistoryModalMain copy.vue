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
    fileList: [],
});

const handleNeedUpdate = props.handleNeedUpdate;

const fileBaseUrl = apiPath.api_file;

const useCodes = useCodesStore();
const { codes } = storeToRefs(useCodes);
const useModal = useModalStore();

const inputYear = ref(null);
const inputMemo = ref(null);
const selectShowYn = ref(null);
const inputTitle = ref(null);
const inputSubTitle = ref(null);
const inputContent = ref(null);
const inputAttachmentFile = ref(null);

const inputStartDate = ref(null);
const inputEndDate = ref(null);

// const birthday = ref(null);

onMounted(() => {
    isModData && getDefaultValue();
});

// 수정일 경우 초기 세팅
const getDefaultValue = () => {
    inputYear.value.value = modData.target_year;
    inputMemo.value.value = modData.target_memo;
    selectShowYn.value.value = modData.show_yn;
    inputTitle.value.value = modData.subject;
    inputSubTitle.value.value = modData.sub_title;
    inputContent.value.value = modData.content;
    state.fileList = modData.file_info;
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

const handelProfileSection = (handleType, idx) => {
    switch (handleType) {
        case "add":
            const lastSectionIdx =
                state.profileSection.length !== 0
                    ? state.profileSection.at(-1).idx
                    : 0;
            const addSectionIdx = lastSectionIdx + 1;

            state.profileSection = [
                ...state.profileSection,
                { idx: addSectionIdx, sectionValue: "" },
            ];

            break;

        case "remove":
            if (state.profileSection.length > 1) {
                state.profileSection = state.profileSection.filter(
                    (el) => el.idx !== idx
                );

                state.selectedProfile = state.selectedProfile.filter(
                    (el) => el.parentIdx !== idx
                );
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
const handleProfileType = (e, sectionIdx) => {
    const val = e.target.value;

    if (
        state.profileSection.filter((el) => el.sectionValue === val).length !==
        0
    ) {
        CommonNotify({
            type: "alert",
            message: "이미 선택하였습니다. 선택된 항목에서 추가해주세요",
        });

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

// 인물 등록
const regArtist = () => {
    if (validation()) {
        CommonSpinner(true);

        const formData = new FormData();
        const model = historyModel;
        let data = {};

        let fileArr = [];

        data = {
            ...model,
            showYn: selectShowYn.value.value,
            targetYear: inputYear.value.value,
            targetMemo: inputMemo.value.value,
        };

        // 기본 formData append
        for (const key in data) {
            formData.append(key, data[key]);
        }

        // 파일 formData append
        fileArr = Array.from(inputAttachmentFile.value.files);
        let len = fileArr.length;
        for (let i = 0; i < len; i++) {
            formData.append("attachmentFile", fileArr[i]);
        }

        // 프로필 formData append
        state.selectedProfile.forEach((item, idx) => {
            if (item.profileContent) {
                formData.append(
                    `profileInfo[${idx}].profileType`,
                    item.profileType
                );
                formData.append(
                    `profileInfo[${idx}].profileContent`,
                    item.profileContent
                );
            }
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
            url: apiPath.api_admin_reg_people, // /v1/people
            data: formData,
            admin: "Y",
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);
    }
};

// 수정버튼
const modArtist = () => {
    if (validation()) {
        CommonSpinner(true);

        const formData = new FormData();
        const model = historyModel;
        let data = {};

        let fileArr = [];

        data = {
            ...model,
            // showYn: selectShowYn.value.value,
            // nameFirstKo: inputName.value.value.substr(0, 1),
            // nameLastKo: inputName.value.value.substr(1),
            // categoryIdx: selectCategory2.value.value,
            // peopleType: selectPeopleType.value.value,
            // peopleIdx: modData.people_idx,
            // nameFirstCn: inputNameCn.value.value.substr(0, 1),
            // nameLastCn: inputNameCn.value.value.substr(1),
            // nameFirstEn: inputNameFirstEn.value.value,
            // nameLastEn: inputNameLastEn.value.value,
            // birthType: birthType.value.value,
            // birthYyyy: birthday.value.value
            //     ? birthday.value.value.split("-")[0]
            //     : "",
            // birthMm: birthday.value.value
            //     ? birthday.value.value.split("-")[1]
            //     : "",
            // birthDd: birthday.value.value
            //     ? birthday.value.value.split("-")[2]
            //     : "",
            // gender: gender.value.value,
            // email: email.value.value,
            // peopleMemo: peopleMemo.value.value,
            // interPhoneNumber: "82",
            // mobile1: mobile1.value.value,
            // mobile2: mobile2.value.value,
            // mobile3: mobile3.value.value,
        };

        // 기본 formData append
        for (const key in data) {
            formData.append(key, data[key]);
        }

        // 파일 formData append
        fileArr = Array.from(inputAttachmentFile.value.files);
        let len = fileArr.length;
        for (let i = 0; i < len; i++) {
            formData.append("attachmentFile", fileArr[i]);
        }

        // 프로필 formData append
        state.selectedProfile.forEach((item, idx) => {
            if (item.profileContent) {
                formData.append(
                    `profileInfo[${idx}].profileType`,
                    item.profileType
                );
                formData.append(
                    `profileInfo[${idx}].profileContent`,
                    item.profileContent
                );
            }
        });

        const responsLogic = (res) => {
            let result_code = res.headers.result_code;
            if (result_code === successCode.success) {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    message: "연혁 정보 수정이 완료 되었습니다",
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

        // /v1/people
        // PUT MULTI
        // 인물 수정
        const restParams = {
            method: "put_multi",
            url: apiPath.api_admin_mod_people, // /v1/people
            data: formData,
            admin: "Y",
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);
    }
};

// 삭제
const removeArtist = () => {
    CommonNotify({
        type: "confirm",
        message: "항목을 삭제하시겠습니까?",
        callback: () => removeLogic(),
    });

    const removeLogic = () => {
        CommonSpinner(true);

        let data = {};
        const url = `${apiPath.api_admin_remove_people}/${modData.people_idx}`;

        const restParams = {
            method: "delete",
            url: url,
            data: data,
            callback: (res) => responsLogic(res),
            admin: "Y",
        };
        CommonRest(restParams);

        const responsLogic = (res) => {
            if (res.headers.result_code === successCode.success) {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    message: `삭제 되었습니다.`,
                    callback: () => requestList(),
                });
            }
        };
    };
};

// 수정, 등록 완료 로직
const requestList = () => {
    // 모달 닫기
    useModal.setIsModalClose();

    handleNeedUpdate();
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

    if (!isModData) {
        if (inputAttachmentFile.value.files.length === 0) {
            CommonNotify({
                type: "alert",
                message: "한가지 이상의 이미지를 첨부해주세요",
            });
            return false;
        }
    }
    if (state.selectedProfile.length === 0) {
        CommonNotify({
            type: "alert",
            message: "한가지 이상의 프로필을 추가해주세요",
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
                        <th>노출여부 <span class="red">*</span></th>
                        <td>
                            <select class="select wp100" ref="selectShowYn">
                                <option value="Y">노출</option>
                                <option value="N">비노출</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </div>

        <div>
            <h4 className="mo_subtitle">인물 기본 정보</h4>
            <table class="table_bb">
                <colgroup>
                    <col width="15%">
                    <col width="*">
                    <col width="15%">
                    <col width="*">
                </colgroup>
                <tbody>
                    <tr>
                        <th>이름(한문)</th>
                        <td colSpan="3">
                            <input
                                type="text"
                                class="input wp100"
                                ref="inputNameCn"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>성(영문)</th>
                        <td>
                            <input
                                type="text"
                                class="input w180"
                                placeholder="First Name"
                                ref="inputNameFirstEn"
                            />
                        </td>
                        <th>이름(영문)</th>
                        <td>
                            <input
                                type="text"
                                class="input w180"
                                placeholder="Last Name"
                                ref="inputNameLastEn"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>생년월일</th>
                        <td>
                            <select class="select wp20" ref="birthType">
                                <option value="000">양력</option>
                                <option value="100">음력</option>
                            </select>
                            <input
                                type="date"
                                class="input wp80"
                                ref="birthday"
                            />
                        </td>
                        <th>연락처</th>
                        <td>
                            <input
                                type="text"
                                class="input w100"
                                ref="mobile1"
                            />
                            -
                            <input
                                type="text"
                                class="input w100"
                                ref="mobile2"
                            />
                            -
                            <input
                                type="text"
                                class="input w100"
                                ref="mobile3"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>성별</th>
                        <td>
                            <select class="select w100" ref="gender">
                                <option value="0">남자</option>
                                <option value="1">여자</option>
                            </select>
                        </td>
                        <th>E-MAIL</th>
                        <td>
                            <input
                                type="email"
                                class="input wp100"
                                ref="email"
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>메모</th>
                        <td colspan="3">
                            <input
                                type="email"
                                class="input wp100"
                                ref="peopleMemo"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="margin: 30px 0">
            <h4 className="mo_subtitle">인물 프로필 정보</h4>
            <a @click="handelProfileSection('add')">추가</a>
            <table class="table_bb">
                <colgroup>
                    <col width="15%" />
                    <col width="*" />
                </colgroup>
                <tbody>
                    <tr v-for="item in state.profileSection" :id="item.idx">
                        <th>프로필</th>
                        <td>
                            <div>
                                <select
                                    class="select w180"
                                    :id="`section_select_${item.idx}`"
                                    :value="item.sectionValue"
                                    @change="
                                        (e) => handleProfileType(e, item.idx)
                                    "
                                >
                                    <option value="">- 선택 -</option>
                                    <option
                                        v-for="item in state.profileType"
                                        :value="item.code_key"
                                    >
                                        {{ item.code_value }}
                                    </option>
                                </select>
                                <a
                                    @click="
                                        handelProfileSection('remove', item.idx)
                                    "
                                    >섹션 삭제</a
                                >&nbsp&nbsp&nbsp
                                <a
                                    @click="handleInputBtn('add', item.idx)"
                                    v-if="
                                        state.selectedProfile.filter(
                                            (el) => el.parentIdx === item.idx
                                        ).length !== 0
                                    "
                                    >input 추가</a
                                >
                            </div>
                            <div
                                v-if="
                                    state.selectedProfile.filter(
                                        (el) => el.parentIdx === item.idx
                                    ).length !== 0
                                "
                                v-for="inputItem in state.selectedProfile.filter(
                                    (el) => el.parentIdx === item.idx
                                )"
                            >
                                <input
                                    type="text"
                                    class="input w370"
                                    :id="`${item.idx}-${inputItem.inputIdx}`"
                                    :value="inputItem.profileContent"
                                    @change="
                                        (e) =>
                                            handleInput(
                                                e,
                                                item.idx,
                                                inputItem.inputIdx
                                            )
                                    "
                                />
                                <a
                                    @click="
                                        handleInputBtn(
                                            'remove',
                                            item.idx,
                                            inputItem.inputIdx
                                        )
                                    "
                                    >input 삭제</a
                                >
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="subbtn_box">
            <a v-if="!isModData" class="subbtn" @click="regArtist"> 등록 </a>
            <a v-if="isModData" class="subbtn delete" @click="removeArtist">
                삭제
            </a>
            <a v-if="isModData" class="subbtn" @click="modArtist"> 수정 </a>
            <a class="subbtn off" @click="handleClose"> 취소 </a>
        </div>
    </div>
</template>
