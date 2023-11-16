import "@/common/css/default.css";
import "@/common/css/style.css";
import "@/common/css/board.css";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"; //피니아
import AosVue from "aos-vue";
import 'aos/dist/aos.css';
import "@/common/css/aos.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueLazyLoad from 'vue3-lazyload'

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.min.css';

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
    theme: {
        defaultTheme: 'light',
    },
});

// 피니아
const pinia = createPinia(); //피니아 생성
pinia.use(piniaPluginPersistedstate); //모듈추가

const app = createApp(App);
// app.AOS = new AOS.init();

app.use(pinia);
app.use(vuetify);
app.use(router);
app.use(VueLazyLoad);

app.use(AosVue).mount('#app')

console.log(
`%c
─────────────────────────────────────────────

  ███╗   ███╗ ██████╗      ██╗   ██╗███████╗
  ████╗ ████║██╔═══██╗     ╚██╗ ██╔╝██╔════╝
  ██╔████╔██║██║   ██║█████╗╚████╔╝ █████╗  
  ██║╚██╔╝██║██║   ██║╚════╝ ╚██╔╝  ██╔══╝  
  ██║ ╚═╝ ██║╚██████╔╝        ██║   ███████╗
  ╚═╝     ╚═╝ ╚═════╝         ╚═╝   ╚══════╝

───────────────────────────────────────────── ฅ
`,
    "color:#FF4665",
);