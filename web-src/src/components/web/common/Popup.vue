<script setup>
import {
    CommonErrModule,
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { reactive, onMounted } from "vue";
import { apiPath, routerPath } from "@/webPath";
import { useRoute } from "vue-router";

// ------------------- import End --------------------

const route = useRoute();

const state = reactive({
    popup: null,
});

onMounted(() => {
    getPopupDetail();
});

// 팝업 상세 데이터 가져오기
const getPopupDetail = () => {
    CommonSpinner(true);

    const popupIdx = route.params.popup;

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
</script>

<template>
<div id="wrapper">
    <div id="container" class="sub_container">
        <div data-aos-duration="1000" data-aos-delay="400">
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
