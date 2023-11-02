<script setup>
import {
    CommonConsole,
    CommonErrModule,
    CommonModal,
    CommonNotify,
    CommonRest,
    CommonSpinner,
} from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { apiPath } from "@/webPath";
import { reactive, ref, onMounted } from "vue";
import { popupModel } from "@/components/web/support/consulting/models/boardModel";

import Popup from "@/components/web/common/Popup.vue";

import { routerPath } from "@/webPath";
// import $ from "jquery";

// window.jQuery = window.$ = $;
const searchKeyword = ref(null);
const state = reactive({
    peopleList1: [],
    peopleList2: [],
    boardList: [],
    popupList: [],
    pageInfo: {},
    checkItems: [],
});

const fileBaseUrl = apiPath.api_file;

onMounted(() => {
    getPeopleList(1, 8, "");
    getBoardList(1, 4, "");
    getPopupList(1, maxRowNum.basic, "");
    // window.open('','_blank','width=700, height=600, top=50, left=50, scrollbars=yes');
});

import { marqueeInit } from "@/common/js/crawler";

// 인물 리스트 가져오기
const getPeopleList = (pageNum, pageSize, searchKeyword) => {
    CommonSpinner(true);

    // /v1/_peoples
    // POST
    // 인물 목록
    const url = apiPath.api_admin_list_people;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
    };

    // 파라미터
    const restParams = {
        method: "post",
        url: url,
        data: data,
        callback: (res) => responseLogic(res),
        admin: "Y",
    };
    CommonRest(restParams);

    // 완료 로직
    const responseLogic = (res) => {
        let result_code = res.headers.result_code;

        // 성공
        if (
            result_code === successCode.success ||
            result_code === successCode.noData
        ) {
            let result_info = res.data.result_info;
            let page_info = res.data.page_info;

            state.peopleList1 = result_info.slice(0, 4);
            state.peopleList2 = result_info.slice(-4);

            // 코치진 슬라이드 효과 적용
            // banner-slider //S
            marqueeInit({
                uniqueid: "gsefSpan1",
                style: {
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                    padding: "0px",
                    width: "100%",
                    height: "315px",
                },
                inc: 10, //speed - pixel increment for each iteration of this marquee's movement
                mouse: "cursor driven", //mouseover behavior ('pause' 'cursor driven' or false)
                moveatleast: 1,
                neutral: 1500,
                savedirection: true,
            });
            marqueeInit({
                uniqueid: "gsefSpan2",
                style: {
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                    padding: "0px",
                    width: "100%",
                    height: "315px",
                },
                inc: 10, //speed - pixel increment for each iteration of this marquee's movement
                mouse: "cursor driven", //mouseover behavior ('pause' 'cursor driven' or false)
                moveatleast: 1,
                neutral: 1500,
                savedirection: true,
                direction: "right",
            });
            // banner-slider //E

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

// 공지사항 리스트 가져오기
const getBoardList = (pageNum, pageSize, searchKeyword) => {
    // CommonSpinner(true);

    // /v1/boards
    // POST
    // board_type
    // 000 : 공지사항 [v]
    // 100 : 상담문의
    // 200 : 포토게시판
    // 300 : 영상게시판
    // 400 : 회사소개
    // 900 : 기타
    const url = apiPath.api_admin_boards;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
        board_type: "000",
    };

    // 파라미터
    const restParams = {
        method: "post",
        url: url,
        data: data,
        callback: (res) => responseLogic(res),
        admin: "Y",
    };
    CommonRest(restParams);

    // 완료 로직
    const responseLogic = (res) => {
        let result_code = res.headers.result_code;

        // 성공
        if (
            result_code === successCode.success ||
            result_code === successCode.noData
        ) {
            let result_info = res.data.result_info;
            let page_info = res.data.page_info;

            state.boardList = result_info;

            // CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            // CommonSpinner(false);
        }
    };
};

function getCookie(name) {
    let cookie = document.cookie;
    if (document.cookie != "") {

        let cookie_array = cookie.split("; ");
        for (let index in cookie_array) {
            
            let cookie_name = cookie_array[index].split("=");
            
            if (cookie_name[0] == "moyepopupcookie") {
                return cookie_name[1];
            }
        }
    }
    return;
}

// 팝업 리스트 가져오기
const getPopupList = (pageNum, pageSize, searchKeyword) => {

    // /v1/_popups
    // POST
    // 팝업 정보 목록
    const url = apiPath.api_admin_get_popups;
    const data = {
        page_num: pageNum,
        page_size: pageSize,
        search_keyword: searchKeyword,
    };

    // 파라미터
    const restParams = {
        method: "post",
        url: url,
        data: data,
        callback: (res) => responseLogic(res),
        admin: "Y",
    };
    CommonRest(restParams);

    // 완료 로직
    const responseLogic = (res) => {

        let result_code = res.headers.result_code;

        // 성공
        if (
            result_code === successCode.success ||
            result_code === successCode.noData
        ) {
            let result_info = res.data.result_info;
            let today = new Date();
            let currentTime = new Date().getTime();

            state.popupList = result_info;

            for (const key in state.popupList) {
                let popup = state.popupList[key];
                let startDate = new Date(popup.start_date);
                let endDate = new Date(popup.end_date);
                let lastClosedTime = VueCookies.get(popup.popup_idx);

                if (popup.show_yn === "Y" && startDate <= today && endDate >= today) {
                    window.open(`/popup/${popup.popup_idx}`, '_blank', `width=${popup.size_width},height=${popup.size_height},top=${popup.position_top},left=${popup.position_left},toolbar=no,scrollbars=${popup.option_scroll_yn}`);
                }
            }
        } else {
            // 에러
            CommonConsole("log", res);
        }
    };
};

const readyAlert = () => {
    alert("준비중입니다 :-)");
};
</script>

<template>
    <div>
        <div id="mainvisual">
            <div class="main_txt">
                <div class="main_txt_wrap">
                    <h2>전국민이 열광하는 레전드를 만나다</h2>
                    <p>
                        “좋아서 하는 공부는 즐겁다”를 모토로 누구나 관심있지만,
                        쉽게 접근하기 어려웠던 예체능을 생활화 하는 것이
                        모두의예체능의 Vision입니다."
                    </p>
                </div>
            </div>
        </div>
        <!-- container //S-->
        <div id="container">
            <div class="section01">
                <div class="top">
                    <h3 class="title">LIST OF LEGEND</h3>
                    <p>130개 예체능 카테고리 레전드 마스터</p>
                    <a :href="routerPath.web_peoples_url" class="more_btn"><span>코치진 더보기</span></a>
                </div>
                <!-- banner-slider //S-->
                <div class="slide_box" v-if="state.peopleList1.length !== 0">
                    <div id="gsefSpan">
                        <div class="marquee" id="gsefSpan1">
                            <div class="person" v-for="people in state.peopleList1">
                                <a :href="`${routerPath.web_peoples_url}/people/${people.people_idx}`">
                                    <!-- 프로필 이미지 있는 경우 -->
                                    <img v-if="people.file_path_enc !== null" :src="`${fileBaseUrl}${people.file_path_enc}`"
                                        :alt="`${people.file_name_org}`" style="
                                            min-width: 450px;
                                            min-height: 180px;
                                        " />
                                    <!-- 프로필 이미지 없는 경우 -->
                                    <img v-else src="/img/web/sub/default_full.jpg" alt="인물 기본 이미지" />
                                    <p>
                                        <span class="name">{{
                                            people.name_ko
                                        }}</span>
                                        <span class="field">{{
                                            people.category_child_name_ko
                                        }}</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide_box" v-if="state.peopleList2.length !== 0">
                    <div id="gsefSpan">
                        <div class="marquee" id="gsefSpan2">
                            <div class="person" v-for="people in state.peopleList2">
                                <a :href="`${routerPath.web_peoples_url}/${people.people_idx}`">
                                    <!-- 프로필 이미지 있는 경우 -->
                                    <img v-if="people.file_path_enc !== null" :src="`${fileBaseUrl}${people.file_path_enc}`"
                                        :alt="`${people.file_name_org}`" />
                                    <!-- 프로필 이미지 없는 경우 -->
                                    <img v-else src="/img/web/sub/default_full.jpg" alt="인물 기본 이미지" />
                                    <p>
                                        <span class="name">{{
                                            people.name_ko
                                        }}</span>
                                        <span class="field">{{
                                            people.category_child_name_ko
                                        }}</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section02">
                <div class="top">
                    <h3 class="title">CLASSES OF LEGEND</h3>
                    <p>
                        “전설을 만나다” 레전드 코치의 레슨을 직접 경험해보세요
                    </p>
                </div>
                <div class="category">
                    <div class="icon_wrap">
                        <img src="/img/web/main/sports01.png" alt="" />
                        <img src="/img/web/main/sports02.png" alt="" />
                        <img src="/img/web/main/sports03.png" alt="" />
                        <img src="/img/web/main/sports04.png" alt="" />
                        <img src="/img/web/main/sports05.png" alt="" />
                        <img src="/img/web/main/sports06.png" alt="" />
                        <img src="/img/web/main/sports07.png" alt="" />
                        <img src="/img/web/main/sports08.png" alt="" />
                        <img src="/img/web/main/sports09.png" alt="" />
                        <img src="/img/web/main/sports10.png" alt="" />
                        <img src="/img/web/main/sports11.png" alt="" />
                        <img src="/img/web/main/sports12.png" alt="" />
                        <img src="/img/web/main/sports13.png" alt="" />
                        <img src="/img/web/main/sports14.png" alt="" />
                        <img src="/img/web/main/sports15.png" alt="" />
                        <img src="/img/web/main/sports16.png" alt="" />
                        <img src="/img/web/main/sports17.png" alt="" />
                        <img src="/img/web/main/sports18.png" alt="" />
                    </div>
                    <a :href="routerPath.web_categories_url" class="more_btn"><span>카테고리 더보기</span></a>
                </div>
                <div class="class_wrap">
                    <div class="pink" @click="readyAlert">
                        <span><img src="/img/web/main/class01.png" alt="" /></span>
                        <div class="txt">
                            <h5>PRIVATE CLASS</h5>
                            <p>
                                1:1 One Point Lesson<br />
                                1:N Buddies Lesson
                            </p>
                        </div>
                    </div>
                    <div class="green" @click="readyAlert">
                        <span><img src="/img/web/main/class02.png" alt="" /></span>
                        <div class="txt">
                            <h5>SCHOOL CLASS</h5>
                            <p>
                                1:1 One Point Lesson<br />
                                정기 특별 레슨<br />
                                지자체 파견 레슨
                            </p>
                        </div>
                    </div>
                    <div class="blue" @click="readyAlert">
                        <span><img src="/img/web/main/class03.png" alt="" /></span>
                        <div class="txt">
                            <h5>ONLINE CLASS</h5>
                            <p>온라인 클래스</p>
                        </div>
                    </div>
                    <div @click="readyAlert">
                        <span><img src="/img/web/main/class04.png" alt="" /></span>
                        <div class="txt">
                            <h5>SPECIAL CLASS</h5>
                            <p>
                                구독형 레슨<br />
                                레슨 + 팀 운영 혼합<br />
                                유학 대비반, 커리어 패스 상담
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section03">
                <div class="left">
                    <h3 class="title">예체능 교육의 Digital Transformation</h3>
                    <p>
                        우리는 예체능 생태계를 체계화하고, 통합 서비스를 제공
                        하고자 합니다.
                    </p>
                    <a :href="routerPath.web_greetings_url" class="more_btn"><span>기업 소개 더보기</span></a>
                    <a :href="routerPath.web_consulting_url" class="more_btn"><span>상담 문의하기</span></a>
                </div>
                <div class="right"></div>
            </div>

            <div class="section04">
                <div class="top">
                    <h3 class="title">NOTICE</h3>
                    <p>모두의 예체능의 주요 공지사항을 전달합니다.</p>
                    <a :href="routerPath.web_notices_url" class="more_btn"><span>공지사항 더보기</span></a>
                </div>
                <div class="box_wrap" v-if="state.boardList.length !== 0">
                    <div class="box" v-for="board in state.boardList">
                        <a :href="`${routerPath.web_notices_url}/${board.board_idx}`">
                            <h4>{{ board.subject }}</h4>
                            <p>{{ board.content }}</p>
                            <span>{{ board.reg_dttm.split(" ")[0] }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- container //E-->
    </div>
</template>
