import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/components/web/Home.vue";
// import Admin from "@/components/admin/Admin.vue";
// import Consulting from "@/components/web/consulting/Consulting.vue";
// import QNAWrite from "@/components/web/consulting/QNAWrite.vue";
// import QNA from "@/components/web/consulting/QNA.vue";
// import Notices from "@/components/web/notice/Notices.vue";
// import Notice from "@/components/web/notice/Notice.vue";
// import PhotoGallery from "@/components/web/photo/PhotoGallery.vue";
// import Photo from "@/components/web/photo/Photo.vue";
// import MovieGallery from "@/components/web/movie/MovieGallery.vue";
// import Movie from "@/components/web/movie/Movie.vue";
// import Peoples from "@/components/web/peoples/Peoples.vue";
// import People from "@/components/web/peoples/People.vue";
import NotFound from "@/components/web/NotFound.vue";
// import Signin from "@/components/admin/Signin.vue";
// import TestPage from "@/components/admin/TestPage.vue";
import { routerPath } from "@/webPath";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // 페이지 url 라우팅 경로 추가시 routes에 작성
    routes: [
        {
            // 메인
            path: routerPath.web_main_url, // "/"
            name: "home",
            component: () => import("@/components/web/Home.vue"),
        },
        {
            // 공지사항
            path: routerPath.web_notice_url, // "/notice/notices"
            name: "notices",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("@/components/web/notice/Notices.vue"),
        },
        {
            // 공지사항 상세
            path: routerPath.web_notice_detail_url, // "/notice/notices/:notice"
            name: "notice",
            component: () => import("@/components/web/notice/Notice.vue"),
        },
        {
            // 상담문의 목록
            path: routerPath.web_consulting_url, // "/consulting/consulting"
            name: "consulting",
            component: () =>
                import("@/components/web/consulting/Consulting.vue"),
        },
        {
            // 상담문의 작성
            path: routerPath.web_consulting_write_url, // "/consulting/consulting/qnawrite"
            name: "qnawrite",
            component: () => import("@/components/web/consulting/QNAWrite.vue"),
        },
        {
            // 상담문의 상세
            path: routerPath.web_consulting_detail_url, // "/consulting/consulting/:qna"
            name: "qna",
            component: () => import("@/components/web/consulting/QNA.vue"),
        },
        {
            // 포토갤러리
            path: routerPath.web_photo_url, // "/photo/photoGallery"
            name: "photoGallery",
            component: () => import("@/components/web/photo/PhotoGallery.vue"),
        },
        {
            // 포토갤러리 상세
            path: routerPath.web_photo_detail_url, // "/photo/photoGallery/:photo"
            name: "photo",
            component: () => import("@/components/web/photo/Photo.vue"),
        },
        {
            // 영상갤러리
            path: routerPath.web_movie_url, // "/movie/movieGallery"
            name: "movieGallery",
            // component: MovieGallery,
            component: () => import("@/components/web/movie/MovieGallery.vue"),
        },
        {
            // 영상갤러리 상세
            path: routerPath.web_movie_detail_url, // "/movie/movieGallery/:movie"
            name: "movie",
            // component: Movie,
            component: () => import("@/components/web/movie/Movie.vue"),
        },
        {
            // 코치진
            path: routerPath.web_people_url, // "/peoples/peoples"
            name: "peoples",
            // component: Peoples,
            component: () => import("@/components/web/peoples/Peoples.vue"),
        },
        {
            // 코치진 상세
            path: routerPath.web_people_detail_url, // "/peoples/peoples/:people"
            name: "people",
            // component: People,
            component: () => import("@/components/web/peoples/People.vue"),
        },
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
