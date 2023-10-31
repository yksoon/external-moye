<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { routerPath } from "@/webPath";
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 예체능 시설 Promotion -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_business" page="promotion" />
            <div id="content">
                <div id="subtitle">
                    <h2>예체능 시설 Promotion</h2>
                </div>
                <div class="promotion">
                    <div class="img_wrap">
                        <p class="pink"><span>효과적인 홍보를 하고 싶다면 ?</span></p>
                        <p class="green"><span>전단지가 너무 비싸다면 ?</span></p>
                        <p class="blue"><span>양질의 코치를 원한다면 ?</span></p>
                    </div>
                    <h5>이러한 고민들을 모두의예체능이 해결해드립니다.</h5>
                    <a :href="routerPath.web_consulting_url" class="more_btn_blue"><span>입점문의</span></a>
                </div>
            </div>
        </div>
    </div>
</template>