import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './routes/router'
import VueMaterial from 'vue-material' // CSS 라이브러리
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueMaterial)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
