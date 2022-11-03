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
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title  border-bottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title  border-bottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title  border-bottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title  border-bottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title  border-bottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
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
            border-top-color: #ccc;
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