<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title  border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title  border-bottom">热门城市</div>
                <div class="button-list">
                    <div
                    class="button-wrapper"
                    v-for="item of hotCities"
                    :key="item.id">
                        <div class="button">{{ item.name }}</div>
                    </div>

                </div>
            </div>
            <div class="area" v-for="(item, name) in cities" :key="name" :ref="name">

                <div class="title  border-bottom"> {{ name }}</div>
                <div class="item-list">
                    <div
                    class="item border-bottom"
                    v-for="innerItem of item"
                    :key="innerItem.id">
                        {{ innerItem.name }}
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
    naem:'CityList',
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    watch: {
        cities () {
            this.$nextTick(() => {
                this.scroll.refresh()
            })
        },
        letter () {
            if (this.letter) {

                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted() {

        this.scroll = new Bscroll(this.$refs.wrapper)

    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';
    .border-topbottom {
        &::before {
            border-top-color: #ccc;
        }
        &::after {
            border-bottom-color: #ccc;
        }
    }

    .border-bottom {

        &::after {
            border-top-color: #ccc;
        }
    }

    .list {
        overflow: hidden; //导致无法滚动
        position: absolute;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;

        .title  {
            line-height: .54rem;
            background-color: #eee;
            padding-left: .2rem;
            color: #666;
            font-size: .26rem;
        }

        .button-list {
            padding: .1rem;
            overflow: hidden;
            padding: .1rem;
            padding-right: .6rem;
            .button-wrapper {
                width: 33.3%;
                float: left;

                .button {
                    margin: .1rem;
                    padding: .1rem 0;
                    text-align: center;
                    border: .02rem solid #ccc;
                    border-radius: .02rem;
                }
            }
        }

        .item-list {
            .item {
                line-height: .76rem;
                padding-left: .2rem;
            }
        }
    }



</style>