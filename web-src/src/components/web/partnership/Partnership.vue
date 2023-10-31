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
                    <h2>Partnership</h2>
                </div>
                <div class="map">

                </div>
            </div>
        </div>
    </div>
</template>