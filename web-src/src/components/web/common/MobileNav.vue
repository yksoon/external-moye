<script setup>
import { onMounted } from "vue";
import { routerPath } from "@/webPath";
import $ from "jquery";

const props = defineProps({
    companyBoard: String,
});

onMounted(() => {
    $("#nav").hide();
    $(".nav_2depth").hide();
});

const menuClick = () => {
    $("#nav").slideToggle();
};

const menuDepth = (e) => {
    e.preventDefault();
    $(".nav_2depth").not($(e.target).siblings(".nav_2depth")).slideUp();
    $(e.target).siblings(".nav_2depth").slideToggle();
};

const readyAlert = () => {
    alert("준비중입니다 :-)");
};
</script>

<template>
    <div id="top_right">
        <div id="menu-icon2" class="all_menu" @click="(e) => menuClick(e)">
            <img src="/img/web/main/nav.png" alt="">
        </div>
        <div id="nav">
            <ul>
                <li>
                    <a :href="routerPath.web_greetings_url" id="nav1" @click="(e) => { menuDepth(e); e.preventDefault(); }">
                        모두의예체능 소개
                    </a>
                    <div class="submenu nav_2depth" id="nav1_s">
                        <a :href="routerPath.web_greetings_url">인사말</a>
                        <a :href="routerPath.web_introduction_url">모두의 예체능 소개</a>
                        <a :href="routerPath.web_members_url">조직 및 구성</a>
                        <a :href="routerPath.web_histories_url">연혁</a>
                        <a :href="routerPath.web_ci_url">CI</a>
                        <a :href="routerPath.web_location_url">오시는길</a>
                    </div>
                </li>
                <li>
                    <a :href="routerPath.web_businessAreas_url" id="nav2" @click="(e) => { menuDepth(e); e.preventDefault(); }">
                        사업소개
                    </a>
                    <div class="submenu nav_2depth" id="nav2_s">
                        <a :href="routerPath.web_businessAreas_url">사업분야</a>
                        <a :href="routerPath.web_platform_url">플랫폼 서비스 </a>
                        <a :href="routerPath.web_promotion_url">예체능 시설 Promotion</a>
                    </div>
                </li>
                <li>
                    <a :href="routerPath.web_peoples_url" id="nav3" @click="(e) => { menuDepth(e); e.preventDefault(); }">
                        교육서비스
                    </a>
                    <div class="submenu nav_2depth" id="nav3_s">
                        <a :href="routerPath.web_peoples_url">코치진</a>
                        <a :href="routerPath.web_categories_url">Class 130 Category</a>
                        <a :href="routerPath.web_growthProcess_url">성장과정별 교육</a>
                        <a :href="routerPath.web_scheduledEducation_url">예정교육</a>
                    </div>
                </li>
                <li>
                    <a :href="routerPath.web_partnership_url" id="nav4"
                        @click="(e) => { menuDepth(e); e.preventDefault(); }">
                        Partnership
                    </a>
                    <div class="submenu nav_2depth" id="nav4_s">
                        <a :href="routerPath.web_partnership_url">파트너쉽</a>
                    </div>
                </li>
                <li>
                    <a :href="routerPath.web_appIntro_url" id="nav5" @click="(e) => { menuDepth(e); e.preventDefault(); }">
                        모두의예체능 APP
                    </a>
                    <div class="submenu nav_2depth" id="nav5_s">
                        <a :href="routerPath.web_appIntro_url">모두의예체능 APP</a>
                    </div>
                </li>
                <li>
                    <a :href="routerPath.web_notices_url" id="nav6" @click="(e) => { menuDepth(e); e.preventDefault(); }">
                        고객센터
                    </a>
                    <div class="submenu nav_2depth" id="nav6_s">
                        <a :href="routerPath.web_notices_url">공지사항</a>
                        <a :href="routerPath.web_consulting_url">상담문의</a>
                        <a v-if="props.companyBoard" :href="companyBoard">회사소개서 다운로드</a>
                        <a v-if="!props.companyBoard" @click="readyAlert">회사소개서 다운로드</a>
                        <a :href="routerPath.web_photoGallery_url">포토 갤러리</a>
                        <a :href="routerPath.web_movieGallery_url">영상 갤러리</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>