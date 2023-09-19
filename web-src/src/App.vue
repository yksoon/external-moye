<template>
    <div id="app">
        <GlobalHeader />
        <div>{{ mode }}</div>
        <router-view></router-view>
        <GlobalFooter />
    </div>
</template>

<script>
import GlobalHeader from './components/web/common/GlobalHeader.vue'
import GlobalFooter from './components/web/common/GlobalFooter.vue'

export default {
    name: 'App',
    data: () => ({
        mode: "",
    }),
    components: {
        GlobalHeader,
        GlobalFooter
    },
    mounted() {
        this.mode = process.env.VUE_APP_MODE
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
