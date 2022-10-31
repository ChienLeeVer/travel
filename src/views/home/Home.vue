<template>
    <div id="Home">
        <home-header>

        </home-header>
        <home-swiper>

        </home-swiper>
        <home-icons>

        </home-icons>
    </div>
</template>
<script>
import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'
import HomeIcons from '@/components/home/Icons.vue'
export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>

<style lang="scss" scoped>
    div {
        font-size: .32rem;
    }
</style>