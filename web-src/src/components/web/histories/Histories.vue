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
    historyTarget: [],
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
    const url = apiPath.api_admin_get_histories;
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

            // for (let i = 0; i < result_info.length; i++) {
            //     state.historyTarget.push(result_info[i].target_year);
            // }

            // console.log('hello', state.historyList[0].detail_info);

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

const historiesSort = (profile_info) => {
    const defaultHistory = profile_info;
    const defaultHistoryLength = defaultHistory.length;

    if (defaultHistory) {
        // for (let i = 0; i < defaultHistoryLength; i++) {
        //     if (
        //         state.historyTarget.filter(
        //             (el) =>
        //                 el.targetYear === defaultHistory[i].target_year
        //         ).length === 0
        //     ) {
        //         state.historyTarget = [
        //             ...state.historyTarget,
        //             { idx: i, targetYear: defaultHistory[i].target_year },
        //         ];
        //     }
        // }

        // for (let i = 0; i < defaultHistoryLength; i++) {
        //     if (
        //         state.historyTarget.filter(
        //             (el) =>
        //                 el.targetYear === defaultHistory[i].target_year
        //         ).length !== 0
        //     ) {
        //         const parentObj = state.profileSection.filter(
        //             (el) =>
        //                 el.sectionCode === defaultHistory[i].profile_type_cd
        //         )[0];
        //         const obj = {
        //             parentIdx: parentObj.idx,
        //             profileType: parentObj.sectionCode,
        //             profileContent: defaultHistory[i].profile_content,
        //             inputIdx: i + 1,
        //         };

        //         state.profileInfo = [...state.profileInfo, obj];
        //     }
        // }
    }
};

</script>

<template>
    <div>histories</div>
</template>