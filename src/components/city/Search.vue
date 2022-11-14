<template>
    <div>
        <div class="search">
        <input v-model="keyword" class="searchInput" type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="searchContent" ref="search" v-show="keyword">
            <ul>
                <li
                class="searchItem border-bottom"
                v-for="item of list"
                :key="item.id">

                    {{ item.name }}

                </li>

                <li class="searchItem border-bottom" v-show="hasNoData">
                    未找到匹配数据
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props:{
        cities: {
            type: Object
        }
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData() {
            return !this.list.length && this.keyword
        }
    },
    watch: {
        keyword() {
            clearTimeout(this.timer)
            if(!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(()=>{
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach(element => {

                        if(element.spell.indexOf(this.keyword) != -1 ||
                        element.name.indexOf(this.keyword) != -1) {
                            result.push(element)
                        }
                    });
                }
                this.list = result
            }, 100)
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';

    .search {
        height: .72rem;
        padding: 0 .1rem;
        font-size: 0;
        background: $bgColor;
        .searchInput {
            box-sizing: border-box;
            width: 100%;
            height: .62rem;
            line-height: .62rem;
            text-align: center;
            border-radius: .06rem;
            border: none;
            color: #666;
            padding: 0 .1rem;
            outline: none;
        }

    }
    .searchContent {
        z-index: 1;
        position: absolute;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #eee;
        .searchItem {
            line-height: .62rem;
            padding-left: .2rem;
            color: #666;
            background: #fff;
        }

    }

</style>