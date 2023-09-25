<template>
    <nav id="nav">
        <RouterLink to='/'>Home</RouterLink>
        <RouterLink to='/notice/notices'>Notices</RouterLink>
        <RouterLink to='/admin'>Admin</RouterLink>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
import { routerPath } from '@/webPath';

export default {
    name: 'home'
}
</script>

<style scoped>
#nav ul, li {
    list-style: none;
}
#nav > ul {
    display: flex;
    text-align: left;
}
#nav a {
    color: #333;
    text-decoration: none;
}
#nav > ul > li > a {
    margin-left: 20px;
    font-weight: bold;
}
</style>