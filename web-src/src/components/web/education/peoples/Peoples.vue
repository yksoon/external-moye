<script setup>
import {
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from '@/webPath';
import { useRoute } from "vue-router";
import LeftMenu from '@/components/web/common/LeftMenu.vue';

// ------------------- import End --------------------

const route = useRoute();

const categoryIdx = route.params.category;

const searchKeyword = ref(null);
const state = reactive({
    categoryList: [],
    peopleList: [],
    pageInfo: {},
});

const fileBaseUrl = apiPath.api_file;

onMounted(() => {
    // getCategoryList(1, maxRowNum.category, "");
    getPeopleList(1, maxRowNum.people, "");
});

// // 카테고리 리스트 가져오기
// const getCategoryList = (pageNum, pageSize, searchKeyword) => {
//     CommonSpinner(true);

//     // /v1/people/categories
//     // POST
//     // 카테고리 목록
//     const url = apiPath.api_admin_get_categories;
//     const data = {
//         page_num: pageNum,
//         page_size: pageSize,
//         search_keyword: searchKeyword,
//         // category_div: "000"
//     };

//     // 파라미터
//     const restParams = {
//         method: "post",
//         url: url,
//         data: data,
//         callback: (res) => responseLogic(res),
//         admin: "Y",
//     };
//     CommonRest(restParams);

//     // 완료 로직
//     const responseLogic = (res) => {
//         let result_code = res.headers.result_code;

//         // 성공
//         if (
//             result_code === successCode.success ||
//             result_code === successCode.noData
//         ) {
//             let result_info = res.data.result_info;

//             state.categoryList = result_info;

//             // if (state.categoryList.length) {
//             //     console.log(state.categoryList)
//             //     // for (let i = 0; i < state.categoryList.length; i++) {
//             //     //     getCategoryList(1, maxRowNum.people, "");
//             //     // }
//             // }

//             // CommonSpinner(false);
//         } else {
//             // 에러
//             CommonConsole("log", res);

//             // CommonSpinner(false);
//         }
//     };
// };

// 인물 리스트 가져오기 (카테고리별)
const getPeopleList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/_peoples
    // POST
    // 인물 목록
    const url = apiPath.api_admin_list_people;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        category_idx: categoryIdx,
        show_yn: "Y"
    };

    // 파라미터
    const restParams = {
        method: "post",
        url: url,
        data: data,
        callback: (res) => responseLogic(res),
        admin: "Y",
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
            let page_info = res.data.page_info;

            state.peopleList = result_info;
            state.pageInfo = page_info;

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

// 페이지네이션 이동
const handleChange = (page_num) => {
    const keyword = searchKeyword.value;

    // getPeopleList(page_num, maxRowNum.people, keyword);
};
</script>

<template>
    <div id="wrapper">
       <!-- 서브컨텐츠     //S-->
       <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_people" page="people"/>
            <div id="content">
                <div id="subtitle">
                    <h2>코치진</h2>
                </div>
                <aos-vue animation="fade-up" :duration="1000" :delay="400">
                    <ul class="people_tab">
                        <li><a href="">스포츠</a></li>
                        <li><a href="">음악</a></li>
                        <li><a href="">댄스/무용/바둑</a></li>
                        <li><a href="">팀/아카데미</a></li>
                    </ul>
                    <h3 class="people_title">스포츠</h3>
                    <div class="people_box" v-if="state.peopleList.length !== 0">
                        <div class="people" v-for="people in state.peopleList">
                            <a :href="`${routerPath.web_peoples_url}/${people.people_idx}`">
                                <div class="people_thumb">
                                    <div v-if="people.file_path_enc" class="bg-thumb" :style="`background-image:url('${fileBaseUrl}${people.file_path_enc}'); background-size:cover;`">
                                        <span></span>
                                    </div>
                                    <div v-else  class="bg-thumb"></div>
                                    <div class="caption">
                                        <p>{{people.subject}}</p>
                                        <div class="info">
                                            <p class="name">{{ people.name_ko }}</p>
                                            <span class="position">{{ people.category_parent_name_ko }} / {{ people.category_child_name_ko }}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div v-else style="display: flex; justify-content: center;">
                        <b> 데이터가 없습니다. </b>
                    </div>
                    <div
                        className="pagenation"
                        v-if="state.peopleList.length !== 0"
                    >
                        <v-pagination
                            :length="state.pageInfo.pages"
                            :total-visible="7"
                            rounded="2"
                            v-model="state.pageInfo.page_num"
                            @update:model-value="handleChange"
                        ></v-pagination>
                    </div>
                </aos-vue>
            </div>
        </div>
    </div>
</template>