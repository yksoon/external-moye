<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 인사말 -->
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_intro" page="greetings" />
            <div id="content">
                <div id="subtitle">
                    <h2>인사말</h2>
                </div>
                <div class="greetings">
                    <div class="face"><img src="/img/web/sub/ceo_photo.png" alt=""></div>
                    <div class="txt_box">
                        <h3>안녕하십니까? 모두의예체능 대표 안경현입니다.</h3>
                        <p>
                            20여년 간 야구 선수로 최선을 다하였고, 지금은 10여년 이상 야구 해설을 해왔습니다.<br>
                            그리고 현재는 한국 프로야구선수 은퇴선수 협회장을 맡고 있습니다.
                        </p>
                        <p>
                            야구 뿐만 아니라 산업 전반의 은퇴 선수들의 고충을 듣고, 보아왔습니다.<br>
                            산업의 unmet needs를 해결하고자, 모두의예체능을 창업하였고, 예체능 산업 전반을 체계적으로 통합하고 이를 서비스화 하는 일을 하고 있습니다.
                        </p>
                        <p>
                            모두의예체능 App 뿐만 아니라, 다양한 파트너들과 사업을 영위하고 있습니다.<br>
                            저희 사업에 관심이 있으신 분들과 항상 협력하고 있습니다.
                        </p>
                        <p>더 나은 예체능 산업 생태계를 구축하기 위해 노력하겠습니다.</p>
                        <div class="bottom">
                            예체능의 모든 것<br>
                            모두의예체능
                            <p class="name">대표 안경현 <span><img src="/img/web/sub/sign.png" alt=""></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>