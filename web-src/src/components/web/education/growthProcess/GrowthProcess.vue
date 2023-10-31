<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 성장과정별 교육 -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_people" page="growth" />
            <div id="content">
                <div id="subtitle">
                    <h2>성장과정별 교육</h2>
                </div>
                <div class="class">
                </div>
            </div>
        </div>
    </div>
</template>