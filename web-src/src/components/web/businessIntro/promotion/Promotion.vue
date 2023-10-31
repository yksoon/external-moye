<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
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
                        <p><img src="/img/web/sub/promotion_img01.png" alt=""></p>
                        <p><img src="/img/web/sub/promotion_img02.png" alt=""></p>
                        <p><img src="/img/web/sub/promotion_img03.png" alt=""></p>
                    </div>
                    <h5>이러한 고민들을 모두의예체능이 해결해드립니다.</h5>
                    <a href="" class="more_btn_blue"><span>입점문의</span></a>
                </div>
            </div>
        </div>
    </div>
</template>