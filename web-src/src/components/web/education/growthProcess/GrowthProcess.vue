<script setup>
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 성장과정별 교육 -->
    <div style="height: 70vh; display: flex; justify-content: center; align-items: center;">
        <h1 style="font-size: 2rem; font-weight: bold; color: #888;">준비중입니다.</h1>
    </div>
</template>