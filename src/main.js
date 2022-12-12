import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { Carousel, CarouselItem } from 'element-ui'
import 'babel-polyfill'

import '@/assets/styles/reset.css' //统一样式
import '@/assets/styles/border.css' //解决1px问题
import '@/assets/styles/iconfont.css'

Vue.config.productionTip = false
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app')
