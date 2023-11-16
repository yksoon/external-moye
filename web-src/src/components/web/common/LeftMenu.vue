<script setup>
import { apiPath, routerPath } from "@/webPath";

// ------------------- import End --------------------

const props = defineProps({
    page: String,
    subvisual: String
});

const companyFile = sessionStorage.getItem("companyFile");

const fileBaseUrl = apiPath.api_file;

const readyAlert = () => {
    event.returnValue = false;
    alert('준비중입니다.');
    return false;
};

const companyFileDownload = () => {
    if (companyFile) {
        window.location.href = fileBaseUrl + companyFile;
    } else {
        readyAlert();
    }
    return;
}

</script>

<template>
    <!-- 모두의예체능 소개 -->
    <div v-if="props.subvisual === 'subvisual_intro'">
        <div id="subvisual" class="subvisual_intro">
            <div class="sub_txt">
                <h2>
                    모두의예체능 소개
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_greetings_url" :class="page === 'greetings' ? 'on' : ''">인사말</a></li>
                    <li><a :href="routerPath.web_introduction_url" :class="page === 'introduction' ? 'on' : ''">모두의 예체능
                            소개</a></li>
                    <!-- <li><a :href="routerPath.web_members_url" :class="page === 'members' ? 'on' : ''">조직 및 구성</a></li> -->
                    <li><a :href="routerPath.web_histories_url" :class="page === 'histories' ? 'on' : ''">연혁</a></li>
                    <li><a :href="routerPath.web_ci_url" :class="page === 'ci' ? 'on' : ''">CI</a></li>
                    <li><a :href="routerPath.web_location_url" :class="page === 'location' ? 'on' : ''">오시는길</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 사업소개 -->
    <div v-if="props.subvisual === 'subvisual_business'">
        <div id="subvisual" class="subvisual_business">
            <div class="sub_txt">
                <h2>
                    사업소개
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_businessAreas_url" :class="page === 'category' ? 'on' : ''">사업분야</a>
                    </li>
                    <li><a :href="routerPath.web_platform_url" :class="page === 'platform' ? 'on' : ''">플랫폼 서비스
                            소개</a></li>
                    <li><a :href="routerPath.web_promotion_url" :class="page === 'promotion' ? 'on' : ''">예체능 시설
                            Promotion</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 교육서비스 -->
    <div v-if="props.subvisual === 'subvisual_people'">
        <div id="subvisual" class="subvisual_people">
            <div class="sub_txt">
                <h2>
                    교육서비스
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_peoples_url" :class="page === 'people' ? 'on' : ''">코치진</a></li>
                    <li><a :href="routerPath.web_categories_url" :class="page === 'class' ? 'on' : ''">Class 130
                            Category</a></li>
                    <li><a :href="routerPath.web_growthProcess_url" :class="page === 'growth' ? 'on' : ''">성장과정별 교육</a></li>
                    <li><a :href="routerPath.web_scheduledEducation_url" :class="page === 'schedule' ? 'on' : ''">예정교육</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 파트너쉽 -->
    <div v-if="props.subvisual === 'subvisual_partnership'">
        <div id="subvisual" class="subvisual_partnership">
            <div class="sub_txt">
                <h2>
                    Partnership
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_partnership_url" :class="page === 'partnership' ? 'on' : ''">파트너쉽</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 모두의예체능 -->
    <div v-if="props.subvisual === 'subvisual_app'">
        <div id="subvisual" class="subvisual_app">
            <div class="sub_txt">
                <h2>
                    모두의예체능 APP
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_appIntro_url" :class="page === 'app' ? 'on' : ''">모두의예체능 APP</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 고객센터 -->
    <div v-if="props.subvisual === 'subvisual_notice'">
        <div id="subvisual" class="subvisual_notice">
            <div class="sub_txt">
                <h2>
                    고객센터
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_notices_url" :class="page === 'notice' ? 'on' : ''">공지사항</a></li>
                    <li><a :href="routerPath.web_consulting_url" :class="page === 'consulting' ? 'on' : ''">상담문의</a></li>
                    <li><a @click="companyFileDownload">회사소개서 다운로드</a></li>
                    <li><a :href="routerPath.web_photoGallery_url" :class="page === 'photo' ? 'on' : ''">포토 갤러리</a></li>
                    <li><a :href="routerPath.web_movieGallery_url" :class="page === 'movie' ? 'on' : ''">영상 갤러리</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>