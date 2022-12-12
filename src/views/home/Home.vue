<template>
    <div id="Home">
        <home-header >

        </home-header >
        <home-swiper :list="swiperList">

        </home-swiper>
        <home-icons>

        </home-icons>

        <home-recommend :list="recommendList">

        </home-recommend>

        <home-weekend :list="weekendList">

        </home-weekend>
    </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name:'Home',
    components: {
        HomeHeader: () => import('@/components/home/Header.vue'),
        HomeSwiper: () => import('@/components/home/Swiper.vue'),
        HomeIcons: () => import('@/components/home/Icons.vue'),
        HomeRecommend: () => import('@/components/home/Recommend.vue'),
        HomeWeekend: () => import('@/components/home/Weekend.vue')
    },
    data() {
        return {
            lastCity: '',
            swiperList: [],
            recommendList: [],
            weekendList: []
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json?city=' + this.city)
            .then(this.getHomeInfoSucc)
            .catch(err=>{

            })
        },
        getHomeInfoSucc (res) {
            res = res.data
            if( res.ret && res.data ) {
                const data = res.data
                this.swiperList = data.swiperList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted() {

        this.lastCity = this.city

        this.getHomeInfo()
    },
    activated() {
        if(this.lastCity !== this.city) {
            this.getHomeInfo()
            this.lastCity = this.city
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        font-size: .32rem;
    }
</style>