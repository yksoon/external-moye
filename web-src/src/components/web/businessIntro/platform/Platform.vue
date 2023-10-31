<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 플랫폼 서비스 -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_business" page="platform" />
            <div id="content">
                <div id="subtitle">
                    <h2>플랫폼 서비스</h2>
                </div>
                <div class="platform">
                    <div class="txt">
                        <h3>모두의예체능 APP</h3>
                        <p>
                            모두의예체능은 유저들이 플랫폼 안에서<br>
                            평소 관심있던 스포츠 종목의 레슨정보를 알아보고<br>
                            코칭 서비스를 더욱 생생하게 체험할 수 있으며,<br>
                            레전드 선수들의 숨겨진 노하우 및 피땀 가득한 승리의 유산을<br>
                            전수받고 메신저를 통해 소통 및 궁금한 점도 물어볼 수 있는<br>
                            어플리케이션 기반의 레슨매칭 플랫폼 입니다.
                        </p>
                        <a href="http://moye.hicompint.com/appIntro" class="more_btn_blue"><span>APP 소개 더보기</span></a>
                    </div>
                    <div>
                        <p><img src="/img/web/sub/platform_img01.png" alt=""></p>
                        <p><img src="/img/web/sub/platform_img02.png" alt=""></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>