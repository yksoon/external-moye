<script setup>
import {
    CommonErrModule,
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { ref, reactive, onMounted } from "vue";
import { apiPath, routerPath } from "@/webPath";
import { useRoute } from "vue-router";
import VueCookies from 'vue-cookies';

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
            // let page_info = res.data.page_info;

            state.popup = result_info;

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

// function setCookie(name, value, expiredays){
//     //expiredays 일 후에 소멸되는 쿠키(name = value;)를 굽는다
//     let today = new Date();

//     today.setDate(today.getDate() + expiredays);
//     document.cookie = name + "=" + escape(value) + "; path=/; expires=" + today.toGMTString() + ";"
// }

// function notOpenToday() {
//     // 오늘하루는 그만 열도록 쿠키를 세팅한다.
//     setCookie(popupIdx, "no", 1);
//     window.close();
// }

// function notOpen() {
//     setCookie(popupIdx, "no", 1000);
//     window.close();
// }

</script>

<template>
<div id="wrapper">
    <div id="container" class="sub_container">
        <div>
            <table class="board_Vtable" v-if="state.popup">
                <colgroup>
                    <col width="*">
                </colgroup>
                <thead>
                    <tr>
                        <th colspan="3">{{ state.popup.title }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan=3>
                            <div class="board_content">
                                {{ state.popup.content }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<style scoped>
</style>
