<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { CommonSpinner } from '@/common/js/common';
import { routerPath } from "@/webPath";
import { onMounted } from "vue";

onMounted(() => {
    CommonSpinner(false);
});
</script>

<template>
    <!-- 사업분야 -->
    <div id="wrapper">
        <!-- 서브컨텐츠 //S-->
        <div id="container" class="sub_container">
            <LeftMenu subvisual="subvisual_business" page="category" />
            <div id="content">
                <div id="subtitle">
                    <h2>사업분야</h2>
                </div>
                <div class="category">
                    <div class="section side">
                        <div>
                            <h3>
                                <span>BUSINESS 01</span>
                                모두의예체능 APP
                            </h3>
                            <p>
                                출장 레슨, 스케줄링 시스템<br>
                                진로상담, 원포인트 레슨도 온라인 신청<br>
                                개인 연락처 공유 없이 앱내 메신저로 소통
                            </p>
                            <a :href="routerPath.web_appIntro_url" class="more_btn_blue"><span>APP 소개 더보기</span></a>
                        </div>
                        <div><img src="/img/web/sub/busi01_01.jpg" alt=""></div>
                    </div>
                    <div class="section">
                        <h3>
                            <span>BUSINESS 02</span>
                            지자체 연관사업
                        </h3>
                        <div class="box_wrap">
                            <p>
                                <img src="/img/web/sub/busi02_01.jpg" alt="">
                                <span>각종 스포츠대회<br>개최 및 지원</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi02_02.jpg" alt="">
                                <span>지역 예체능 행사<br>기획 및 운영 / 홍보 대행</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi02_03.jpg" alt="">
                                <span>지자체 교육/문화/관광<br>육성사업 활성화 제안 협력</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi02_04.jpg" alt="">
                                <span>지자체 이벤트 운영 기획</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi02_05.jpg" alt="">
                                <span>레전드 코치 파견</span>
                            </p>
                        </div>
                    </div>
                    <div class="section">
                        <h3>
                            <span>BUSINESS 03</span>
                            기업체 연관사업
                        </h3>
                        <div class="box_wrap">
                            <p>
                                <img src="/img/web/sub/busi03_01.jpg" alt="">
                                <span>예체능 교육 컨텐츠<br>공동 제작</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi03_02.jpg" alt="">
                                <span>기업체 복지몰 내 예체능<br>교육 컨텐츠 입점 판매 </span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi03_03.jpg" alt="">
                                <span>기업체 임직원 대상<br>레전드 코치 강연</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi03_04.jpg" alt="">
                                <span>기업체 임직원 및 임직원 자녀 대상<br>맞춤형 예체능 레슨 솔루션 제공</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi03_05.jpg" alt="">
                                <span>기업체 행사 운영 기획<br>및 레전드 코치 파견 </span>
                            </p>
                        </div>
                    </div>
                    <div class="section">
                        <h3>
                            <span>BUSINESS 04</span>
                            학교 연관사업
                        </h3>
                        <div class="graybox_wrap">
                            <div class="half">
                                <div class="graybox">
                                    <h5>맞춤형 방과후 교실</h5>
                                    <ul>
                                        <li>학교 수요에 맞춰 교육 과정 기획</li>
                                        <li>적합한 코치 선정</li>
                                    </ul>
                                </div>
                                <div class="graybox ">
                                    <h5>진로 상담 및 멘토링</h5>
                                </div>
                            </div>
                            <div class="graybox">
                                <h5>체험반 운영 및 성장 과정별 예체능 교육</h5>
                                <ul>
                                    <li>Data 기반, 성장 속도 및 목적에 맞춰 맞춤형 클래스 제공</li>
                                    <li>예체능 생활기록부 작성(학습 기록 데이터 누적) 통한 체계적 Career Path 제안</li>
                                </ul>
                                <p><img src="/img/web/sub/busi04_01.jpg" alt=""></p>
                            </div>
                        </div>
                    </div>
                    <div class="section section05">
                        <h3>
                            <span>BUSINESS 05</span>
                            운동부 / 각종 클럽 연관사업
                        </h3>
                        <div class="graybox_wrap">
                            <div class="half">
                                <div class="graybox">
                                    <h5>분야별 동호인 리그, 친선 리그 개최</h5>
                                </div>
                                <div class="graybox">
                                    <h5>정기 레전드 특별 클래스 구성</h5>
                                </div>
                            </div>
                            <div class="half">
                                <div class="graybox">
                                    <h5>원포인트 레슨을 통한 전공자 동기 부여</h5>
                                </div>
                                <div class="graybox">
                                    <h5>코칭 스태프 파견 (단기 / 장기)</h5>
                                </div>
                            </div>
                        </div>
                        <div class="box_wrap">
                            <p>
                                <img src="/img/web/sub/busi05_01.jpg" alt="">
                            </p>
                            <p>
                                <img src="/img/web/sub/busi05_02.jpg" alt="">
                            </p>
                            <p>
                                <img src="/img/web/sub/busi05_03.jpg" alt="">
                            </p>
                            <p>
                                <img src="/img/web/sub/busi05_04.jpg" alt="">
                            </p>
                            <p>
                                <img src="/img/web/sub/busi05_05.jpg" alt="">
                            </p>
                        </div>
                        <span>* 23년 8월 현재 야구, 축구 등 3천여명의 운동선수와 200여개의 팀이 모두의예체능과 함께 하는 중</span>
                        <span>* 운동부 등록 현황 : 남양주 야놀야구단, 길동초 야구단, 도곡야구 아카데미, DK축구클럽 등 야구/축구 운동부, 클럽 참여 중</span>
                    </div>
                    <div class="section">
                        <h3>
                            <span>BUSINESS 06</span>
                            운동 선수 연관사업
                        </h3>
                        <div class="side">
                            <div class="graybox_wrap">
                                <div class="graybox">
                                    <h5>전문가 상담을 통한 맞춤형 코칭, 레슨 프로그램 제공</h5>
                                </div>
                                <div class="graybox">
                                    <h5>모두의예체능 APP을 통한 편리한 결제 경험 제공 (카드/현금)</h5>
                                </div>
                                <div class="graybox">
                                    <h5>클래스 영상분석, 진학/진로 상담까지 All-in-One 서비스 제공</h5>
                                </div>
                            </div>
                            <div class="img_wrap">
                                <p><img src="/img/web/sub/busi06_01.jpg" alt=""></p>
                                <p><img src="/img/web/sub/busi06_02.jpg" alt=""></p>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <h3>
                            <span>BUSINESS 07</span>
                            어린이 / 유소년 연관사업
                        </h3>
                        <div class="graybox_wrap">
                            <div class="graybox">
                                <h5>100개 이상의 예체능 클래스 보유</h5>
                                <ul>
                                    <li>다양한 예체능 체험학습 제공 → 멘토링 상담을 통해 재능 발견 → 취미반/입문반/전공준비반 선택</li>
                                </ul>
                            </div>
                            <div class="graybox">
                                <h5>그룹별 TEAM 구성 및 운영 관리</h5>
                                <ul>
                                    <li>팀별 대회 출전 및 입상 실적 (진학시 생활기록부 반영)</li>
                                </ul>
                            </div>
                            <div class="graybox">
                                <h5>예체능 종목별 강사 수준 선택 가능<br>(레전드, 프리미엄, 일반 순)</h5>
                                <ul>
                                    <li>강사진 수준에 따른 다양한 레슨비용 제안 가능</li>
                                    <li>학교, 학원, 친구 등 그룹 레슨을 통한 강습비 절감효과 제공 (농구 우지원, 펜싱 남현희, 축구 이동국)</li>
                                </ul>
                            </div>
                            <div class="half">
                                <div class="graybox">
                                    <h5>커뮤니티를 통한 정보 공유</h5>
                                </div>
                                <div class="graybox">
                                    <h5>멤버쉽 운영을 통한 다양한 예체능 클래스 체험(24년 도입예정)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <h3>
                            <span>BUSINESS 08</span>
                            성인 연관사업
                        </h3>
                        <div class="graybox_wrap">
                            <div class="half">
                                <div class="graybox">
                                    <h5>개인 취미 활동 : 전담 멘토링 서비스</h5>
                                </div>
                                <div class="graybox">
                                    <h5>지자체 동호인 리그 대회 참가 등록 지원</h5>
                                </div>
                            </div>
                            <div class="graybox">
                                <h5>동호회, 동아리 모임</h5>
                                <ul>
                                    <li>그룹 레슨, 특강 등 예체능 레전드 파견 교육</li>
                                </ul>
                            </div>
                            <div class="graybox">
                                <h5>종목별 동호회/동아리 리그 개최</h5>
                                <ul>
                                    <li>대회 준비에 필요한 전반 기획 및 운영</li>
                                </ul>
                            </div>
                        </div>
                        <div class="logo">
                            <p>
                                <img src="/img/web/sub/busi08_01.jpg" alt="">
                                <span>대한직장인체육회 MOU 체결</span>
                            </p>
                            <p>
                                <img src="/img/web/sub/busi08_02.jpg" alt="">
                                <span>(사)대한생활체육회 MOU 체결</span>
                            </p>
                        </div>
                    </div>
                    <div class="section">
                        <h3>
                            <span>BUSINESS 09</span>
                            대학생 연관사업
                        </h3>
                        <div class="graybox_wrap">
                            <div class="graybox">
                                <h5>대학교 보유 스포츠 시설 운영 대행</h5>
                                <ul>
                                    <li>한양대학교 시설 운영 대행 협의 중</li>
                                    <li>지방 대학교 스포츠 시설 운영 대행 관련 MOU 협의 중</li>
                                </ul>
                            </div>
                            <div class="graybox">
                                <h5>공강 시간 활용 레슨</h5>
                                <ul>
                                    <li>그룹 레슨, 특강 등 예체능 레전드 파견 교육</li>
                                </ul>
                            </div>
                            <div class="graybox">
                                <h5>대회 개최</h5>
                                <ul>
                                    <li>학교/동아리별 각종 대회 개최</li>
                                </ul>
                            </div>
                            <div class="graybox">
                                <h5>개인 취미 활동</h5>
                                <ul>
                                    <li>전담 멘토링 서비스</li>
                                </ul>
                            </div>
                            <div class="graybox">
                                <h5>방과후 레슨 및 대회 기획 및 운영</h5>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>