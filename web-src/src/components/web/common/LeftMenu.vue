<script setup>
import { routerPath } from '@/webPath';

const props = defineProps({
    page: String
});

const readyAlert = () => {
    alert('준비중입니다 :-)');
}
</script>

<template>
    <div>
        <div id="subvisual" class="subvisual">
            <div class="sub_txt">
                <h2 data-aos="fade-in" data-aos-duration="500">
                    고객센터
                </h2>
            </div>
        </div>
        <div id="leftmenu">
            <div id="lnb">
                <ul>
                    <li><a :href="routerPath.web_notice_url" :class="page === 'notice' ? 'on' : ''">공지사항</a></li>
                    <li><a @click="readyAlert">상담문의</a></li>
                    <li><a @click="readyAlert">회사소개서 다운로드</a></li>
                    <li><a :href="routerPath.web_photo_url" :class="page === 'photo' ? 'on' : ''">포토 갤러리</a></li>
                    <li><a :href="routerPath.web_movie_url" :class="page === 'movie' ? 'on' : ''">영상 갤러리</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>