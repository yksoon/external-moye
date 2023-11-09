import { createRouter, createWebHistory } from "vue-router";
import { routerPath } from "@/webPath";
// Layouts
import MainLayout from '@/layouts/MainLayout.vue';
// Pages
import Home from "@/components/web/Home.vue";
import NotFound from "@/components/web/NotFound.vue";

const router = new VueRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    mode: 'history',
    // 페이지 url 라우팅 경로 추가시 routes에 작성
    routes: [
        // ------------------- 사용자페이지 --------------------
        {
            // 메인
            path: routerPath.web_main_url, // "/"
            name: "home",
            // component: () => import("@/components/web/Home.vue"),
            component: Home,
            meta: { layout: MainLayout },
        },
        {
            // 메인페이지 팝업창
            path: routerPath.web_popup_detail_url, // "/popup/:popup"
            name: "popup",
            component: () => import("@/components/web/common/Popup.vue"),
        },
        // ------------------- 모두의예체능 소개 --------------------
        {
            // 인사말
            path: routerPath.web_greetings_url, // "/moyeIntro/greetings"
            name: "greetings",
            component: () => import("@/components/web/moyeIntro/greetings/Greetings.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 모두의예체능 소개
            path: routerPath.web_introduction_url, // "/moyeIntro/introduction"
            name: "introduction",
            component: () => import("@/components/web/moyeIntro/introduction/Introduction.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 조직 및 구성
            path: routerPath.web_members_url, // "/moyeIntro/members"
            name: "members",
            component: () => import("@/components/web/moyeIntro/members/Members.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 연혁
            path: routerPath.web_histories_url, // "/moyeIntro/histories"
            name: "histories",
            component: () => import("@/components/web/moyeIntro/histories/Histories.vue"),
            meta: { layout: MainLayout },
        },
        {
            // CI
            path: routerPath.web_ci_url, // "/moyeIntro/ci"
            name: "ci",
            component: () => import("@/components/web/moyeIntro/ci/CI.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 오시는길
            path: routerPath.web_location_url, // "/moyeIntro/location"
            name: "location",
            component: () => import("@/components/web/moyeIntro/location/Location.vue"),
            meta: { layout: MainLayout },
        },
        // ------------------- 사업 소개 --------------------
        {
            // 사업분야
            path: routerPath.web_businessAreas_url, // "/businessIntro/businessAreas"
            name: "businessAreas",
            component: () => import("@/components/web/businessIntro/businessAreas/BusinessAreas.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 플랫폼서비스
            path: routerPath.web_platform_url, // "/businessIntro/platform"
            name: "platform",
            component: () => import("@/components/web/businessIntro/platform/Platform.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 예체능 시설 Promotion
            path: routerPath.web_promotion_url, // "/businessIntro/promotion"
            name: "promotion",
            component: () => import("@/components/web/businessIntro/promotion/Promotion.vue"),
            meta: { layout: MainLayout },
        },
        // ------------------- 교육서비스 --------------------
        {
            // 코치진 (카테고리 파라미터 없을 경우 첫번째 카테고리 목록)
            path: routerPath.web_peoples_url, // "/education/peoples"
            name: "peoples",
            component: () => import("@/components/web/education/peoples/Peoples.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 코치진 카테고리별
            path: routerPath.web_peoples_byCategory_url, // "/education/peoples/:category"
            name: "peoplesbycategory",
            component: () => import("@/components/web/education/peoples/Peoples.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 코치진 상세
            path: routerPath.web_people_detail_url, // "/education/peoples/people/:people"
            name: "people",
            component: () => import("@/components/web/education/peoples/People.vue"),
            meta: { layout: MainLayout },
        },
        {
            // Class 130 Category
            path: routerPath.web_categories_url, // "/education/categories"
            name: "categories",
            component: () => import("@/components/web/education/categories/Categories.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 성장과정별 교육
            path: routerPath.web_growthProcess_url, // "/education/growthProcess"
            name: "growthProcess",
            component: () => import("@/components/web/education/growthProcess/GrowthProcess.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 예정교육
            path: routerPath.web_scheduledEducation_url, // "/education/scheduledEducation"
            name: "scheduledEducation",
            component: () => import("@/components/web/education/scheduledEducation/ScheduledEducation.vue"),
            meta: { layout: MainLayout },
        },
        // ------------------- 파트너쉽 --------------------
        {
            // 파트너쉽
            path: routerPath.web_partnership_url, // "/partnership"
            name: "partnership",
            component: () => import("@/components/web/partnership/Partnership.vue"),
            meta: { layout: MainLayout },
        },
        // ------------------- 모두의예체능 APP --------------------
        {
            // 모두의예체능 APP
            path: routerPath.web_appIntro_url, // "/appIntro"
            name: "appIntro",
            component: () => import("@/components/web/appIntro/AppIntro.vue"),
            meta: { layout: MainLayout },
        },
        // ------------------- 고객센터 --------------------
        {
            // 공지사항
            path: routerPath.web_notices_url, // "/support/notices"
            name: "notices",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("@/components/web/support/notices/Notices.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 공지사항 상세
            path: routerPath.web_notice_detail_url, // "/support/notices/:notice"
            name: "notice",
            component: () => import("@/components/web/support/notices/Notice.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 상담문의
            path: routerPath.web_consulting_url, // "/support/consulting"
            name: "consulting",
            component: () => import("@/components/web/support/consulting/Consulting.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 상담문의 작성
            path: routerPath.web_consulting_write_url, // "/support/consulting/qnawrite"
            name: "qnawrite",
            component: () => import("@/components/web/support/consulting/QNAWrite.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 상담문의 상세
            path: routerPath.web_consulting_detail_url, // "/support/consulting/:qna"
            name: "qna",
            component: () => import("@/components/web/support/consulting/QNA.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 포토갤러리
            path: routerPath.web_photoGallery_url, // "/support/photoGallery"
            name: "photoGallery",
            component: () => import("@/components/web/support/photoGallery/PhotoGallery.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 포토갤러리 상세
            path: routerPath.web_photo_detail_url, // "/support/photoGallery/:photo"
            name: "photo",
            component: () => import("@/components/web/support/photoGallery/Photo.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 영상갤러리
            path: routerPath.web_movieGallery_url, // "/support/movieGallery"
            name: "movieGallery",
            // component: MovieGallery,
            component: () => import("@/components/web/support/movieGallery/MovieGallery.vue"),
            meta: { layout: MainLayout },
        },
        {
            // 영상갤러리 상세
            path: routerPath.web_movie_detail_url, // "/support/movieGallery/:movie"
            name: "movie",
            // component: Movie,
            component: () => import("@/components/web/support/movieGallery/Movie.vue"),
            meta: { layout: MainLayout },
        },
        // ------------------- 관리자페이지 --------------------
        {
            // 관리자 메인
            path: routerPath.admin_main_url, // "/admin"
            name: "admin",
            component: () => import("@/components/admin/Admin.vue"),
        },
        {
            // 관리자 로그인
            path: routerPath.admin_signin_url, // "/admin/signin"
            name: "signin",
            component: () => import("@/components/admin/Signin.vue"),
        },
        {
            // 404
            // vue-router 4버전부터는 나머지 경로를 "/:catchAll(.*)" 로 잡아줘야 에러가 안남
            path: "/:catchAll(.*)",
            name: "notFound",
            component: NotFound,
        },
    ],
});

export default router;
