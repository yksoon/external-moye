// import "./assets/main.css";
// import VueMaterial from 'vue-material' // CSS 라이브러리 (https://www.npmjs.com/package/vue-material)
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

import "@/common/css/default.css";
import "@/common/css/style.css";
import "@/common/css/board.css";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"; //피니아

// import Vue from "vue";
// import jQuery from "jquery";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
    ssr: true,
});

// 피니아
const pinia = createPinia(); //피니아 생성
pinia.use(piniaPluginPersistedstate); //모듈추가

// Vue에 jQuery를 등록합니다.
// Vue.prototype.$ = jQuery;

const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.use(router);

app.mount("#app");
