<template>
    <div id="Home">
        <home-header>

        </home-header>
        <home-swiper>

        </home-swiper>

    </div>
</template>
<script>
import HomeHeader from '@/components/home/Header.vue'

import HomeSwiper from '@/components/home/Swiper.vue'
export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper
    }
}
</script>

<style lang="scss" scoped>

</style>