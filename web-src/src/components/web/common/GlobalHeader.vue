<script setup>
import HeaderNav from './HeaderNav.vue';
</script>

<template>
    <header>
        <router-link to="/"><img class="logoImage" src="@/assets/logo.png" alt="logo" /></router-link>
        <HeaderNav />
    </header>
</template>


<style scoped>
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
}
.logoImage {
    height: 50px;
}
</style>