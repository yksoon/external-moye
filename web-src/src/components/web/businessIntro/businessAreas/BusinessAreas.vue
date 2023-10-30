<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 사업분야 -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_business" page="category" />
            <div id="content">
                <div id="subtitle">
                    <h2>사업분야</h2>
                </div>
                <div class="category">
                    <div class="section side">
                        <div>
                            <h3>
                                <span>BUSINESS 01</span>
                                모두의예체능 APP
                            </h3>
                            <p>
                                출장 레슨, 스케줄링 시스템<br>
                                진로상담, 원포인트 레슨도 온라인 신청<br>
                                개인 연락처 공유 없이 앱내 메신저로 소통
                            </p>
                            <a href="" class="more_btn_blue"><span>APP 소개 더보기</span></a>
                        </div>
                        <div><img src="/img/web/sub/busi01_01.jpg" alt=""></div>
                    </div>
                    <div class="section">
                        <h3>
                            <span>BUSINESS 02</span>
                            지자체 연관사업
                        </h3>
                        <div class="box_wrap">
                            <p>
                                <img src="/img/web/sub/busi02_01.jpg" alt="">
                                <span>각종 스포츠대회<br>개최 및 지원</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi02_02.jpg" alt="">
                                <span>지역 예체능 행사<br>기획 및 운영 / 홍보 대행</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi02_03.jpg" alt="">
                                <span>지자체 교육/문화/관광<br>육성사업 활성화 제안 협력</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi02_04.jpg" alt="">
                                <span>지자체 이벤트 운영 기획</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi02_05.jpg" alt="">
                                <span>레전드 코치 파견</span>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>