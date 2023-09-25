import "./assets/main.css";
// import VueMaterial from 'vue-material' // CSS 라이브러리 (https://www.npmjs.com/package/vue-material)
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);

app.use(createPinia());
app.use(vuetify);
app.use(router);
// app.use(VueMaterial)

app.mount("#app");
