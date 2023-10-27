<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
</script>

<template>
    <!-- CI -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_intro" page="ci" />
            <div id="content">
                <div id="subtitle">
                    <h2>CI</h2>
                </div>
                <div class="ci">
                    <h3>로고</h3>
                    <div class="box">
                        <img src="/img/web/sub/sub_logo01.png" alt="">
                        <img src="/img/web/sub/sub_logo02.png" alt="">
                        <img src="/img/web/sub/sub_logo03.png" alt="">
                    </div>

                    <h3>컬러</h3>
                    <div class="box">
                        <img src="/img/web/sub/ci_color.png" alt="">
                    </div>
                </div>
                <p><img src="/img/web/sub/ci_img.png" alt=""></p>
            </div>

            <!--footer //S-->
            <div id="footer"></div>
            <!-- footer //E-->

        </div>
    </div>
</template>