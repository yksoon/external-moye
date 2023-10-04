<script>
import { ref } from "vue";
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

export default {
    name: "NoticeModalMain",
    setup(props) {
        const inputTitle = ref(null);
        const inputSubTitle = ref(null);
        const inputContent = ref(null);

        const err = CommonErrModule();

        const useModal = useModalStore();

        // 모달 닫기
        const handleClose = () => {
            useModal.setIsModalClose();
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
                    showYn: "Y",
                    boardType: "000",
                    categoryType: "900",
                    subject: inputTitle.value.value,
                    subTitle: inputSubTitle.value.value,
                    content: inputContent.value.value,
                };

                // 기본 formData append
                for (const key in data) {
                    formData.append(key, data[key]);
                }

                // // 파일 formData append
                // fileArr = Array.from(inputAttachmentFile.current.files);
                // let len = fileArr.length;
                // for (let i = 0; i < len; i++) {
                //     formData.append("attachmentFile", fileArr[i]);
                // }

                const responsLogic = (res) => {
                    let result_code = res.headers.result_code;
                    if (result_code === successCode.success) {
                        CommonSpinner(false);

                        CommonNotify({
                            type: "alert",
                            hook: alert,
                            message: "게시물 등록이 완료 되었습니다",
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

                const restParams = {
                    method: "post_multi",
                    url: apiPath.api_admin_reg_board, // /v1/board
                    data: formData,
                    err: err,
                    admin: "Y",
                    callback: (res) => responsLogic(res),
                };

                CommonRest(restParams);
            }
        };

        // 수정, 등록 완료 로직
        const requestBoards = () => {
            // 리스트 새로고침
            handleNeedUpdate();

            // 모달 닫기
            handleClose();
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

            if (!inputSubTitle.value.value) {
                CommonNotify({
                    type: "alert",
                    message: "부제목을 입력해주세요",
                    callback: () => callbackLogic(),
                });

                const callbackLogic = () => {
                    setTimeout(() => {
                        inputSubTitle.value.focus();
                    }, 0);
                };

                return false;
            }

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
            inputTitle: inputTitle,
            inputSubTitle: inputSubTitle,
            inputContent: inputContent,
            handleClose,
            regBoard,
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
                    <th>내용</th>
                    <td>
                        <textarea
                            class="textarea_basic"
                            ref="inputContent"
                        ></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="btn_box">
            <a class="btn btn01" @click="regBoard"> 등록 </a>
            <a class="btn btn02" @click="handleClose"> 취소 </a>
        </div>
    </div>
</template>
