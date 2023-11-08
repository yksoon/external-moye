<script setup>
import { ref, reactive } from "vue";
import {
    CommonErrModule,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { useModalStore } from "@/stores/modal";
import { useCodesStore } from "@/stores/codes";
import { storeToRefs } from "pinia";
import { boardModel } from "@/components/admin/boardManage/boardModel";
import { successCode } from "@/common/js/resultCode";
import { apiPath } from "@/webPath";
import { onMounted } from "vue";

// ------------------- import End --------------------

const props = defineProps({
    modData: Object,
    handleNeedUpdate: Function,
});

const fileBaseUrl = apiPath.api_file;

const useCodes = useCodesStore();
const { codes } = storeToRefs(useCodes);

const selectShowYn = ref(null);
const inputTitle = ref(null);
const inputSubTitle = ref(null);
const inputContent = ref(null);
const inputAttachmentFile = ref(null);

const inputAnswerContent = ref(null);

const state = reactive({
    fileList: [],
    commentFileList: [],
});

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

const setCategoryTypeOption = () => {};

// 수정일 경우 초기 세팅
const getDefaultValue = () => {
    selectShowYn.value.value = modData.show_yn;
    inputTitle.value.value = modData.subject;
    inputSubTitle.value.value = modData.sub_title;
    inputContent.value.value = modData.content;
    state.fileList = modData.file_info;

    // console.log(modData.comment_info.content);
    if (modData.comment_info !== null) {
        inputAnswerContent.value.value = modData.comment_info.content;
        state.commentFileList = modData.comment_info.file_info ?? [];
    }
    //
};

// 모달 닫기
const handleClose = () => {
    useModal.setIsModalClose();
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

// 등록
const regBoard = () => {
    if (validation()) {
        CommonSpinner(true);

        const formData = new FormData();
        const model = boardModel;
        let data = {};

        let fileArr = [];

        data = {
            ...model,
            showYn: selectShowYn.value.value,
            boardType: "100",
            boardIdx: isModData && modData.board_idx,
            categoryType: isModData && modData.category_type_cd,
            subject: inputTitle.value.value,
            subTitle: inputSubTitle.value.value,
            content: inputAnswerContent.value.value,
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

        const restParams = {
            method: "post_multi",
            url: apiPath.api_admin_reg_comment, // /v1/_comment
            data: formData,
            admin: "Y",
            callback: (res) => responseLogic(res),
        };

        CommonRest(restParams);

        const responseLogic = (res) => {
            let result_code = res.headers.result_code;
            if (result_code === successCode.success) {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    message: "답변 등록이 완료 되었습니다",
                    callback: () => requestBoards(),
                });
            } else {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    message: "잠시 후 다시 시도해주세요",
                });
            }
        };
    }
};

// 수정
const modBoard = () => {
    if (validation()) {
        CommonSpinner(true);

        const formData = new FormData();
        const model = boardModel;
        let data = {};

        let fileArr = [];

        data = {
            ...model,
            showYn: selectShowYn.value.value,
            boardIdx: modData.board_idx,
            boardType: "100",
            categoryType: modData.category_type_cd,
            subject: modData.subject,
            subTitle: modData.sub_title,
            content: inputAnswerContent.value.value,
            commentIdx: modData.comment_info.comment_idx,
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

        // 수정
        // /v1/_comment
        // PUT MULTI
        const restParams = {
            method: "put_multi",
            url: apiPath.api_admin_mod_comment, // /v1/_comment
            data: formData,
            admin: "Y",
            callback: (res) => responseLogic(res),
        };

        CommonRest(restParams);

        const responseLogic = (res) => {
            let result_code = res.headers.result_code;
            if (result_code === successCode.success) {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    message: "답변 수정이 완료 되었습니다",
                    callback: () => requestBoards(),
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
    }
};

// 수정, 등록 완료 로직
const requestBoards = () => {
    // 모달 닫기
    handleClose();

    handleNeedUpdate();
};

// 검증
const validation = () => {
    // if (!inputTitle.value.value) {
    //     CommonNotify({
    //         type: "alert",
    //         message: "제목을 입력해주세요",
    //         callback: () => callbackLogic(),
    //     });

    //     const callbackLogic = () => {
    //         setTimeout(() => {
    //             inputTitle.value.focus();
    //         }, 0);
    //     };

    //     return false;
    // }

    // if (!inputSubTitle.value.value) {
    //     CommonNotify({
    //         type: "alert",
    //         message: "부제목을 입력해주세요",
    //         callback: () => callbackLogic(),
    //     });

    //     const callbackLogic = () => {
    //         setTimeout(() => {
    //             inputSubTitle.value.focus();
    //         }, 0);
    //     };

    //     return false;
    // }

    if (!inputAnswerContent.value.value) {
        CommonNotify({
            type: "alert",
            message: "답변 내용을 입력해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputAnswerContent.value.focus();
            }, 0);
        };

        return false;
    }

    return true;
};
</script>
<template>
    <div class="admin">
        <h4 className="mo_subtitle">문의내용</h4>
        <table class="table_bb">
            <colgroup>
                <col width="30%" />
                <col width="*" />
            </colgroup>

            <tbody>
                <tr>
                    <th>상담 카테고리</th>
                    <td v-if="isModData">
                        {{ modData.category_type }}
                    </td>
                </tr>
                <tr>
                    <th>노출여부</th>
                    <td>
                        <select
                            class="wp100"
                            ref="selectShowYn"
                            :readonly="true"
                            :disabled="true"
                        >
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
                            :readonly="true"
                            :disabled="true"
                            ref="inputTitle"
                        />
                    </td>
                </tr>
                <tr>
                    <th>부제목</th>
                    <td>
                        <input
                            type="text"
                            class="input wp100"
                            :readonly="true"
                            :disabled="true"
                            ref="inputSubTitle"
                        />
                    </td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td>
                        <textarea
                            class="textarea_basic"
                            ref="inputContent"
                            :readonly="true"
                            :disabled="true"
                        ></textarea>
                    </td>
                </tr>
                <tr v-if="modData">
                    <th>조회수</th>
                    <td>
                        {{ modData.view_count }}
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
                <tr>
                    <th>파일</th>
                    <td class="fileicon">
                        <!-- <div style="margin-bottom: 5">
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
                        </div> -->
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

        <h4 className="mo_subtitle">답변내용</h4>
        <table class="table_bb">
            <colgroup>
                <col width="30%" />
                <col width="*" />
            </colgroup>

            <tbody>
                <tr>
                    <th>상태</th>
                    <td>
                        {{ modData.process_status }}
                    </td>
                </tr>
                <tr>
                    <th>답변 내용 <span class="red">*</span></th>
                    <td>
                        <textarea
                            class="textarea_basic"
                            ref="inputAnswerContent"
                        ></textarea>
                    </td>
                </tr>
                <tr>
                    <th>파일</th>
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
                                v-if="state.commentFileList.length !== 0"
                                v-for="item in state.commentFileList"
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

        <div class="btn_box">
            <a
                v-if="modData.comment_info === null"
                class="btn btn01"
                @click="regBoard"
            >
                등록
            </a>
            <a
                v-else="
                    modData.comment_info !== null &&
                    Object.keys(modData.comment_info).length !== 0
                "
                class="btn btn01"
                @click="modBoard"
            >
                수정
            </a>
            <a class="btn btn02" @click="handleClose"> 취소 </a>
        </div>
    </div>
</template>
