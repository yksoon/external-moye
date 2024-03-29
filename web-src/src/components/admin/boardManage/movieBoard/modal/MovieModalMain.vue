<script setup>
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

// props 샘플
const props = defineProps({
    handleNeedUpdate: Function,
    modData: Object,
});
// props 샘플 End

const fileBaseUrl = apiPath.api_file;

const selectShowYn = ref(null);
const inputTitle = ref(null);
const inputSubTitle = ref(null);
const inputContent = ref(null);
const selectAttachmentMethod = ref(null);
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
    inputContent.value = modData.content ? modData.content : null;
    selectAttachmentMethod.value.value = modData.file_info.length ? 'file' : 'link';
    state.fileList = modData.file_info;
};

// 모달 닫기
const handleClose = () => {
    useModal.setIsModalClose();
};

// 파일 첨부시
const attachFile = (input) => {
    const maxFileCnt = 1; // 첨부파일 최대 개수

    if (input.files.length > maxFileCnt) {
        CommonNotify({
            type: "alert",
            message: "영상은 1개만 업로드 가능합니다.",
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
        boardType: "300", // 영상게시판
        categoryType: "900", // 기타
        subject: inputTitle.value.value,
        subTitle: inputSubTitle.value.value,
        content: selectAttachmentMethod.value.value == 'link' ? inputContent.value.value : null,
    };

    // 기본 formData append
    for (const key in data) {
        formData.append(key, data[key]);
    }

    console.log(selectAttachmentMethod.value);

    // 파일 formData append
    if (selectAttachmentMethod.value.value == 'file') {
        fileArr = Array.from(inputAttachmentFile.value.files);
        let len = fileArr.length;
        for (let i = 0; i < len; i++) {
            formData.append("attachmentFile", fileArr[i]);
        }
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
    if (validation()) { // 유효성 검사 통과시 수정 로직 실행
        CommonSpinner(true);

        const formData = new FormData();
        const model = boardModel;
        let data = {};

        let fileArr = [];

        data = {
            ...model,
            showYn: selectShowYn.value.value,
            boardIdx: modData.board_idx,
            boardType: "300", // 영상게시판
            categoryType: "900", // 기타
            subject: inputTitle.value.value,
            subTitle: inputSubTitle.value.value,
            content: inputContent.value.value,
        };

        // 기본 formData append
        for (const key in data) {
            formData.append(key, data[key]);
        }

        // 파일 formData append
        if (selectAttachmentMethod.value == 'file') {
            fileArr = Array.from(inputAttachmentFile.value.files);
            let len = fileArr.length;
            for (let i = 0; i < len; i++) {
                formData.append("attachmentFile", fileArr[i]);
            }
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

    // 등록일 경우
    if (!isModData && selectAttachmentMethod.value.value == 'link' && !inputContent.value.value) {
        CommonNotify({
            type: "alert",
            message: "링크주소를 입력해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputContent.value.focus();
            }, 0);
        };

        return false;
    }

    // 등록일 경우
    if (!isModData && selectAttachmentMethod.value.value == 'file' && inputAttachmentFile.value.files.length === 0) {
        CommonNotify({
            type: "alert",
            message: "영상을 첨부해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputAttachmentFile.value.focus();
            }, 0);
        };

        return false;
    }

    // 수정일 경우
    if (isModData && selectAttachmentMethod.value == 'link' && !inputContent.value.value) {
        CommonNotify({
            type: "alert",
            message: "링크주소를 입력해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputContent.value.focus();
            }, 0);
        };

        return false;
    }

    // 수정일 경우
    if (isModData && selectAttachmentMethod.value == 'file' && inputAttachmentFile.value.files.length === 0) {
        CommonNotify({
            type: "alert",
            message: "영상을 첨부해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputAttachmentFile.value.focus();
            }, 0);
        };

        return false;
    }

    return true;
};

// 인물 프로필 셀렉트 박스 선택 이벤트
const handleAttachmentMethod = (e) => {
    const val = e.target.value;

    selectAttachmentMethod.value = val;

    return;
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
                    <th>첨부방식 <span class="red">*</span></th>
                    <td v-if="!isModData">
                        <select class="wp100" ref="selectAttachmentMethod" @change="(e) => handleAttachmentMethod(e)">
                            <option value="link" selected>링크첨부</option>
                            <option value="file">파일첨부</option>
                        </select>
                    </td>
                    <td v-if="isModData">
                        <div>{{ selectAttachmentMethod.value == "link" ? "링크첨부" : "파일첨부" }}</div>
                    </td>
                </tr>
                <tr v-if="selectAttachmentMethod && selectAttachmentMethod.value == 'link'">
                    <th>영상링크 <span class="red">*</span></th>
                    <td>
                        <input
                            type="text"
                            class="input wp100"
                            ref="inputContent"
                        />
                        <span>예시) https://www.youtube.com/watch?v=<span class="red"><b>lrmDoJkZjns</b></span></span>
                        <div>주소창에서 빨간표시 부분만 복사하여 입력해주시면 됩니다.</div>
                    </td>
                </tr>
                <tr v-if="selectAttachmentMethod && selectAttachmentMethod.value == 'file'">
                    <th>파일첨부 <span class="red">*</span></th>
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
                <tr v-if="isModData">
                    <th>영상</th>
                    <td v-if="modData.content.length && selectAttachmentMethod.value == 'link'">
                        <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${modData.content}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </td>
                    <td v-if="modData.file_info.length && selectAttachmentMethod.value == 'file'">
                        <!-- <video width="560" height="315" :src="`https://www.youtube.com/embed/${modData.content}`" title="Video player"></video> -->
                        <video controls width="560" height="315">
                            <source :src="`${fileBaseUrl}${modData.file_info[0].file_path_enc}`" type="video/mp4">
                        </video>
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
                
            </tbody>
        </table>
        <div class="btn_box">
            <a v-if="!modData" class="btn btn01" @click="regBoard"> 등록 </a>
            <a v-if="modData" class="btn btn01" @click="modBoard"> 수정 </a>
            <a class="btn btn02" @click="handleClose"> 취소 </a>
        </div>
    </div>
</template>