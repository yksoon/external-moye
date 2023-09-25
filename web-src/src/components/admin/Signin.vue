<script>
import { onMounted } from "vue";
import { apiPath } from "@/webPath.js";
import { CommonErrModule, CommonRest } from "@/common/js/common.js";

export default SigninComponent({
    name: "Signin",
    setup() {
        const err = CommonErrModule();

        onMounted(() => {
            getCodes();
        });

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
                console.log(res);

                const result_code = res.headers.result_code;
                // 성공
                if (result_code === successCode.success) {
                } else {
                    // 에러
                    // CommonConsole("log", res);
                    // setIsSpinner(false);
                }
            };
        };

        return {};
    },
});
</script>

<template>
    <h1>Signin Page</h1>
    <div></div>
</template>

<!-- import 시 동일하게 scoped 옵션이 적용되어 다른 컴포넌트에 영향 없는지 테스트 해보기 -->
<!-- 퍼블리싱 어떻게 적용하는게 좋을지 고민해보기 -->
<style scoped></style>
