<script setup>
import { ref } from "vue";
import {
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { useModalStore } from "@/stores/modal";
import { successCode } from "@/common/js/resultCode";
import { apiPath, routerPath } from "@/webPath";

// ------------------- import End --------------------

const props = defineProps({
    handleNeedUpdate: Function,
    boardIdx: Number,
});

const handleNeedUpdate = props.handleNeedUpdate;
const boardIdx = props.boardIdx;
const inputPassword = ref(null);

const useModal = useModalStore();

// 모달 닫기
const handleClose = () => {
    useModal.setIsModalClose();
};

// 비밀번호 확인
const passwordCheck = () => {
    if (validation()) {
        CommonSpinner(true);

        // /v1/board/_confirm
        // POST
        // 게시판 정보 확인 (상담문의 비밀번호 확인)
        const url = apiPath.api_admin_confirm_board;
        let board_idx = boardIdx;
        let data = {};

        data = {
            board_pwd: inputPassword.value.value,
            board_idx: board_idx,
        };

        const responseLogic = (res) => {
            let result_info = res.data.result_info;

            if (result_info === true) {
                CommonSpinner(false);

                requestBoards(boardIdx);
            } else {
                CommonSpinner(false);

                handleClose();
            }
        };

        const restParams = {
            method: "post",
            url: url, // /v1/board/_confirm
            data: data,
            admin: "Y",
            callback: (res) => responseLogic(res),
        };

        CommonRest(restParams);
    }
};


// 비밀번호 확인 완료 로직
const requestBoards = (board_idx) => {
    // 모달 닫기
    handleClose();

    location.replace(`${routerPath.web_consulting_url}/${board_idx}`);
};

// 검증
const validation = () => {
    if (!inputPassword.value) {
        CommonNotify({
            type: "alert",
            message: "비밀번호를 입력해주세요",
            callback: () => callbackLogic(),
        });

        const callbackLogic = () => {
            setTimeout(() => {
                inputPassword.value.focus();
            }, 0);
        };

        return false;
    }

    return true;
};
</script>

<template>
    <div id="wrapper">
        <div>비밀번호 입력</div>
        <div class=" placeholder_Title_Big">
            <input type="text" name="pwdcheck" ref="inputPassword" autofocus/>
        </div>
        <div class="btn_box">
            <a class="btn btn01" @click="passwordCheck"> 확인 </a>
            <a class="btn btn02" @click="handleClose"> 취소 </a>
        </div>
    </div>
</template>