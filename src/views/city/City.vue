<template>
    <div class="city">
        <city-header></city-header>
    </div>

</template>

<script>
import CityHeader from '@/components/city/Header.vue';

export default {
    name: 'City',
    components: {
        CityHeader
    }
}
</script>

<style lang="scss" scoped>
    div {
        font-size: .32rem;
    }
</style>