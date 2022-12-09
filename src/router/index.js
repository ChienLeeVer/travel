
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component:()=>import('@/views/home/Home.vue')
    }, {
        path: '/city',
        name: 'City',
        component: ()=>import('@/views/city/City.vue')
    }, {
        path: '/detail/:id',
        name: 'Detail',
        component: ()=>import('@/views/detail/Detail.vue')
    }]

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return  { x: 0, y: 0 }
  }
})

export default router