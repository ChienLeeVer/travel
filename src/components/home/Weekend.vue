<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <ul>

            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>

                </div>
            </li>
        </ul>
    </div>

</template>
<script>
export default {
    name: 'HomeWeekend',
    data() {
        return {
            recommendList : [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
                    title: '清远周边逛',
                    desc: '人人都有一双发现美的声音，身边的事物最熟悉不过，人人都有一双发现美的声音，身边的事物最熟悉不过'
                },
                {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
                    title: '浮在海面的绿洲',
                    desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，夏日炎炎'
                },
                {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
                    title: '深圳必打卡',
                    desc: '来到深圳，你需要来到这里签到'
                },
                {
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b9/f9d8ace21c06.jpg_r_640x214_1f239a81.jpg',
                    title: '粤东泡汤好去处',
                    desc: '全时四季的温泉，度假的天堂，这独特的矿物质温泉让您感受不一样的温泉体验，享受不一样的秋天'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/mixins';

    .weekend-title {
        margin-top: .2rem;
        line-height: .8rem;
        background-color: #eee;
        text-indent: .2rem;
    }

    .item-img-wrapper {
        overflow: hidden;
        height: 0;
        padding-bottom: 33.9%;
        .item-img {
            width: 100%;
        }
    }
    .item-info {
        padding: .1rem;

        .item-title {
        line-height: .54rem;
        font-size: .32rem;
        @include ellipse();
    }

    .item-desc {
        line-height: .4rem;
        color: gainsboro;
        @include ellipse();
    }
    }





</style>