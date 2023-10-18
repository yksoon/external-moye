<script setup>
import { routerPath } from '@/webPath';

const props = defineProps({
    page: String
});
</script>

<template>
    <div id="leftmenu">
        <div id="lnb">
            <ul>
                <li><a :href="routerPath.web_notice_url" :class="page === 'notice' ? 'on' : ''">공지사항</a></li>
                <li><a href="">상담문의</a></li>
                <li><a href="">회사소개서 다운로드</a></li>
                <li><a :href="routerPath.web_photo_url" :class="page === 'photo' ? 'on' : ''">포토 갤러리</a></li>
                <li><a :href="routerPath.web_movie_url" :class="page === 'movie' ? 'on' : ''">영상 갤러리</a></li>
            </ul>
        </div>
    </div>
</template>