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
                <div class="growth">
                    <div class="graybox">
                        <h5>체험반 운영 및 성장 과정별 예체능 교육</h5>
                        <ul>
                            <li>Data 기반, 성장 속도 및 목적에 맞춰 맞춤형 클래스 제공</li>
                            <li>예체능 생활기록부 작성(학습 기록 데이터 누적) 통한 체계적 Career Path 제안</li>
                        </ul>
                        <p><img src="/img/web/sub/busi04_01.jpg" alt=""></p>
                    </div>
                    <div class="graybox">
                        <h5>예체능 생활기록부 제공 및 이력 관리</h5>
                        <ul>
                            <li>개인 생활기록부 발급</li>
                        </ul>
                        <span>예시)</span>
                        <table>
                            <colgroup>
                                <col width="13%">
                                <col width="*">
                                <col width="13%">
                                <col width="*">
                                <col width="13%">
                                <col width="*">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>OOO</td>
                                    <th>학년</th>
                                    <td>초등 3학년</td>
                                    <th>Month</th>
                                    <td>Sep. 2023</td>
                                </tr>
                                <tr>
                                    <th>학습 목표</th>
                                    <td colspan="3">농구의 대한 기본 지식 및 기본기 습득</td>
                                    <th>Basketball</th>
                                    <th>정재근 Coach</th>
                                </tr>
                                <tr>
                                    <th rowspan="3">학습 평가</th>
                                    <td>학습태도</td>
                                    <td class="circle">아주잘함</td>
                                    <td>잘함</td>
                                    <td>보통</td>
                                    <td>노력요함</td>
                                </tr>
                                <tr>
                                    <td>드리블 향상</td>
                                    <td>아주잘함</td>
                                    <td class="circle">잘함</td>
                                    <td>보통</td>
                                    <td>노력요함</td>
                                </tr>
                                <tr>
                                    <td>슈팅 향상</td>
                                    <td>아주잘함</td>
                                    <td class="circle">잘함</td>
                                    <td>보통</td>
                                    <td>노력요함</td>
                                </tr>
                                <tr>
                                    <th colspan="6" class="left">지도강사 의견</th>
                                </tr>
                                <tr>
                                    <td colspan="6" class="left">
                                        첫 수업부터 임하는 자세가 적극적이고 농구를 더 잘하기 위해 배우려는 의지도 강합니다. 드리블 및 슈팅은 아직 조금 부족한 부분도 있지만 수업 태도가
                                        좋아 실력이 금방 좋아질 것 같습니다.<br>
                                        이제 시작한 만큼 농구에 대한 기본기를 잘 잡아간다면 앞으로 배울 응용 동작 및 팀 플레이까지 더 발전 할 것 같습니다. 앞으로도 지금처럼 적극적으로
                                        수업에 임하면 좋을 것 같습니다.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div class="graybox">
                        <h5>진로 상담 및 멘토링</h5>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>