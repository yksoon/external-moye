<script setup>
import {
    CommonConsole,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { reactive, ref, onMounted } from "vue";
import { apiPath } from "@/webPath";
import { useRoute, useRouter } from "vue-router";
import LeftMenu from '@/components/web/common/LeftMenu.vue';

// ------------------- import End --------------------

const route = useRoute();
const router = useRouter();

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
        callback: (res) => responseLogic(res),
        admin: "Y"
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

const isValidValue = (value) => {
    if (value && value.length > 0 && value !== ' ' && value !== 'null') {
        return  true;
    }
    return false;
};

// const goBackOrHome = () => {
//     // 이전 페이지로 이동하려고 시도
//     // if (router && router.history && router.history.length > 1) {
//     //     router.back();
//     // } else {
//     //     // 이전 페이지가 없으면 메인 페이지로 이동
//     //     router.push({ name: "home" }); // home은 메인 페이지의 라우터 이름입니다. 실제로 사용하는 라우터 이름으로 변경해야 합니다.
//     // }
//     // console.log(router.back);

//     // 라우터 객체 초기화 대기
//     router.isReady().then(() => {
//         // router.history가 정의되었는지 확인
//         // if (router.history && router.history.length > 1) {
//         //     router.go(-1);
//         // } else {
//         //     router.push({ name: "home" }); // 실제 홈 페이지의 라우터 이름으로 변경 필요
//         // }
//         console.log(router.history);
//     });
// }

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
                <div class="p_detail_wrap" v-if="state.people">
                    <!-- <h3 class="people_title">{{ state.people.category_parent_name_ko }}</h3> -->
                    <div class="p_detail">
                        <div class="detail_info">
                            <span class="deco">MOYE</span>
                            <div class="thumb">
                                <img style="background-color:#eee;"
                                    :src="state.people.file_info.length ? `${fileBaseUrl}${state.people.file_info[0].file_path_enc}` : '/img/web/sub/default_full.jpg'">
                            </div>
                            <div class="profile">
                                <div class="profile_top">
                                    <h5>{{ state.people.name_ko }}</h5>
                                    <div class="category">
                                        <span>{{ state.people.category_child_name_ko }}</span>
                                        <span>{{ state.people.people_type }}</span>
                                    </div>
                                </div>
                                <p class="profile_en">
                                    <span v-if="state.people.name_cn">{{ state.people.name_cn }}</span>
                                    <span v-if="state.people.name_cn && state.people.name_en"> / </span>
                                    <span v-if="state.people.name_en">{{ state.people.name_en }}</span>
                                </p>
                                <div class="about">
                                    <p v-if="state.people.birth"><span>생년월일</span>{{ state.people.birth }}</p>
                                    <p v-if="isValidValue(state.people.mobile1) && isValidValue(state.people.mobile2) && isValidValue(state.people.mobile3)"><span>연락처</span>{{ state.people.mobile1 }}-{{ state.people.mobile2 }}-{{ state.people.mobile3 }}</p>
                                    <p v-if="state.people.gender"><span>성별</span>{{ state.people.gender }}</p>
                                    <p v-if="state.people.email"><span>E-MAIL</span>{{ state.people.email }}</p>
                                    <p v-if="state.people.people_memo" class="full"><span>메모</span>{{
                                        state.people.people_memo }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="detail_cv">
                            <!-- 프로필 없으면 보이게 -->
                            <span v-if="state.profileSection.length === 0" class="deco">{{ state.people.name_ko }} </span>
                            <div v-if="state.profileSection.length !== 0">
                                <div class="detail_cv_list" v-for="section in state.profileSection">
                                    <h6>{{ section.sectionValue }}</h6>
                                    <ul>
                                        <li v-if="state.profileInfo.filter((el) => el.parentIdx === section.idx).length !== 0"
                                            v-for="profile in state.profileInfo.filter((el) => el.parentIdx === section.idx
                                            )">{{ profile.profileContent }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="detail_btn_wrap">
                        <div class="">
                            <a @click="() => router.go(-1)" class="detail_btn">
                                목록으로 가기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>