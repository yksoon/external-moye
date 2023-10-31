<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- Class 130 Category -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_people" page="class" />
            <div id="content">
                <div id="subtitle">
                    <h2>Class 130 Category</h2>
                </div>
                <div class="class">
                    <div class="sports">
                        <div class="title">
                            <h4>SPORTS</h4>
                            <span>스포츠</span>
                        </div>
                        <div class="list">
                            <div>
                                <h5>구기종목 (12)</h5>
                                <p>
                                    <img src="/img/web/sub/01_01_01.png" alt="">
                                    <span>축구</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>