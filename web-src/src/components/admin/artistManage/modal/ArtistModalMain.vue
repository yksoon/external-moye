<script setup>
import { onMounted } from "vue";
import {
    CommonConsole,
    CommonErrModule,
    CommonModal,
    CommonNotify,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { apiPath } from "@/webPath";

// ------------------- import End --------------------

onMounted(() => {
    getCategories(1, 0);
});

const getCategories = (pageNum, pageSize) => {
    CommonSpinner(true);

    const url = apiPath.api_admin_get_categories;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
    };

    // 파라미터
    const restParams = {
        method: "post",
        url: url,
        data: data,
        callback: (res) => responsLogic(res),
        admin: "Y",
    };
    CommonRest(restParams);

    // 완료 로직
    const responsLogic = (res) => {
        let result_code = res.headers.result_code;

        // 성공
        if (
            result_code === successCode.success ||
            result_code === successCode.noData
        ) {
            let result_info = res.data.result_info;
            let page_info = res.data.page_info;

            // state.boardList = result_info;
            // state.pageInfo = page_info;

            console.log("1111111111", res);

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
    <div class="admin">
        <table class="table_bb">
            <colgroup>
                <col width="30%" />
                <col width="*" />
            </colgroup>
        </table>
    </div>
</template>
