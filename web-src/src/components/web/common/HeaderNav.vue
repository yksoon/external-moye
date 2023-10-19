<script setup>
import { routerPath } from '@/webPath';

const readyAlert = () => {
    alert('준비중입니다 :-)');
}
</script>

<template>
    <div id="gnb">
        <ul>
            <li>
                <a @click="readyAlert">모두의예체능 소개</a>
                <div class="submenu">
                    <a @click="readyAlert">인사말</a>
                    <a @click="readyAlert">모두의 예체능 소개</a>
                    <a @click="readyAlert">조직 및 구성</a>
                    <a @click="readyAlert">연혁</a>
                    <a @click="readyAlert">CI</a>
                    <a @click="readyAlert">오시는길</a>
                </div>
            </li>
            <li>
                <a @click="readyAlert">사업소개</a>
                <div class="submenu">
                    <a @click="readyAlert">사업분야</a>
                    <a @click="readyAlert">플랫폼 서비스 </a>
                    <a @click="readyAlert">예체능 시설 Promotion</a>
                </div>
            </li>
            <li>
                <a :href="routerPath.web_people_url">교육서비스</a>
                <div class="submenu">
                    <a :href="routerPath.web_people_url">코치진</a>
                    <a @click="readyAlert">Class 130 Category</a>
                    <a @click="readyAlert">성장과정별 교육</a>
                    <a @click="readyAlert">예정교육</a>
                </div>
            </li>
            <li>
                <a @click="readyAlert">Partnership</a>
                <div class="submenu">
                    <a @click="readyAlert">파트너쉽</a>
                </div>
            </li>
            <li>
                <a @click="readyAlert">모두의예체능 APP</a>
                <div class="submenu">
                    <a @click="readyAlert">모두의예체능 APP</a>
                </div>
            </li>
            <li>
                <a :href="routerPath.web_notice_url">고객센터</a>
                <div class="submenu">
                    <a :href="routerPath.web_notice_url">공지사항</a>
                    <a @click="readyAlert">상담문의</a>
                    <a @click="readyAlert">회사소개서 다운로드</a>
                    <a :href="routerPath.web_photo_url">포토 갤러리</a>
                    <a :href="routerPath.web_movie_url">영상 갤러리</a>
                </div>
            </li>
        </ul>
    </div>
</template>