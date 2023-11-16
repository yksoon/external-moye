<script setup>
import { ref } from "vue";
import { apiPath, routerPath } from "@/webPath";
import MobileNav from "@/components/web/common/MobileNav.vue";

// ------------------- import End --------------------

const fileBaseUrl = apiPath.api_file;

const companyFile = ref(sessionStorage.getItem("companyFile"));

const readyAlert = () => {
    event.returnValue = false;
    alert('준비중입니다.');
    return false;
};

const companyFileDownload = () => {
    if (companyFile.value) {
        window.location.href = fileBaseUrl + companyFile.value;
        return;
    } else {
        readyAlert();
    }
    return;
}
</script>

<template>
    <div>
        <!-- PC버전 Navigation -->
        <div id="gnb">
            <ul>
                <li>
                    <a :href="routerPath.web_greetings_url">모두의예체능 소개</a>
                    <div class="submenu">
                        <a :href="routerPath.web_greetings_url">인사말</a>
                        <a :href="routerPath.web_introduction_url">모두의 예체능 소개</a>
                        <!-- <a :href="routerPath.web_members_url">조직 및 구성</a> -->
                        <a :href="routerPath.web_histories_url">연혁</a>
                        <a :href="routerPath.web_ci_url">CI</a>
                        <a :href="routerPath.web_location_url">오시는길</a>
                    </div>
                </li>
                <li>
                    <a :href="routerPath.web_businessAreas_url">사업소개</a>
                    <div class="submenu">
                        <a :href="routerPath.web_businessAreas_url">사업분야</a>
                        <a :href="routerPath.web_platform_url">플랫폼 서비스 </a>
                        <a :href="routerPath.web_promotion_url">예체능 시설 Promotion</a>
                    </div>
                </li>
                <li>
                    <a :href="routerPath.web_peoples_url">교육서비스</a>
                    <div class="submenu">
                        <a :href="routerPath.web_peoples_url">코치진</a>
                        <a :href="routerPath.web_categories_url">Class 130 Category</a>
                        <a :href="routerPath.web_growthProcess_url">성장과정별 교육</a>
                        <a :href="routerPath.web_scheduledEducation_url">예정교육</a>
                    </div>
                </li>
                <li>
                    <a :href="routerPath.web_partnership_url">Partnership</a>
                    <div class="submenu">
                        <a :href="routerPath.web_partnership_url">파트너쉽</a>
                    </div>
                </li>
                <li>
                    <a :href="routerPath.web_appIntro_url">모두의예체능 APP</a>
                    <div class="submenu">
                        <a :href="routerPath.web_appIntro_url">모두의예체능 APP</a>
                    </div>
                </li>
                <li>
                    <a :href="routerPath.web_notices_url">고객센터</a>
                    <div class="submenu">
                        <a :href="routerPath.web_notices_url">공지사항</a>
                        <a :href="routerPath.web_consulting_url">상담문의</a>
                        <a @click="companyFileDownload">회사소개서 다운로드</a>
                        <a :href="routerPath.web_photoGallery_url">포토 갤러리</a>
                        <a :href="routerPath.web_movieGallery_url">영상 갤러리</a>
                    </div>
                </li>
            </ul>
        </div>
        <!-- Mobile버전 Navigation -->
        <MobileNav :companyFileHandler="companyFileDownload" />
    </div>
</template>
