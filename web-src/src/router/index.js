import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/web/Home.vue";
import Admin from "@/components/admin/Admin.vue";
import Notices from "@/components/web/notice/Notices.vue";
import NotFound from "@/components/web/NotFound.vue";
import Signin from "@/components/admin/Signin.vue";
import TestPage from "@/components/admin/TestPage.vue";
import { routerPath } from "@/webPath";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // 페이지 url 라우팅 경로 추가시 routes에 작성
    routes: [
        {
            // 메인
            path: "/", // "/"
            name: "home",
            component: Home,
        },
        {
            // 공지사항
            path: routerPath.web_notice_url, // "/notice/notices"
            name: "notices",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Notices,
        },
        {
            // 관리자 메인
            path: routerPath.admin_main_url, // "/admin"
            name: "admin",
            component: Admin,
        },
        {
            // 관리자 로그인
            path: routerPath.admin_signin_url, // "/admin/signin"
            name: "signin",
            component: Signin,
        },
        {
            // 관리자 기능테스트
            path: "/admin/test-page", // "/admin/signin"
            name: "TestPage",
            component: TestPage,
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
