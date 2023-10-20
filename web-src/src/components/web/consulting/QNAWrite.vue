<script setup>
import {
    CommonErrModule,
    CommonConsole,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { storeToRefs } from "pinia";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { successCode } from "@/common/js/resultCode";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from "@/webPath";
import { boardModel } from "@/components/web/consulting/models/boardModel";
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { useRoute } from "vue-router";

// ------------------- import End --------------------

const route = useRoute();

const selectShowYn = ref(false);
const selectCategory = ref(false);
const inputUserName = ref(null);
const inputTitle = ref(null);
const inputSubTitle = ref(null);
const inputContent = ref(null);
const inputPassword = ref(null);
const inputAttachmentFile = ref(null);

const state = reactive({
    board: null,
});

const fileBaseUrl = apiPath.api_file;

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

// 상담문의 등록
const regBoard = () => {
    if (validation()) {
        CommonSpinner(true);

        const formData = new FormData();
        const model = boardModel;
        let data = {};

        let fileArr = [];

        const show_yn = selectShowYn.value ? "N" : "Y";
        const board_pwd = show_yn === "N" ? inputPassword.value.value : null;

        data = {
            ...model,
            showYn: "Y",
            openYn: show_yn,
            boardType: "100",
            detail_type: "000",
            categoryType: selectCategory.value.value,
            regUserNameKo: inputUserName.value.value,
            subject: inputTitle.value.value,
            subTitle: inputTitle.value.value,
            content: inputContent.value.value,
            boardPwd: board_pwd,
        };

        // 기본 formData append
        for (const key in data) {
            formData.append(key, data[key]);
        }

        // 파일 formData append
        // fileArr = Array.from(inputAttachmentFile.value.files);
        // let len = fileArr.length;
        // for (let i = 0; i < len; i++) {
        //     formData.append("attachmentFile", fileArr[i]);
        // }

        const restParams = {
            method: "post_multi",
            url: apiPath.api_admin_reg_board, // /v1/_board
            data: formData,
            admin: "Y",
            callback: (res) => responsLogic(res),
        };

        CommonRest(restParams);

        const responsLogic = (res) => {
            let result_code = res.headers.result_code;
            if (result_code === successCode.success) {
                CommonSpinner(false);

                CommonNotify({
                    type: "alert",
                    message: "문의 등록이 완료 되었습니다",
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

// 수정, 등록 완료 로직
const requestBoards = () => {
    location.replace(routerPath.web_consulting_url);
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

    if (!inputUserName.value.value) {
        CommonNotify({
            type: "alert",
            message: "작성자명을 입력해주세요",
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

    if (selectShowYn.value && !inputPassword.value) {
        CommonNotify({
            type: "alert",
            message: "비밀번호를 입력해주세요",
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

const readyAlert = () => {
    alert('준비중입니다 :-)');
}

</script>

<template>
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu page="consulting" />
            <div id="content">
                <div id="subtitle">
                    <h2>상담문의</h2>
                </div>
                <div data-aos-duration="1000" data-aos-delay="400">
                    <table class="board_Wtable">
                        <colgroup>
                            <col width="15%" />
                            <col width="*" />
                        </colgroup>
                        <thead>
                            <tr class="boardW_title">
                                <th>제목</th>
                                <td>
                                    <div class="input-group">
                                        <div class="placeholder_Title_Big"
                                            style="display: inline-block; position: relative; vertical-align: middle; float: left;">
                                            <input type="text" id="placeholder" name="title" ref="inputTitle" autofocus
                                                style="height: 31px; line-height: 31px; width: 800px; padding: 0px 15px! important; box-sizing: border-box;" />
                                        </div>
                                        <span class="input-group-Big"
                                            style="vertical-align: middle; padding: 8px 10px; font-size: 13px; font-weight: 400; line-height: 1; color: #555; text-align: center; border-radius: 2px; float: left;">
                                            <label><input type="checkbox" name="hidden_yn" v-model="selectShowYn">
                                                &nbsp;비밀글</label>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr class="boardW_title">
                                <th>작성자</th>
                                <td>
                                    <div class="placeholder_Title_Big"
                                        style="display: inline-block; position: relative; vertical-align: middle; float: left;">
                                        <input type="text" id="placeholder" name="username" ref="inputUserName" autofocus
                                            style="height: 31px; line-height: 31px; width: 120px; padding: 0px 15px! important; box-sizing: border-box;" />
                                    </div>
                                </td>
                            </tr>
                            <tr class="boardW_title" id="passwd" v-if="selectShowYn">
                                <th>비밀번호</th>
                                <td>
                                    <div class=" placeholder_Title_Big"
                                        style="display: inline-block; position: relative; vertical-align: middle; float: left;">
                                        <input type="password" id="placeholder" name="passwd" ref="inputPassword" autofocus
                                            style="height: 31px; line-height: 31px; width: 120px; padding: 0px 15px! important; box-sizing: border-box;" />
                                    </div>
                                </td>
                            </tr>
                            <tr class="boardW_title">
                                <th>문의분야</th>
                                <td>
                                    <select class="select wp100" ref="selectCategory">
                                        <option value="000">개인레슨</option>
                                        <option value="100">그룹레슨</option>
                                        <option value="200">제휴문의</option>
                                    </select>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>문의내용</th>
                                <td colspan="2">
                                    <div class="userContent" style="margin:10px 0 20px;">
                                        <textarea name="ir1" ref="inputContent" id="ir1" style="width:100%; height:350px"></textarea>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <!-- <div class="input-group bottom_check">
                        <span class="input-group-addon cclyoung">
                        </span>
                        <div class="placeholder_box">
                            <label for="placeholder" style="top:4px;">?의 값을 입력하세요.</label>
                            <input type="text" id="placeholder" name="chk_text" style="height:25px;" />
                        </div>
                    </div> -->
                    <div class="boardW_btn">
                        <span class="back_btn"><a @click="regBoard">확인</a></span>
                        <span class="ok_btn"><a href="javascript:history.back();">취소</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>