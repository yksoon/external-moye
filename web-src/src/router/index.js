import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/web/Home.vue'
import AdminView from '@/views/AdminView.vue'
import Notices from '@/components/web/notice/Notices.vue'
import NotFound from '@/components/web/NotFound.vue'
import { routerPath } from '@/webPath'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 페이지 url 라우팅 경로 추가시 routes에 작성
  routes: [
    { // 메인
      path: routerPath.web_main_url, // "/"
      name: 'home',
      component: Home
    },
    { // 공지사항
      path: routerPath.web_notice_url, // "/notice/notices"
      name: 'notices',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Notices
    },
    { // 관리자 메인
      path: routerPath.admin_main_url, // "/admin"
      name: 'admin',
      component: AdminView
    },
    { // 404
      path: '*',
      name: 'not_found',
      component: NotFound
    }
  ]
})

export default router
