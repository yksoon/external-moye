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
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { useRoute } from "vue-router";

// ------------------- import End --------------------

const route = useRoute();

const searchKeyword = ref(null);
const state = reactive({
    board: null,
});

const fileBaseUrl = apiPath.api_file;

// 상담문의 등록
const regBoard = () => {

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
                                            <input type="text" id="placeholder" name="title" value="" autofocus
                                                style="height: 31px; line-height: 31px; width: 800px; padding: 0px 15px! important; box-sizing: border-box;" />
                                        </div>
                                        <span class="input-group-Big"
                                            style="vertical-align: middle; padding: 8px 10px; font-size: 13px; font-weight: 400; line-height: 1; color: #555; text-align: center; border-radius: 2px; float: left;">
                                            <label><input type="checkbox" name="hidden_yn" value="Y">
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
                                        <input type="text" id="placeholder" name="username" value="" autofocus
                                            style="height: 31px; line-height: 31px; width: 120px; padding: 0px 15px! important; box-sizing: border-box;" />
                                    </div>
                                </td>
                            </tr>
                            <tr class="boardW_title" id="passwd">
                                <th>비밀번호</th>
                                <td>
                                    <div class=" placeholder_Title_Big"
                                        style="display: inline-block; position: relative; vertical-align: middle; float: left;">
                                        <input type="password" id="placeholder" name="passwd" value="" autofocus
                                            style="height: 31px; line-height: 31px; width: 120px; padding: 0px 15px! important; box-sizing: border-box;" />
                                    </div>
                                </td>
                            </tr>
                            <tr class="boardW_title">
                                <th>문의분야</th>
                                <td>
                                    <select class="select wp100">
                                        <option value="">개인레슨</option>
                                        <option value="">그룹레슨</option>
                                        <option value="">제휴문의</option>
                                    </select>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>문의내용</th>
                                <td colspan="2">
                                    <div class="userContent" style="margin:10px 0 20px;">
                                        <textarea name="ir1" id="ir1" style="width:100%; height:350px"></textarea>
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
                        <span class="back_btn"><a @click="readyAlert">확인</a></span>
                        <span class="ok_btn"><a href="javascript:history.back();">취소</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>