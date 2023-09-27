<script>
import { onMounted, ref, toRaw } from "vue";
import { apiPath } from "@/webPath.js";
import {
    CommonErrModule,
    CommonRest,
    CommonNotify,
} from "@/common/js/common.js";

export default {
    name: "Signin",
    setup() {
        const inputID = ref(null);
        const inputPW = ref(null);

        onMounted(() => {
            // console.log(codes);
        });

        const clickLogin = () => {
            if (!inputID.value.value) {
                CommonNotify({
                    type: "alert",
                    message: "아이디를 입력해주세요",
                    callback: () => callbackLogic(),
                });

                const callbackLogic = () => {
                    // inputID.value.focus();
                    // document.getElementById("inputID").focus();
                };

                return false;
            }
            if (!inputPW.value.value) {
                CommonNotify({
                    type: "alert",
                    message: "비밀번호를 입력해주세요",
                });

                return false;
            }

            // login();
        };

        return {
            inputID: inputID,
            inputPW: inputPW,
            clickLogin: () => clickLogin(),
        };
    },
};
</script>

<template>
    <div class="wrap">
        <div class="admin">
            <header>
                <div class="login_wrap">
                    <div class="login">
                        <h1>
                            <!-- <img
                                src="../images/main/maintxt.png"
                                alt=""
                                style="width: 210px"
                            /> -->
                        </h1>
                        <p>로그인을 해주세요</p>
                        <div class="input_id">
                            <h5>아이디</h5>
                            <input
                                type="text"
                                class="input"
                                placeholder="ID"
                                id="inputID"
                                ref="inputID"
                                autofocus
                            />
                        </div>
                        <div>
                            <h5>비밀번호</h5>
                            <input
                                type="password"
                                class="input"
                                placeholder="PW"
                                id="inputPW"
                                ref="inputPW"
                            />
                        </div>
                        <div class="flex login_btn">
                            <div>
                                <!-- <input type="checkbox" id="id_remember" />
                                <label for="id_remember">아이디 저장</label> -->
                            </div>
                            <div>
                                <a
                                    class="btn btn01"
                                    @click="clickLogin"
                                    style="cursor: pointer"
                                >
                                    로그인
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<!-- import 시 동일하게 scoped 옵션이 적용되어 다른 컴포넌트에 영향 없는지 테스트 해보기 -->
<!-- 퍼블리싱 어떻게 적용하는게 좋을지 고민해보기 -->
<style scoped></style>
