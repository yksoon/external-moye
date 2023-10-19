<script setup>
import {
    CommonErrModule,
    CommonConsole,
    CommonRest,
    CommonNotify,
    CommonSpinner,
} from "@/common/js/common.js";
import { storeToRefs } from "pinia";
import { maxRowNum } from "@/common/js/pagenationInfoStatic";
import { successCode } from "@/common/js/resultCode";
import { reactive, ref, onMounted } from "vue";
import { apiPath, routerPath } from "@/webPath";
import LeftMenu from '@/components/web/common/LeftMenu.vue';
import { useRoute } from "vue-router";

// ------------------- import End --------------------

const route = useRoute();

const searchKeyword = ref(null);
const state = reactive({
    board: null,
});

onMounted(() => {
    getBoardDetail();
});

const fileBaseUrl = apiPath.api_file;

// 상담문의 상세 데이터 가져오기
const getBoardDetail = () => {
    CommonSpinner(true);

    const boardIdx = route.params.qna;

    // /v1/board/{board_idx}
    // GET
    // 상담문의 상세
    const url = apiPath.api_admin_get_board + `/${boardIdx}`;
    const data = {};

    // 파라미터
    const restParams = {
        method: "get",
        url: url,
        data: data,
        callback: (res) => responsLogic(res),
        admin: "Y"
    };
    CommonRest(restParams);

    // 완료 로직
    const responsLogic = (res) => {
        let result_code = res.headers.result_code;

        // 성공
        if (
            result_code === successCode.success ||
            result_code === successCode.noData
        ) {
            let result_info = res.data.result_info;
            // let page_info = res.data.page_info;

            state.board = result_info;

            CommonSpinner(false);
        } else {
            // 에러
            CommonConsole("log", res);

            CommonSpinner(false);
        }
    };
};

</script>

<template>
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <LeftMenu page="consulting" />
            <div id="content">
                <div id="subtitle">
                    <h2>상담문의</h2>
                </div>
                <div data-aos-duration="1000" data-aos-delay="400">
                    <table class="board_Vtable" v-if="state.board">
                        <colgroup>
                            <col width="18%">
                            <col width="*">
                            <col width="*">
                        </colgroup>
                        <thead>
                            <tr>
                                <!-- <th colspan="3">{{ state.board.subject }} &nbsp;<img src="/img/common/common_lock.png" alt=""></th> -->
                                <th colspan="3">{{ state.board.subject }}</th>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <ul>
                                        <li>{{ state.board.reg_user_name_ko }}</li>
                                        <li class="imbar">|</li>
                                        <li>{{ state.board.reg_dttm }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3"><b>{{ state.board.category_type }}</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan=3>
                                    <div class="board_content">
                                        {{ state.board.content }}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <!-- <td colspan="3" style="padding:0;">
                                    <div class="reply_area">
                                        <form name="reply_form" method="post">
                                            <div class="reply_box">
                                                <?if($member[level] < 90){?>
                                                <ul>
                                                    <li class="user"><span>작성자</span><input type="text" name="username"
                                                            id="" value="" /></li>
                                                    <li class="user_pw"><span>비밀번호</span><input type="password"
                                                            name="passwd" id="" value="" /></li>
                                                </ul>
                                                <?}?>
                                                <input type="hidden" name="modify_idx" />
                                                <p>
                                                    <span>내용</span>
                                                    <textarea name="re_context" class="input"
                                                        style="height:65px; resize:none;"></textarea>
                                                </p>
                                            </div>
                                            <div class="reply_btn_box">
                                                <a href="javascript:reply_write('<?=$idx?>','<?=$bo_idx?>','insert');"
                                                    class="reply_btn">등록</a>
                                            </div>
                                        </form>
                                        <div id="reply_area" style="width:100%"></div>
                                    </div>
                                </td> -->
                            </tr>
                            <tr v-if="state.board.comment_info.length !== 0" v-for="comment in state.board.commont_info">
                                <th>{{ comment.reg_user_name_ko }}</th>
                                <td colspan="2">{{ comment.content }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="board_btn_wrap">
                        <div class="boardW_btn">
                            <a :href="routerPath.web_consulting_url" class="back_btn">목록
                            </a>
                            <!-- <span class="left2_btn"><?=$btn_link['delete']?></span>
                            <span class="back_btn"><?=$btn_link['update']?></span> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>