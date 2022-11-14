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
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/Search.vue'
import CityList from '@/components/city/List.vue'
import CityAlphabet from '@/components/city/Alphabet.vue'

import axios from 'axios'
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
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
                console.log(err);
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