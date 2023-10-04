<script>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { apiPath } from "@/webPath";
import { CommonErrModule, CommonRest, CommonConsole } from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { useCodesStore } from "@/stores/codes";
import { useResultCodeStore } from "@/stores/resultCode";
import { useIpInfoStore } from "@/stores/ipInfo";
import { storeToRefs } from "pinia";
import axios from "axios";

import HeaderNav from "@/components/web/common/HeaderNav.vue";
import CommonAlert from "@/common/components/CommonAlert.vue";
import CommonConfirm from "@/common/components/CommonConfirm.vue";
import CommonSpinner from "@/common/components/CommonSpinner.vue";
import CommonModal from "@/common/components/CommonModal.vue";

export default {
    components: {
        CommonAlert,
        CommonConfirm,
        CommonSpinner,
        CommonModal,
    },
    name: "App",
    setup() {
        const err = CommonErrModule();
        const codes = useCodesStore();
        const resultCode = useResultCodeStore();
        const useIpInfo = useIpInfoStore();

        const { ipInfo } = storeToRefs(useIpInfo);

        onMounted(() => {
            if (ipInfo.value) {
                setInterval(getCodes(), 3600000);
                setInterval(getResultCode(), 3600000);
            } else {
                getIpInfo();
            }
        });

        const getIpInfo = async () => {
            let ip;

            await axios
                .get("https://geolocation-db.com/json/")
                .then((res) => {
                    // const ip = res.data.IPv4;
                    const getIp = () => {
                        return new Promise((resolve, reject) => {
                            const data = res.data.IPv4;
                            resolve(data);
                        });
                    };

                    getIp()
                        .then((resolvedData) => {
                            useIpInfo.setIpInfo(resolvedData);
                            sessionStorage.setItem("ipInfo", resolvedData);
                        })
                        .then(() => {
                            getCodes();
                            getResultCode();
                        });

                    // callback(ip);
                    // dispatch(set_ip_info(ip));
                })
                .catch((error) => {
                    ip = "";
                    useIpInfo.setIpInfo(ip);
                    sessionStorage.setItem("ipInfo", ip);
                    // callback(ip);
                    // dispatch(set_ip_info(ip));
                });
        };

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

<template>
    <div class="wrapper">
        <!-- <HeaderNav /> -->
        <RouterView />
        <CommonAlert />
        <CommonConfirm />
        <CommonSpinner />
        <CommonModal />
    </div>
</template>

<style scoped></style>
