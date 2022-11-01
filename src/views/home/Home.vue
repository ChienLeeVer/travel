<template>
    <div id="Home">
        <home-header :city="city">

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
import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'
import HomeIcons from '@/components/home/Icons.vue'
import HomeRecommend from '@/components/home/Recommend.vue'
import HomeWeekend from '@/components/home/Weekend.vue'
import axios from 'axios'
export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data() {
        return {
            city: '',
            swiperList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
            .then(this.getHomeInfoSucc).catch(err => {

            })
        },
        getHomeInfoSucc (res) {
            res = res.data
            if( res.ret && res.data ) {
                const data = res.data
                this.city = data.city
                this.swiperList = data.swiperList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted() {
        this.getHomeInfo()
    }
}
</script>

<style lang="scss" scoped>
    div {
        font-size: .32rem;
    }
</style>