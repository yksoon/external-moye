<script>
import { RouterView } from "vue-router";

import { onMounted } from "vue";
import { apiPath } from "@/webPath";
import { CommonErrModule, CommonRest, CommonConsole } from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { mapActions, mapState } from "pinia";
import { useCodesStore } from "@/stores/codes";
import { useResultCodeStore } from "@/stores/resultCode";

export default {
    name: "App",
    // components: [Alert, HeaderNav],
    setup() {
        const err = CommonErrModule();
        const codes = useCodesStore();
        const resultCode = useResultCodeStore();

        onMounted(() => {
            setInterval(getCodes, 3600000);
            setInterval(getResultCode, 3600000);
        });

        // codes
        const getCodes = () => {
            // /v1/_codes
            // POST
            const restParams = {
                method: "post",
                url: apiPath.api_codes,
                data: {},
                err: err,
                callback: (res) => responsLogic(res),
            };

            CommonRest(restParams);

            const responsLogic = (res) => {
                // console.log(res);

                const result_code = res.headers.result_code;
                // 성공
                if (result_code === successCode.success) {
                    const resultInfo = res.data.result_info;

                    codes.setCodes(resultInfo);
                } else {
                    // 에러
                    CommonConsole("log", res);
                    // setIsSpinner(false);
                }
            };
        };

        // resultCode
        const getResultCode = () => {
            // /v1/_codes
            // POST
            const restParams = {
                method: "get",
                url: apiPath.api_result,
                data: {},
                err: err,
                callback: (res) => responsLogic(res),
            };

            CommonRest(restParams);

            const responsLogic = (res) => {
                // console.log(res);

                const result_code = res.headers.result_code;
                // 성공
                if (result_code === successCode.success) {
                    const resultInfo = res.data.result_info;

                    resultCode.setResultCode(resultInfo);
                } else {
                    // 에러
                    CommonConsole("log", res);
                    // setIsSpinner(false);
                }
            };
        };
    },
};
</script>

<script setup>
import Alert from "@/common/js/Alert.vue";
import HeaderNav from "@/components/web/common/HeaderNav.vue";
</script>

<template>
    <div>
        <HeaderNav />
        <RouterView />
        <Alert />
    </div>
</template>

<style scoped></style>
