<script setup>
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
                    <h2>모두의예체능 App</h2>
                </div>
                <div style="height: 70vh; display: flex; justify-content: center; align-items: center;">
                    <h1 style="font-size: 2rem; font-weight: bold; color: #888;">준비중입니다.</h1>
                </div>
            </div>
        </div>
    </div>
</template>