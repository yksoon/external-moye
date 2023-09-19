import Vue from 'vue';
import VueRouter from 'vue-router'; // 라우팅 라이브러리 호출 (Vue.js 공식 라우터)
import Home from '@/components/web/Home'; // 메인 컴포넌트 호출
import Notices from '@/components/web/notice/Notices'; // 공지사항 목록 컴포넌트 호출
import NotFound from '@/components/web/NotFound'; // 에러 컴포넌트 호출
import Admin from '@/components/admin/Admin'; // 관리자 메인 컴포넌트 호출
import { routerPath } from '@/webPath';

// [ 라우팅 경로 정의 페이지 ]

Vue.use(VueRouter); // VueRouter 사용 선언

// TODO: 메뉴 클릭시 재랜더링 되도록 상태값 변경 구현할 것 (강제 새로고침)

export default new VueRouter({
    mode: 'history', // history mode (url # 제거)
    routes: [ // 페이지 url 라우팅 추가 필요시 routes에 추가
        { // 메인
            path: routerPath.web_main_url, // "/"
            name: 'Home',
            component: Home
        },
        { // 공지사항
            path: routerPath.web_notice_url, // "/notice/notices"
            name: 'Notices',
            component: Notices
        },
        { // 관리자 메인
            path: routerPath.admin_main_url, // "/admin"
            name: 'Admin',
            component: Admin
        },
        { // 404
            path: '*', // 나머지 경로
            name: 'NotFound',
            component: NotFound
        }
    ],
});