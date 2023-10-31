<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";
import { categoriesModel } from "./130categoriesModel";

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
                    <!-- 대분류 -->
                    <div v-for="parent in categoriesModel" :class="parent.category_parent_name_en">
                        <div class="title">
                            <h4>{{ parent.category_parent_name_en.toUpperCase() }}</h4>
                            <span>{{ parent.category_parent_name_ko }}</span>
                        </div>
                        <div class="part">
                            <!-- 중분류 -->
                            <div v-for="child in parent.category_child_info">
                                <h5>{{ child.category_child_name_ko }} ({{ child.category_info.length }})</h5>
                                <div class="list">
                                    <!-- 카테고리 -->
                                    <p v-for="category in child.category_info">
                                        <img :src="`/img/web/sub/${category.file_path_enc}`" :alt="category.category_name_ko">
                                        <span>{{ category.category_name_ko }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>