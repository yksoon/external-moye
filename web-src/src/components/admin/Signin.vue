<script>
import { onMounted, ref, toRaw } from "vue";
import { apiPath } from "@/webPath.js";
import { CommonErrModule, CommonRest } from "@/common/js/common.js";
import { useCodesStore } from "@/stores/codes";

export default {
    name: "Signin",
    setup() {
        const err = CommonErrModule();

        const codes = toRaw(useCodesStore().getCodes);

        onMounted(() => {
            console.log(codes);
        });

        return {
            // count: count,
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
</template>

<!-- import 시 동일하게 scoped 옵션이 적용되어 다른 컴포넌트에 영향 없는지 테스트 해보기 -->
<!-- 퍼블리싱 어떻게 적용하는게 좋을지 고민해보기 -->
<style scoped></style>
