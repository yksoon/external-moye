<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 파트너쉽 -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_partnership" page="partnership" />
            <div id="content">
                <div id="subtitle">
                    <h2>파트너쉽</h2>
                </div>
                <div class="partnership">
                    <div>
                        <h5 class="blue">기업<span>기업과 함께 하는 모두의 예체능</span></h5>
                        <div class="img_wrap">
                            <p>
                                <img src="/img/web/sub/partner_img01.png" alt="">
                                <span>웅진씽크빅 업무협약</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h5 class="pink">지자체<span>지자체와 함께 하는 모두의 예체능</span></h5>
                        <div class="img_wrap">
                            <p>
                                <img src="/img/web/sub/partner_img02.png" alt="">
                                <span>태백시청 업무협약</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/partner_img03.png" alt="">
                                <span>김포시청 업무협약</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h5 class="green">학교<span>학교와 함께 하는 모두의 예체능</span></h5>
                        <div class="img_wrap">
                            <p>
                                <img src="/img/web/sub/partner_img04.png" alt="">
                                <span>세인트폴 업무협약</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h5 class="gray">협회<span>협회와 함께 하는 모두의 예체능</span></h5>
                        <div class="img_wrap">
                            <p>
                                <img src="/img/web/sub/partner_img05.png" alt="">
                                <span>대한유소년 야구연맹 업무협약</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/partner_img06.png" alt="">
                                <span>(사)한국프로야구은퇴선수협회 업무협약</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/partner_img07.png" alt="">
                                <span>대한생활체육회 업무협약</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/partner_img08.png" alt="">
                                <span>서울시 야구소프트볼협회 업무협약</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>