<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 예정교육 -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_people" page="schedule" />
            <div id="content">
                <div id="subtitle">
                    <h2>예정교육</h2>
                </div>
                <div style="height: 70vh; display: flex; justify-content: center; align-items: center;">
                    <h1 style="font-size: 2rem; font-weight: bold; color: #888;">준비중입니다.</h1>
                </div>
            </div>
        </div>
    </div>
</template>