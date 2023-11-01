<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 모두의예체능 App -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_app" page="app" />
            <div id="content">
                <div id="subtitle">
                    <h2>모두의예체능 APP</h2>
                </div>
                <div class="app">
                    <div class="banner">
                        <div class="background">
                            <div class="info">
                                <h3>전국민이 열광했던 레전드의<br>피땀 가득한 노하우를 전수 받는 순간</h3>
                                <p>모두의예체능 APP DOWNLOAD</p>
                                <a href="https://apps.apple.com/kr/app/%EB%AA%A8%EB%91%90%EC%9D%98-%EC%98%88%EC%B2%B4%EB%8A%A5/id6444301085"
                                    class="apple" target="_blank"></a>
                                <a href="https://play.google.com/store/search?q=%EB%AA%A8%EB%91%90%EC%9D%98%EC%98%88%EC%B2%B4%EB%8A%A5&c=apps&hl=ko-KR"
                                    class="google" target="_blank"></a>
                            </div>
                            <div class="img">
                                <img src="/img/web/sub/mobile01.png" alt="">
                                <img src="/img/web/sub/mobile02.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <h4>레전드 코치들에게 직접 배우는 레슨</h4>
                        <div class="img_wrap">
                            <p>
                                <img src="/img/web/sub/app_img01.png" alt="">
                                <span>우지원(농구)</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/app_img02.png" alt="">
                                <span>박희정(골프)</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/app_img03.png" alt="">
                                <span>신혜숙(피겨) *김연아 선수 스승님</span>
                            </p>
                        </div>
                    </div>

                    <div class="section">
                        <h4>나에게 최적화 된 맞춤형 레슨</h4>
                        <div class="graybox_wrap">
                            <div class="graybox">
                                <h5>1대1 코칭</h5>
                                <img src="/img/web/sub/app_icon01.png" alt="">
                            </div>
                            <div class="graybox">
                                <h5>영상분석</h5>
                                <img src="/img/web/sub/app_icon02.png" alt="">
                            </div>
                        </div>
                        <div class="img_wrap">
                            <p>
                                <img src="/img/web/sub/app_img04.png" alt="">
                            </p>
                            <p>
                                <img src="/img/web/sub/app_img05.png" alt="">
                            </p>
                            <p>
                                <img src="/img/web/sub/app_img06.png" alt="">
                            </p>
                        </div>
                    </div>

                    <div class="section">
                        <h4>모이면 더욱 경제적인 레슨비용<span>* 아래 가격은 예시입니다.</span></h4>
                        <div class="graybox_wrap">
                            <div class="graybox">
                                <h5>8인<span>3만 3천원</span></h5>
                                <img src="/img/web/sub/app_icon03.png" alt="">
                            </div>
                            <div class="graybox">
                                <h5>12인 <span>2만 6천원</span></h5>
                                <img src="/img/web/sub/app_icon04.png" alt="">
                            </div>
                        </div>
                        <div class="img_wrap">
                            <p>
                                <img src="/img/web/sub/app_img07.png" alt="">
                            </p>
                            <p>
                                <img src="/img/web/sub/app_img08.png" alt="">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>