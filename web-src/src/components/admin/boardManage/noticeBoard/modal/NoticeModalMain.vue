<script>
import { ref, reactive } from "vue";
import {
    CommonErrModule,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { useModalStore } from "@/stores/modal";
import { boardModel } from "@/components/admin/boardManage/boardModel";
import { successCode } from "@/common/js/resultCode";
import { apiPath } from "@/webPath";
import { onMounted } from "vue";

export default {
    name: "NoticeModalMain",
    props: {
        handleNeedUpdate: Function,
        modData: Object,
    },
    setup(props) {
        const fileBaseUrl = apiPath.api_file;

        const selectShowYn = ref(null);
        const inputTitle = ref(null);
        const inputSubTitle = ref(null);
        const inputContent = ref(null);
        const inputAttachmentFile = ref(null);

        const state = reactive({
            fileList: [],
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

        // 수정일 경우 초기 세팅
        const getDefaultValue = () => {
            selectShowYn.value.value = modData.show_yn;
            inputTitle.value.value = modData.subject;
            inputSubTitle.value.value = modData.sub_title;
            inputContent.value.value = modData.content;
            state.fileList = modData.file_info;
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
                    boardType: "900",
                    categoryType: "900",
                    subject: inputTitle.value.value,
                    subTitle: inputSubTitle.value.value,
                    content: inputContent.value.value,
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

                const responseLogic = (res) => {
                    let result_code = res.headers.result_code;
                    if (result_code === successCode.success) {
                        CommonSpinner(false);

                        CommonNotify({
                            type: "alert",
                            message: "게시물 등록이 완료 되었습니다",
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

                const restParams = {
                    method: "post_multi",
                    url: apiPath.api_admin_reg_board, // /v1/board
                    data: formData,
                    admin: "Y",
                    callback: (res) => responseLogic(res),
                };

                CommonRest(restParams);
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
                    boardType: "900",
                    categoryType: "900",
                    subject: inputTitle.value.value,
                    subTitle: inputSubTitle.value.value,
                    content: inputContent.value.value,
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

                const responseLogic = (res) => {
                    let result_code = res.headers.result_code;
                    if (result_code === successCode.success) {
                        CommonSpinner(false);

                        CommonNotify({
                            type: "alert",
                            message: "게시물 수정이 완료 되었습니다",
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

                // 수정
                // /v1/board
                // PUT MULTI
                const restParams = {
                    method: "put_multi",
                    url: apiPath.api_admin_mod_board, // /v1/board
                    data: formData,
                    admin: "Y",
                    callback: (res) => responseLogic(res),
                };

                CommonRest(restParams);
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

            if (!inputContent.value.value) {
                CommonNotify({
                    type: "alert",
                    message: "내용을 입력해주세요",
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

        return {
            modData,
            isModData,
            fileBaseUrl,
            state,
            selectShowYn: selectShowYn,
            inputTitle: inputTitle,
            inputSubTitle: inputSubTitle,
            inputContent: inputContent,
            inputAttachmentFile: inputAttachmentFile,
            handleClose,
            regBoard,
            modBoard,
            attachFile,
        };
    },
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
                    <th>제목 <span class="red">*</span></th>
                    <td>
                        <input
                            type="text"
                            class="input wp100"
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
                            ref="inputSubTitle"
                        />
                    </td>
                </tr>
                <tr>
                    <th>내용 <span class="red">*</span></th>
                    <td>
                        <textarea
                            class="textarea_basic"
                            ref="inputContent"
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
        <div class="btn_box">
            <a v-if="!modData" class="btn btn01" @click="regBoard"> 등록 </a>
            <a v-if="modData" class="btn btn01" @click="modBoard"> 수정 </a>
            <a class="btn btn02" @click="handleClose"> 취소 </a>
        </div>
    </div>
</template>
