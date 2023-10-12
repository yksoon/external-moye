<script>
import { apiPath } from "@/webPath.js";
import {
    CommonErrModule,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { successCode } from "@/common/js/resultCode";
import { useUserInfoStore, useUserTokenStore } from "@/stores/userInfo";
import { usePagesStore } from "@/stores/pages";
import { onMounted, toRaw, ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import SideNav from "./nav/SideNav.vue";

import NoticeBoard from "./boardManage/noticeBoard/NoticeBoard.vue";
import ConsultingBoard from "./boardManage/consultingBoard/ConsultingBoard.vue";
import PhotoBoard from "./boardManage/photoBoard/PhotoBoard.vue";
import MovieBoard from "./boardManage/movieBoard/MovieBoard.vue";
import ArtistManage from "./artistManage/ArtistManage.vue";
import CategoryManage from "./categoryManage/CategoryManage.vue";
import CompanyManage from "./companyManage/CompanyManage.vue";

export default {
    name: "Admin",
    components: {
        SideNav,
        NoticeBoard,
        ConsultingBoard,
        PhotoBoard,
        MovieBoard,
        ArtistManage,
        CategoryManage,
        CompanyManage
    },
    setup() {
        const state = reactive({
            menuList: [],
        });
        const err = CommonErrModule();
        const router = useRouter();

        const userInfo = toRaw(useUserInfoStore().getUserInfo);
        const userToken = useUserTokenStore().getUserToken;

        const isRefresh = ref(false);

        const usePages = usePagesStore();
        const { pages } = storeToRefs(usePages);

        onMounted(() => {
            if (!userToken) {
                // navigate(routerPath.admin_signin_url);
                router.push({ name: "signin" });
            } else {
                // console.log(userToken);
                // console.log(userInfo);
                requestMenu();
            }
        });

        // 메뉴리스트 호출
        const requestMenu = () => {
            CommonSpinner(true);

            // 메뉴 리스트 호출
            // /v1/menus
            // GET
            const url = apiPath.api_admin_menus;
            const data = {};

            // 파라미터
            const restParams = {
                method: "get",
                url: url,
                data: data,
                callback: (res) => responsLogic(res),
                admin: "Y",
            };

            CommonRest(restParams);

            const responsLogic = (res) => {
                const result_code = res.headers.result_code;
                let resData = [];

                if (result_code === successCode.success) {
                    resData = res.data.result_info;

                    // console.log(resData);

                    createMenuList(resData);
                }
            };
        };

        // 메뉴 리스트 생성
        const createMenuList = (menuData) => {
            let menuArr = [];
            let depth1 = [];
            let depth2 = [];
            let depth3 = [];

            // console.log(menuData);

            menuData.map((item) => {
                let menuOnce = {};

                menuOnce["title"] = item.menu_name_ko;
                menuOnce["page"] = item.menu_path ? item.menu_path : "";
                menuOnce["child"] = [];
                menuOnce["menu_code"] = Number(item.menu_code);

                if (item.menu_depth === 0) {
                    depth1.push(menuOnce);
                } else if (item.menu_depth === 1) {
                    depth2.push(menuOnce);
                } else {
                    depth3.push(menuOnce);
                }
                return item;
            });

            depth2.map((item2) => {
                depth3.map((item3) => {
                    if (
                        item3.menu_code > item2.menu_code &&
                        item3.menu_code < item2.menu_code + 100
                    ) {
                        depth2
                            .find((e) => e.menu_code === item2.menu_code)
                            .child.push(item3);
                    }

                    return item3;
                });

                return item2;
            });

            depth1.map((item1) => {
                depth2.map((item2) => {
                    if (
                        item2.menu_code > item1.menu_code &&
                        item2.menu_code < item1.menu_code + 1000
                    ) {
                        depth1
                            .find((e) => e.menu_code === item1.menu_code)
                            .child.push(item2);
                    }

                    return item2;
                });

                return item1;
            });

            // console.log(depth1);
            menuArr = depth1;
            // menuList = menuArr;
            state.menuList = menuArr;

            CommonSpinner(false);
        };

        const switchPage = (page) => {
            isRefresh.value = !isRefresh;
            usePages.setPages(page);
        };

        // 렌더링 페이지
        // const renderPage = (page) => {
        //     console.log(page);
        //     switch (page) {
        //         // 대시보드
        //         case "noticeBoard":
        //             return <NoticeBoard />;

        //         // // 사전등록 관리
        //         // case "userList":
        //         //     return <UserList isRefresh={isRefresh} />;

        //         // // 공지사항
        //         // case "notice":
        //         //     return <Notice isRefresh={isRefresh} />;

        //         // // 한줄게시판
        //         // case "oneLineBoard":
        //         //     return <OneLineBoard isRefresh={isRefresh} />;

        //         default:
        //             return <NoticeBoard />;
        //     }
        // };

        return {
            userInfo,
            state,
            switchPage,
            // renderPage,
            pages,
            isRefresh,
        };
    },
};
</script>

<template>
    <div className="wrap">
        <div className="admin">
            <SideNav
                v-if="state.menuList.length !== 0"
                :userInfo="userInfo"
                :menuList="state.menuList"
                :switchPage="switchPage"
            />
            
            <!-- 인물관리 => 프로필 -->
            <ArtistManage
                v-if="pages === 'profileMng'"
                :isRefresh="isRefresh"
            />

            <!-- 인물관리 => 카테고리 -->
            <CategoryManage
                v-if="pages === 'categoryMng'"
                :isRefresh="isRefresh"
            />

            <!-- 게시판관리 => 공지사항 -->
            <NoticeBoard
                v-if="pages === 'noticeBoard'"
                :isRefresh="isRefresh"
            />

            <!-- 게시판관리 => 상담문의 -->
            <ConsultingBoard
                v-if="pages === 'consultingBoard'"
                :isRefresh="isRefresh"
            />

            <!-- 게시판관리 => 포토갤러리 -->
            <PhotoBoard 
                v-if="pages === 'photoBoard'"
                :isRefresh="isRefresh"
            />

            <!-- 게시판관리 => 영상갤러리 -->
            <MovieBoard 
                v-if="pages === 'movieBoard'"
                :isRefresh="isRefresh"
            />

            <!-- 회사소개 다운로드 -->
            <CompanyManage 
                v-if="pages === 'companyMng'"
                :isRefresh="isRefresh"
            />

        </div>
    </div>
</template>

<!-- import 시 동일하게 scoped 옵션이 적용되어 다른 컴포넌트에 영향 없는지 테스트 해보기 -->
<!-- 퍼블리싱 어떻게 적용하는게 좋을지 고민해보기 -->
<style scoped></style>
