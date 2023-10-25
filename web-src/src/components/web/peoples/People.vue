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
                <div data-aos-duration="1000" data-aos-delay="400">
                    <v-container v-if="state.people">
                        <v-row dense>
                            <v-col cols="12">
                                <v-card color="#fff" theme="light">
                                  <div class="d-flex flex-no-wrap justify-space-around">
                                    <v-avatar class="ma-3" size="125" rounded="0">
                                        <v-img
                                            style="background-color:#eee;"
                                            :src="state.people.file_info.length !== 0 ? `${fileBaseUrl}${state.people.file_path_enc}` : ''"
                                        >
                                            <div>{{ state.people.category_parent_name_ko }}</div>
                                        </v-img>
                                    </v-avatar>
                                    <div>
                                        <v-card-title class="text-h5">{{ state.people.name_ko }}</v-card-title>
                                        <v-card-text>{{ state.people.category_child_name_ko }} / {{ state.people.people_type }}</v-card-text>
                                        <v-card-text>
                                            <div>생년월일 : {{ state.people.birth }}</div>
                                            <div>연락처 : {{ state.people.mobile }}</div>
                                            <div>성별 : {{ state.people.mobile }}</div>
                                            <div>E-MAIL : {{ state.people.mobile }}</div>
                                            <div>
                                                메모 <br/>
                                                {{ state.people.people_memo }}
                                            </div>
                                        </v-card-text>
                                    </div>
                                  </div>
                                </v-card>
                              </v-col>
                              <v-col cols="12" v-if="state.profileSection.length !== 0">
                                <v-card color="#fff" theme="light" v-for="section in state.profileSection">
                                    <div>{{ section.sectionValue }}</div>
                                    <ul v-if="state.profileInfo.filter((el) => el.parentIdx === section.idx).length !== 0" 
                                        v-for="profile in state.profileInfo.filter((el) => el.parentIdx === section.idx
                                    )">
                                        <li class="d-flex flex-no-wrap justify-space-around">
                                            <v-card-text>{{ profile.profileContent }}</v-card-text>
                                        </li>
                                    </ul>
                                </v-card>
                              </v-col>
                        </v-row>
                    </v-container>
                    <div class="board_btn_wrap">
                        <div class="boardW_btn">
                            <a :href="routerPath.web_people_url" class="back_btn">목록
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>