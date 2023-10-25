<script setup>
import {
    CommonConsole,
    CommonErrModule,
    CommonModal,
    CommonNotify,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from '@/webPath';

// ------------------- import End --------------------

const searchKeyword = ref(null);
const state = reactive({
    historyList: [],
});

const fileBaseUrl = apiPath.api_file;

onMounted(() => {
    getHistoryList(1, maxRowNum.people, "");
});

// 연혁 리스트 가져오기
const getHistoryList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/_peoples
    // POST
    // 연혁 목록
    const url = apiPath.api_admin_list_people;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        show_yn: "Y"
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

            state.historyList = result_info;

            console.log(result_info);

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

</template>