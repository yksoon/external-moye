<script setup>
import {
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import { apiPath, routerPath } from '@/webPath';
import { useRoute } from "vue-router";
import LeftMenu from '@/components/web/common/LeftMenu.vue';

// ------------------- import End --------------------

const route = useRoute();

const searchKeyword = ref(null);
const state = reactive({
    categoryIdx: null,
    categoryList: [],
    peopleList: [],
    pageInfo: {},
});

const fileBaseUrl = apiPath.api_file;

// 페이지네이션의 total-visible를 동적으로 설정
const paginationTotalVisible = ref(7); // 기본 total-visible 값

// 페이지네이션 total-visible 값을 조절하는 함수
const adjustTotalVisible = () => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    paginationTotalVisible.value = mediaQuery.matches ? 3 : 7;
};

window.addEventListener('resize', adjustTotalVisible); // 창 크기 변경 감지

onMounted(() => {
    getCategoryList(1, 0, "");
    adjustTotalVisible(); // 페이지네이션 total-visible 초기 계산
});

// 카테고리 리스트 가져오기
const getCategoryList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/people/_categories
    // POST
    // 카테고리 목록
    const url = apiPath.api_admin_get_categories;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        category_div: "000"
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
            state.categoryList = result_info;
            state.categoryIdx = route.params.category;

            getPeopleList(1, maxRowNum.people, "");
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

// 인물 리스트 가져오기 (카테고리별)
const getPeopleList = (pageNum, pageSize, searchKeyword) => {
    // CommonSpinner(true);

    // /v1/_peoples
    // POST
    // 인물 목록
    const url = apiPath.api_admin_list_people;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        category_idx: route.params.category,
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
    CommonSpinner(true);
    const keyword = searchKeyword.value;

    getPeopleList(page_num, maxRowNum.people, keyword);
};

</script>

<template>
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_people" page="people" />
            <div id="content">
                <div id="subtitle">
                    <h2>코치진</h2>
                </div>
                <div>
                    <ul class="people_tab" v-if="state.categoryList.length">
                        <li>
                            <a :href="routerPath.web_peoples_url" :class="!state.categoryIdx ? 'on' : ''">전체</a>
                        </li>
                        <li v-for="category in state.categoryList">
                            <a :href="routerPath.web_peoples_url + '/' + category.category_idx"
                                :class="state.categoryIdx == category.category_idx ? 'on' : ''">
                                {{ category.category_name_ko }}
                            </a>
                        </li>
                    </ul>
                    <h3 class="people_title" v-if="state.categoryList.length">{{ state.categoryIdx ?
                        state.categoryList.filter((el) => el.category_idx == state.categoryIdx)[0].category_name_ko : '전체'
                    }}
                    </h3>
                    <div class="people_box" v-if="state.peopleList.length !== 0">
                        <div class="people" v-for="people in state.peopleList">
                            <a :href="`${routerPath.web_peoples_url}/people/${people.people_idx}`">
                                <div class="people_thumb">
                                    <!-- 프로필 이미지 있는 경우 -->
                                    <div v-if="people.file_path_enc" class="bg-thumb">
                                        <img :src="fileBaseUrl + people.file_path_enc" :alt="`${people.name_ko} 프로필이미지`" loading="lazy" />
                                    </div>
                                    <!-- 프로필 이미지 없을 경우 -->
                                    <div v-if="!people.file_path_enc" class="bg-thumb-noimg"></div>
                                    <div class="caption">
                                        <p>{{ people.subject }}</p>
                                        <div class="info">
                                            <p class="name">{{ people.name_ko }}</p>
                                            <span class="position">{{ people.category_parent_name_ko }} / {{
                                                people.category_child_name_ko }}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="pagenation" v-if="state.peopleList.length !== 0">
                        <v-pagination :length="state.pageInfo.pages" :total-visible="paginationTotalVisible" rounded="2"
                            v-model="state.pageInfo.page_num" @update:model-value="handleChange"></v-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>