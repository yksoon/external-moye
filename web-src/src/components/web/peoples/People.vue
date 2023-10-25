<script setup>
import {
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from "@/webPath";
import { useRoute } from "vue-router";

// ------------------- import End --------------------

const route = useRoute();

const state = reactive({
    people: null,
    profileSection: [],
    profileInfo: []
});

onMounted(() => {
    getPeopleDetail();
});

const fileBaseUrl = apiPath.api_file;

// 인물 상세 데이터 가져오기
const getPeopleDetail = () => {
    CommonSpinner(true);

    const peopleIdx = route.params.people;

    // /v1/_people/{people_idx}
    // GET
    // 인물 상세
    const url = apiPath.api_admin_detail_people + `/${peopleIdx}`;
    const data = {};

    // 파라미터
    const restParams = {
        method: "get",
        url: url,
        data: data,
        callback: (res) => responsLogic(res),
        admin: "Y"
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

            state.people = result_info;

            if (state.people.profile_info.length !== 0) {
                profileInfoSort(state.people.profile_info);
                // state.profileInfo = state.people.profile_info;
            }

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

const profileInfoSort = (profile_info) => {
    const defaultProfile = profile_info;
    const defaultProfileLength = defaultProfile.length;

    if (defaultProfile) {
        for (let i = 0; i < defaultProfileLength; i++) {
            if (
                state.profileSection.filter(
                    (el) =>
                        el.sectionCode === defaultProfile[i].profile_type_cd
                ).length === 0
            ) {
                state.profileSection = [
                    ...state.profileSection,
                    { idx: i, sectionCode: defaultProfile[i].profile_type_cd, sectionValue: defaultProfile[i].profile_type },
                ];
            }
        }

        for (let i = 0; i < defaultProfileLength; i++) {
            if (
                state.profileSection.filter(
                    (el) =>
                        el.sectionCode === defaultProfile[i].profile_type_cd
                ).length !== 0
            ) {
                const parentObj = state.profileSection.filter(
                    (el) =>
                        el.sectionCode === defaultProfile[i].profile_type_cd
                )[0];
                const obj = {
                    parentIdx: parentObj.idx,
                    profileType: parentObj.sectionCode,
                    profileContent: defaultProfile[i].profile_content,
                    inputIdx: i + 1,
                };

                state.profileInfo = [...state.profileInfo, obj];
            }
        }
    }
};

</script>

<template>
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <div id="content">
                <div id="subtitle">
                    <h2>코치진</h2>
                </div>
                <div class="p_detail_wrap" data-aos-duration="1000" data-aos-delay="400" v-if="state.people">
                    <!-- <h3 class="people_title">{{ state.people.category_parent_name_ko }}</h3> -->
                    <div class="p_detail">
                        <div class="detail_info">
                            <span class="deco">{{ state.people.name_ko }} </span>
                            <div class="thumb">
                                <img
                                    style="background-color:#eee;"
                                    :src="state.people.file_info.length !== 0 ? `${fileBaseUrl}${state.people.file_path_enc}` : '/img/web/sub/dafault_full.jpg'"
                                >
                            </div>
                            <div class="profile">
                                <div class="profile_top">
                                    <h5>{{ state.people.name_ko }}</h5>
                                    <div class="category">
                                        <span>{{ state.people.category_child_name_ko }}</span>
                                        <span>{{ state.people.people_type }}</span>
                                    </div>
                                </div>
                                <div class="about">
                                    <p v-if="state.people.birth"><span>생년월일</span>{{ state.people.birth }}</p>
                                    <p v-if="state.people.mobile"><span>연락처</span>{{ state.people.mobile }}</p>
                                    <p v-if="state.people.gender"><span>성별</span>{{ state.people.gender }}</p>
                                    <p v-if="state.people.email"><span>E-MAIL</span>{{ state.people.email }}</p>
                                    <p v-if="state.people.people_memo" class="full"><span>메모</span>{{ state.people.people_memo }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="detail_cv">
                            <div v-if="state.profileSection.length !== 0">
                                <div class="detail_cv_list" v-for="section in state.profileSection">
                                    <h6>{{ section.sectionValue }}</h6>
                                    <ul>
                                        <li v-if="state.profileInfo.filter((el) => el.parentIdx === section.idx).length !== 0"
                                            v-for="profile in state.profileInfo.filter((el) => el.parentIdx === section.idx
                                        )"
                                        >{{ profile.profileContent }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="board_btn_wrap">
                        <div class="">
                            <a :href="routerPath.web_people_url" class="detail_btn">목록으로 가기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>