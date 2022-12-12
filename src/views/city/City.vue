<template>
    <div class="city">
        <city-header></city-header>
        <city-search
        :cities="cities"
        ></city-search>
        <city-list
        :cities="cities"
        :hotCities="hotCities"
        :letter="letter"
        ></city-list>
        <city-alphabet
        :cities="cities"
        @change="handleLetterChange"
        ></city-alphabet>
    </div>

</template>

<script>


import axios from 'axios'
export default {
    name: 'City',
    components: {
        CityHeader: () => import('@/components/city/Header'),
        CitySearch: () => import('@/components/city/Search'),
        CityList: () => import('@/components/city/List'),
        CityAlphabet: () => import('@/components/city/Alphabet')
    },
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
            .catch(err=>{

            })
        },
        handleGetCityInfoSucc(res) {
            res = res.data

            if( res.ret && res.data ) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities

            }

        },
        handleLetterChange (letter) {
            this.letter = letter

        }
    }
    ,
    mounted() {
        this.getCityInfo()
    }
}
</script>

<style lang="scss" scoped>
    div {
        font-size: .32rem;
    }
</style>