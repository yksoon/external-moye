<template>
    <header>
        <router-link to="/"><img class="logoImage" src="@/assets/logo.png" alt="logo" /></router-link>
        <HeaderNav />
    </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue'

export default {
    name: 'GlobalHeader',
    components: {
        HeaderNav
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-around;
}
.logoImage {
    height: 50px;
}
</style>