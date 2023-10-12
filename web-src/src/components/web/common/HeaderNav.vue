<template>
    <div id="header_nav">
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/admin'>Admin</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { routerPath } from '@/webPath';
</script>

<style scoped>
#header_nav ul, li {
    list-style: none;
}
#header_nav > ul {
    display: flex;
    text-align: left;
}
#header_nav a {
    color: #333;
    text-decoration: none;
}
#header_nav > ul > li > a {
    margin-left: 20px;
    font-weight: bold;
}
</style>