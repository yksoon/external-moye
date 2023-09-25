<script>
import { onMounted, ref, toRaw } from "vue";
import { apiPath } from "@/webPath.js";
import { CommonErrModule, CommonRest } from "@/common/js/common.js";
import { useCodesStore } from "@/stores/codes";
import { useAlertStore } from "@/stores/noti";

export default {
    name: "Signin",
    setup() {
        const err = CommonErrModule();

        const codes = toRaw(useCodesStore().getCodes);
        const isActive = useAlertStore();

        onMounted(() => {
            // console.log(codes);
        });

        const handleAlert = (bool) => {
            isActive.setIsAlertOpen(bool);
        };

        return {
            // count: count,
            isActive: isActive,
            handleAlert,
        };
    },
};
</script>

<template>
    <h1>Signin Page</h1>
    <div>
        <span> ID : </span>
        <span>
            <input style="background-color: white" type="text" />
        </span>
    </div>
    <div>
        <span> PW : </span>
        <span>
            <input style="background-color: white" type="password" />
        </span>
    </div>
    <div>
        <a>Sign in</a>
    </div>
    <div>
        <a @click="handleAlert(true)">test Alert</a>
    </div>
    <div>
        <a @click="handleAlert(false)">close Alert</a>
    </div>
</template>

<!-- import 시 동일하게 scoped 옵션이 적용되어 다른 컴포넌트에 영향 없는지 테스트 해보기 -->
<!-- 퍼블리싱 어떻게 적용하는게 좋을지 고민해보기 -->
<style scoped></style>
