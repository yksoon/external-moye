<script>
import { routerPath } from "@/webPath";
import { onMounted, defineProps, toRaw } from "vue";
import $ from "jquery";

export default {
    name: "SideNav",
    props: {
        menuList: Array,
        userInfo: {
            type: Object,
        },
        switchPage: Function,
    },
    setup(props) {
        const navList = props.menuList;
        const userInfo = props.userInfo;
        const switchPage = props.switchPage;

        onMounted(() => {
            // 새로고침 하더라도 현재 메뉴 활성화
            // if (page) {
            //     $(".sub_2depth").hide();
            //     $(".sub_3depth").hide();
            //     $(".depth1").removeClass("on");
            //     $(".depth2").removeClass("on");
            //     $(`#${page}`).parents("li").children(".depth1").addClass("on");
            //     $(`#${page}`).parents("li").children(".depth2").addClass("on");
            //     $(`#${page}`).parents("li").children(".sub_2depth").slideToggle();
            //     $(`#${page}`).parents("li").children(".sub_3depth").slideToggle();
            // }
        });

        const depth1click = (e) => {
            $(".sub_2depth").hide();
            $(".sub_3depth").hide();

            $(".depth1").removeClass("on");

            if (e.target.nextElementSibling.style.display === "none") {
                e.target.classList.add("on");

                $(e.target).siblings(".sub_2depth").slideToggle();
            } else {
                $(e.target).siblings(".sub_2depth").slideUp();
            }
        };

        const depth2click = (e) => {
            if (e.target.nextElementSibling.style.display === "none") {
                $(".sub_3depth").slideUp();

                $(e.target).siblings(".sub_3depth").slideToggle();
            } else {
                $(e.target).siblings(".sub_3depth").slideUp();
            }
        };

        return {
            navList,
            userInfo,
            depth1click,
            depth2click,
            routerPath,
            switchPage,
        };
    },
};
</script>

<template>
    <header>
        <div class="gnb">
            <div class="adm_profile">
                <a @click="(e) => modUser(userInfo.user_idx)">
                    <p v-if="userInfo">
                        {{ userInfo.user_name_ko }}
                        ({{ userInfo.user_id }})
                    </p>
                </a>

                <div>
                    <a @click="signOut" class="font-12"> 로그아웃 </a>&nbsp
                    <router-link
                        :to="this.routerPath.web_main_url"
                        class="font-12"
                    >
                        HOMEPAGE
                    </router-link>
                </div>
            </div>
            <ul class="sub_gnb">
                <li v-for="item1 in navList" :key="item1">
                    <a
                        class="depth1"
                        @click="
                            (e) => {
                                depth1click(e);
                                item1.page && switchPage(item1.page);
                            }
                        "
                        :id="item1.page ? item1.page : ''"
                    >
                        {{ item1.title }}
                    </a>
                    <ul class="sub_2depth">
                        <li
                            v-if="item1.child"
                            v-for="item2 in item1.child"
                            :key="item2"
                        >
                            <a
                                @click="
                                    (e) => {
                                        depth2click(e);
                                        item2.page && switchPage(item2.page);
                                    }
                                "
                                :id="item2.page ? item2.page : ''"
                            >
                                {{ item2.title }}
                                <img
                                    v-if="item2.child.length !== 0"
                                    src="img/common/arrow_drop.png"
                                    alt=""
                                />
                            </a>
                            <ul class="sub_3depth">
                                <li
                                    v-if="item2.child"
                                    v-for="item3 in item2.child"
                                    :key="item3"
                                >
                                    <a
                                        @click="
                                            (e) =>
                                                item3.page &&
                                                switchPage(item3.page)
                                        "
                                        :id="item3.page ? item3.page : ''"
                                    >
                                        {{ item3.title }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
</template>
