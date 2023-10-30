<script setup>
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- Class 130 Category -->
    <div style="height: 70vh; display: flex; justify-content: center; align-items: center;">
        <h1 style="font-size: 2rem; font-weight: bold; color: #888;">준비중입니다.</h1>
    </div>
</template>