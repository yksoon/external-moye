<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);

    // 카카오맵 실행 스크립트
    new daum.roughmap.Lander({
      "timestamp": "1698386125053",
      "key": "2gmmd",
      "mapHeight": "360"
    }).render();
});
</script>

<template>
    <!-- 오시는길 -->
    <div id="wrapper">
        <LeftMenu subvisual="subvisual_intro" page="location" />
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <div id="content">
                <div id="subtitle">
                    <h2>오시는길</h2>
                </div>
                <div class="map">
                    <!--* 카카오맵 - 지도퍼가기 -->
                    <!-- 1. 지도 노드 -->
                    <div id="daumRoughmapContainer1698386125053" class="root_daum_roughmap root_daum_roughmap_landing"
                        style="width: 100%;"></div>
                        
                    <p><img src="/img/web/sub/sub_logo_mini.png" alt=""></p>

                    <table>
                        <colgroup>
                            <col width="12%">
                            <col width="*">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>주소</th>
                                <td>서울특별시 강남구 역삼로 14길 11, 신화빌딩 4층</td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td>010-7424-9995층</td>
                            </tr>
                            <tr>
                                <th>E-mail</th>
                                <td>admin@mo-ye.com</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>