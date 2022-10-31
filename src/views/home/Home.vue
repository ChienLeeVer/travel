<template>
    <div id="Home">
        <home-header>

        </home-header>
        <home-swiper>

        </home-swiper>
        <home-icons>

        </home-icons>

        <home-recommend>

        </home-recommend>
    </div>
</template>
<script>
import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'
import HomeIcons from '@/components/home/Icons.vue'
import HomeRecommend from '@/components/home/Recommend.vue'
export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend
    }
}
</script>

<style lang="scss" scoped>
    div {
        font-size: .32rem;
    }
</style>