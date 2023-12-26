<script setup>
import {
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { reactive, onMounted } from "vue";
import { apiPath } from "@/webPath";
import { useRoute } from "vue-router";

// ------------------- import End --------------------

const props = defineProps({
    popupIdx: Number,
});

const route = useRoute();
const popupIdx = route.params.popup;

const state = reactive({
    popup: null,
});

onMounted(() => {
    getPopupDetail();
});

// 팝업 상세 데이터 가져오기
const getPopupDetail = () => {
    CommonSpinner(true);

    // /v1/_popup/{popup_idx}
    // GET
    // 팝업 상세
    const url = apiPath.api_admin_detail_popup + `/${popupIdx}`;
    const data = {};

    // 파라미터
    const restParams = {
        method: "get",
        url: url,
        data: data,
        callback: (res) => responseLogic(res),
        admin: "Y"
    };
    CommonRest(restParams);

    // 완료 로직
    const responseLogic = (res) => {
        let result_code = res.headers.result_code;

        // 성공
        if (
            result_code === successCode.success ||
            result_code === successCode.noData
        ) {
            let result_info = res.data.result_info;

            state.popup = result_info;

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

// 쿠키 설정 함수
const setCookie = (name, value, days) => {
    const expires = new Date();

    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const closePopup = (popupIdx) => {
    // 사용자가 '24시간동안 보지 않기'를 클릭한 경우, 해당 팝업을 본 시각을 쿠키에 저장
    const currentTime = Date.now();
    setCookie(`popup_viewed_${popupIdx}`, currentTime, 1); // 쿠키에 1일 동안 저장
    window.close();
};

</script>

<template>
    <div class="popup">
        <table class="board_Vtable" v-if="state.popup">
            <colgroup>
                <col width="*">
            </colgroup>

            <tbody>
                <tr>
                    <td colspan=3>
                        <div class="board_content">
                            {{ state.popup.content }}
                        </div>
                    </td>
                </tr>
                <tr v-if="state.popup.option_24_hours_yn === 'Y'">
                    <td class="check">
                        <p class="popup">
                            <label>
                                <input type="checkbox" name="chk" value="Y" style="vertical-align:middle;"
                                    @click="closePopup(popupIdx)">
                                24시간 동안 열지 않기
                            </label>
                        </p>
                        <!-- <p class="popup"><label><input type="checkbox" name="chk" value="Y" 
                                        style="vertical-align:middle;"> 더 이상 보지 않기</label></p> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>
