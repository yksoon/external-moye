<script>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { apiPath } from "@/webPath";
import { CommonRest, CommonConsole } from "@/common/js/common";
import { successCode } from "@/common/js/resultCode";
import { useCodesStore } from "@/stores/codes";
import { useResultCodeStore } from "@/stores/resultCode";
import { useIpInfoStore } from "@/stores/ipInfo";
import { useSpinnerStore } from "@/stores/spinner";
import { useModalStore } from "@/stores/modal";
import { useCompanyFileStore } from "@/stores/companyFile";
import { storeToRefs } from "pinia";
import axios from "axios";

import CommonAlert from "@/common/components/CommonAlert.vue";
import CommonConfirm from "@/common/components/CommonConfirm.vue";
import CommonSpinner from "@/common/components/CommonSpinner.vue";
import CommonModal from "@/common/components/CommonModal.vue";

import "@/common/css/default.css";
import "@/common/css/style.css";
import "@/common/css/board.css";

export default {
    components: {
        CommonAlert,
        CommonConfirm,
        CommonSpinner,
        CommonModal,
    },
    name: "App",
    setup() {
        const codes = useCodesStore();
        const resultCode = useResultCodeStore();
        const useCompanyFile = useCompanyFileStore();
        const useIpInfo = useIpInfoStore();
        const { ipInfo } = storeToRefs(useIpInfo);

        onMounted(() => {
            if (ipInfo.value) {
                setInterval(getCodes, 3600000);
                setInterval(getResultCode, 3600000);
                setInterval(getCompanyBoard, 3600000);
            } else {
                getIpInfo();
            }
        });

        const getIpInfo = async () => {
            let ip;

            await axios
                .get("https://geolocation-db.com/json/")
                .then((res) => {
                    // const ip = res.data.IPv4;
                    const getIp = () => {
                        return new Promise((resolve, reject) => {
                            const data = res.data.IPv4;
                            resolve(data);
                        });
                    };

                    getIp()
                        .then((resolvedData) => {
                            useIpInfo.setIpInfo(resolvedData);
                            sessionStorage.setItem("ipInfo", resolvedData);
                        })
                        .then(() => {
                            getCodes();
                            getResultCode();
                            getCompanyBoard();
                        });
                })
                .catch((error) => {
                    ip = "";
                    useIpInfo.setIpInfo(ip);
                    sessionStorage.setItem("ipInfo", ip);
                });
        };

        // codes
        const getCodes = () => {
            // /v1/_codes
            // POST
            const restParams = {
                method: "post",
                url: apiPath.api_codes,
                data: {},
                callback: (res) => responseLogic(res),
            };

            CommonRest(restParams);

            const responseLogic = (res) => {
                // console.log(res);

                const result_code = res.headers.result_code;
                // 성공
                if (result_code === successCode.success) {
                    const resultInfo = res.data.result_info;

                    codes.setCodes(resultInfo);
                } else {
                    // 에러
                    CommonConsole("log", res);
                    // setIsSpinner(false);
                }
            };
        };

        // resultCode
        const getResultCode = () => {
            // /v1/_codes
            // POST
            const restParams = {
                method: "get",
                url: apiPath.api_result,
                data: {},
                callback: (res) => responseLogic(res),
            };

            CommonRest(restParams);

            const responseLogic = (res) => {
                // console.log(res);

                const result_code = res.headers.result_code;
                // 성공
                if (result_code === successCode.success) {
                    const resultInfo = res.data.result_info;

                    resultCode.setResultCode(resultInfo);
                } else {
                    // 에러
                    CommonConsole("log", res);
                    // setIsSpinner(false);
                }
            };
        };

        // 회사소개서 다운로드 링크 가져오기 (1. 회사소개서 최신글)
        const getCompanyBoard = () => {
            // CommonSpinner(true);

            // /v1/_boards
            // POST
            // board_type
            // 000 : 공지사항
            // 100 : 상담문의
            // 200 : 포토게시판
            // 300 : 영상게시판
            // 400 : 회사소개 [v]
            // 900 : 기타
            const url = apiPath.api_admin_boards;
            const data = {
                page_num: 1,
                page_size: 1,
                search_keyword: "",
                board_type: "400",
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

                    // 최신 회사소개서 board_idx로 상세 데이터 요청
                    if (result_info) {
                        getCompanyBoardDetail(result_info[0].board_idx);
                    } else {
                        // CommonSpinner(false);
                    }
                } else {
                    // 에러
                    CommonConsole("log", res);
                    // CommonSpinner(false);
                }
            };
        };

        // 회사소개서 다운로드 링크 가져오기 (2. 회사소개서 최신글 상세 데이터)
        const getCompanyBoardDetail = (board_idx) => {
            const boardIdx = String(board_idx);

            // v1/board/{board_idx}
            // GET
            const url = apiPath.api_admin_get_board + `/${boardIdx}`;
            const data = {};

            // 파라미터
            const restParams = {
                method: "get",
                url: url,
                data: data,
                callback: (res) => responseLogic(res),
                admin: "Y",
            };
            CommonRest(restParams);

            const responseLogic = (res) => {
                let result_code = res.headers.result_code;
                let result_info = res.data.result_info;

                // 성공
                if (result_code === successCode.success) {
                    useCompanyFile.setCompanyFile(result_info.file_info[0].file_path_enc);
                    // sessionStorage.setItem("companyFile", result_info.file_info[0].file_path_enc);
                }
                // 에러
                else {
                    CommonConsole("log", res);

                    CommonSpinner(false);

                    CommonNotify({
                        type: "alert",
                        message: res.headers.result_message_ko,
                    });
                }
            };
        };
    },
    data() {
        const useSpinner = useSpinnerStore();
        const { isSpinner } = storeToRefs(useSpinner);
        const useModal = useModalStore();
        const { isOpen } = storeToRefs(useModal);
        
        return {
            isSpinner: isSpinner, // 로딩 중 여부를 나타내는 데이터
            isOpen: isOpen, // 모달창 활성화 여부를 나타내는 데이터
        };
    },
    methods: {
        // 배경 클릭 이벤트 막기
        preventBackgroundClick(event) {
            event.stopPropagation(); // 배경 클릭 이벤트 전파 차단
        },
    },
};
</script>

<template>
    <div class="wrapper">
        <!-- 배경 클릭을 막는 투명한 배경 -->
        <div v-if="isSpinner || isOpen" class="overlay" @click="preventBackgroundClick"></div>
        <!-- 컨텐츠 영역 -->
        <component :is="$route.meta.layout || 'div'">
            <RouterView />
        </component>
        <!-- 공용 컴포넌트 -->
        <CommonAlert />
        <CommonConfirm />
        <CommonSpinner />
        <CommonModal />
    </div>
</template>

<style>
.wrapper {
    position: relative;
}
/* 투명한 배경 스타일 */
.wrapper .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0); /* 투명도 조절 가능 */
    z-index: 2000; /* 로딩 스피너보다 낮은 z-index 설정 */
}
</style>
