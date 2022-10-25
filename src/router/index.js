
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component:()=>import('@/views/home/Home.vue')
    }, {
        path: '/list',
        name: 'list',
        component:()=>import('@/views/list/List.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router