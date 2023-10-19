<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { useRoute } from "vue-router";
</script>

<template>
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu page="consulting"/>
            <div style="display:flex; justify-content: center; align-items: center;">
                <img src="/img/common/prepare.jpg" alt="준비중입니다.">
            </div>
        </div>
    </div>
</template>