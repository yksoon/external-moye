<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 사업분야 -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_business" page="category" />
            <div id="content">
                <div id="subtitle">
                    <h2>사업분야</h2>
                </div>
                <div class="category">


                </div>

            </div>
        </div>
    </div>
</template>