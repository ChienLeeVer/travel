import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import './assets/styles/reset.css' //统一样式
import './assets/styles/border.css' //解决1px问题

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')
