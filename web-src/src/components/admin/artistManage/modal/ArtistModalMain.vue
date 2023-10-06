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
import { useCodesStore } from "@/stores/codes";
import { useModalStore } from "@/stores/modal";
import { storeToRefs } from "pinia";
import { artistModel } from "../artistModel";

// ------------------- import End --------------------
const props = defineProps({
    modData: Object,
    handleNeedUpdate: Function,
});

const state = reactive({
    categories: [],
    peopleType: [],
    profileType: [],
    fileList: [],
    profileSection: [{ idx: 1, sectionValue: "" }],
    selectedProfile: [],
});

const handleNeedUpdate = props.handleNeedUpdate;

const useCodes = useCodesStore();
const { codes } = storeToRefs(useCodes);
const useModal = useModalStore();

const inputName = ref(null);
const selectShowYn = ref(null);
const selectCategory1 = ref(null);
const selectCategory2 = ref(null);
const selectPeopleType = ref(null);
const inputAttachmentFile = ref(null);

const selectedCategory1 = ref("1");

onMounted(() => {
    getCategories(1, 0);

    getPeopleProfileType();
});

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

// 카테고리 가져오기 rest
const getCategories = (pageNum, pageSize) => {
    CommonSpinner(true);

    const url = apiPath.api_admin_get_categories;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
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

            createCategories(result_info);

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

// 카테고리 만들기
const createCategories = (data) => {
    const dataLength = data.length;

    let categoriesArr = [];

    let depth1Arr = data.filter((el) => el.category_parent_idx === 0);

    for (let j = 0; j < depth1Arr.length; j++) {
        depth1Arr[j]["child"] = [];
        for (let i = 0; i < dataLength; i++) {
            if (data[i].category_parent_idx === depth1Arr[j].category_idx) {
                depth1Arr[j]["child"].push(data[i]);
            }
        }
    }

    state.categories = depth1Arr;
};

// 인물 구분 가져오기
const getPeopleProfileType = () => {
    state.peopleType = codes.value.filter(
        (el) => el.code_type === "PEOPLE_TYPE"
    );

    state.profileType = codes.value.filter(
        (el) => el.code_type === "PROFILE_TYPE"
    );
};

// 카테고리 대분류 핸들러
const handleCategory1 = (e) => {
    selectedCategory1.value = e.target.value;
};

// 파일 첨부시
const attachFile = (input) => {
    const maxFileCnt = 5; // 첨부파일 최대 개수

    if (input.files.length > maxFileCnt) {
        CommonNotify({
            type: "alert",
            message: "파일은 5개까지 업로드 가능합니다.",
        });

        input.value = "";

        return false;
    }
};

const handelProfileSection = (handleType, idx) => {
    switch (handleType) {
        case "add":
            const lastSectionIdx = state.profileSection.at(-1).idx;
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

// 아티스트 프로필 셀렉트 박스 선택 이벤트
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

// 아티스트 등록
const regArtist = () => {
    if (validation()) {
        CommonSpinner(true);

        const formData = new FormData();
        const model = artistModel;
        let data = {};

        let fileArr = [];

        data = {
            ...model,
            showYn: selectShowYn.value.value,
            nameFirstKo: inputName.value.value.substr(0, 1),
            nameLastKo: inputName.value.value.substr(1),
            categoryIdx: selectCategory2.value.value,
            peopleType: selectPeopleType.value.value,
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
                    message: "아티스트 등록이 완료 되었습니다",
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

// 수정, 등록 완료 로직
const requestList = () => {
    // 모달 닫기
    useModal.setIsModalClose();

    handleNeedUpdate();
};

// 검증
const validation = () => {
    if (!inputName.value.value) {
        CommonNotify({
            type: "alert",
            message: "이름을 입력해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputName.value.focus();
            }, 0);
        };

        return false;
    }
    if (inputAttachmentFile.value.files.length === 0) {
        CommonNotify({
            type: "alert",
            message: "한가지 이상의 이미지를 첨부해주세요",
        });
        return false;
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
        <div style="margin: 30px 0">
            <h4 className="mo_subtitle">아티스트 필수 정보</h4>
            <table class="table_bb">
                <colgroup>
                    <col width="15%" />
                    <col width="35%" />
                    <col width="15%" />
                    <col width="35%" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>이름</th>
                        <td>
                            <input
                                type="text"
                                class="input wp100"
                                ref="inputName"
                            />
                        </td>
                        <th>노출여부</th>
                        <td>
                            <select class="select wp100" ref="selectShowYn">
                                <option value="Y">노출</option>
                                <option value="N">비노출</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>카테고리</th>
                        <td>
                            <select
                                class="select w180"
                                ref="selectCategory1"
                                @change="handleCategory1"
                            >
                                <option
                                    v-for="item in state.categories"
                                    :value="item.category_idx"
                                >
                                    {{ item.category_name_ko }}
                                </option>
                            </select>
                            <select
                                class="select w180"
                                ref="selectCategory2"
                                v-if="
                                    selectedCategory1 &&
                                    state.categories.length !== 0
                                "
                            >
                                <option
                                    v-for="item2 in state.categories.filter(
                                        (el) =>
                                            el.category_idx ===
                                            Number(selectedCategory1)
                                    )[0].child"
                                    :value="item2.category_idx"
                                >
                                    {{ item2.category_name_ko }}
                                </option>
                            </select>
                        </td>
                        <th>구분</th>
                        <td>
                            <select class="select wp100" ref="selectPeopleType">
                                <option
                                    v-for="item in state.peopleType"
                                    :value="item.code_key"
                                >
                                    {{ item.code_value }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>인물정보파일</th>
                        <td class="fileicon" colSpan="3">
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
                                        <img src="img/common/file.svg" alt="" />
                                        {{ item.file_name }}
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="margin: 30px 0">
            <h4 className="mo_subtitle">아티스트 프로필 정보</h4>
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
        <div class="btn_box">
            <a v-if="!modData" class="btn btn01" @click="regArtist"> 등록 </a>
            <a v-if="modData" class="btn btn01" @click="modBoard"> 수정 </a>
            <a class="btn btn02" @click="handleClose"> 취소 </a>
        </div>
    </div>
</template>
