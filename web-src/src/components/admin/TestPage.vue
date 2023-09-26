<script>
import { onMounted, ref, toRaw } from "vue";
import { apiPath } from "@/webPath.js";
import {
    CommonErrModule,
    CommonRest,
    CommonSpinner,
    CommonNotify,
} from "@/common/js/common.js";
import { useCodesStore } from "@/stores/codes";
// import { useAlertStore, useConfirmStore } from "@/stores/noti";
// import { useSpinnerStore } from "@/stores/spinner";

export default {
    name: "TestPage",
    setup() {
        const err = CommonErrModule();

        const codes = toRaw(useCodesStore().getCodes);
        // const codes = useCodesStore().getCodes;
        // const useAlert = useAlertStore();
        // const useConfirm = useConfirmStore();

        // const useSpinner = useSpinnerStore();

        onMounted(() => {
            console.log(codes);
        });

        const handelConfirmOpen = () => {
            const callbackLogic = () => {
                console.log("이제 이 로직을 실행합니다");
            };

            const params = {
                type: "confirm",
                title: "타이틀",
                message: "내용2222222",
                callback: () => callbackLogic(),
            };

            // useConfirm.setIsConfirmOpen(params);
            CommonNotify(params);
        };

        const handelAlertOpen = () => {
            const callbackLogic = () => {
                console.log("이제 이 로직을 실행합니다");
            };

            const params = {
                type: "alert",
                title: "알럿",
                message: "내용33333",
            };

            CommonNotify(params);
        };

        const handelSpinner = () => {
            CommonSpinner(true);
        };

        return {
            // count: count,
            // useAlert: useAlert,
            // useConfirm: useConfirm,
            handelConfirmOpen: () => handelConfirmOpen(),
            handelAlertOpen: () => handelAlertOpen(),
            handelSpinner: () => handelSpinner(),
        };
    },
};
</script>

<template>
    <div>
        <h1>Test Page</h1>
        <div>
            <a @click="handelAlertOpen">test Alert</a>
        </div>
        <div>
            <a @click="handelConfirmOpen">test Confirm</a>
        </div>
        <div>
            <a @click="handelSpinner">test Spinner</a>
        </div>
    </div>
</template>

<!-- import 시 동일하게 scoped 옵션이 적용되어 다른 컴포넌트에 영향 없는지 테스트 해보기 -->
<!-- 퍼블리싱 어떻게 적용하는게 좋을지 고민해보기 -->
<style scoped></style>
