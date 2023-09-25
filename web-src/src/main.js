import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia' // 상태관리 라이브러리
import router from './routes/router'
import VueMaterial from 'vue-material' // CSS 라이브러리
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
    render: h => h(App),
    router,
    pinia
}).$mount('#app')
