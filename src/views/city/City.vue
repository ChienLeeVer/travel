<template>
    <div class="city">
        <city-header></city-header>
        <city-search></city-search>
    </div>

</template>

<script>
import CityHeader from '@/components/city/Header.vue';
import CitySearch from '@/components/city/Search.vue'

export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch
    }
}
</script>

<style lang="scss" scoped>
    div {
        font-size: .32rem;
    }
</style>