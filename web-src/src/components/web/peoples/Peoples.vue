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
    peopleList: [],
    pageInfo: {},
});

const fileBaseUrl = apiPath.api_file;

onMounted(() => {
    getPeopleList(1, maxRowNum.people, "");
});

// 리스트 가져오기
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
            let page_info = res.data.page_info;

            state.peopleList = result_info;
            state.pageInfo = page_info;

            console.log(result_info);

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

    getPeopleList(page_num, maxRowNum.people, keyword);
};
</script>

<template>
    <div id="wrapper">
       <!-- 서브컨텐츠     //S-->
       <div id="container" class="sub_container">
            <LeftMenu page="people"/>
            <div id="content">
                <div id="subtitle">
                    <h2>코치진</h2>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <ul class="coach_tab">
                        <li><a href="">스포츠</a></li>
                        <li><a href="">음악</a></li>
                        <li><a href="">댄스/무용/바둑</a></li>
                        <li><a href="">팀/아카데미</a></li>
                    </ul>
                    <h3 class="coach_title">스포츠</h3>
                    <div class="coach_box" v-if="state.peopleList.length !== 0">
                        <div class="coach" v-for="people in state.peopleList">
                            <a :href="`${routerPath.web_people_url}/${people.people_idx}`">
                                <div class="coach_thumb">
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
                    <!-- <div class="paginate">
                        <ul class="page_btn">
                            <a href="#" class="direction"><img src="/img/common/page_Btn_02.jpg" alt="이전페이지"></a>
                            <strong>1</strong> <a href="#" class="direction"><img src="/img/common/page_Btn_03.jpg"
                                    alt="다음페이지"></a>
                        </ul>
                    </div> -->
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
                </div>
            </div>
        </div>
    </div>
</template>