<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>

            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">

                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>

</template>
<script>
export default {
    name: 'HomeRecommend',
    data() {
        return {
            recommendList : [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/2203/62/62bb1f47f6146658a3.water.jpg_200x200_d55fce9a.jpg',
                    title: '世界之窗',
                    desc: '来深圳必去的热门景点，在这里你可以看到世界各地的微型景点'
                },
                {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/2203/62/62bb1f47f6146658a3.water.jpg_200x200_d55fce9a.jpg',
                    title: '东部华侨城',
                    desc: '来深圳必去的热门景点，在这里你可以看到世界各地的微型景点'
                },
                {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/2203/62/62bb1f47f6146658a3.water.jpg_200x200_d55fce9a.jpg',
                    title: '世界之窗',
                    desc: '来深圳必去的热门景点，在这里你可以看到世界各地的微型景点'
                },
                {
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/2203/62/62bb1f47f6146658a3.water.jpg_200x200_d55fce9a.jpg',
                    title: '世界之窗',
                    desc: '来深圳必去的热门景点，在这里你可以看到世界各地的微型景点'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/mixins';

    .recommend-title {
        margin-top: .2rem;
        line-height: .8rem;
        background-color: #eee;
        text-indent: .2rem;
    }

    .item {
        overflow: hidden;
        display: flex;
        height: 1.9rem;

        .item-img {
            width: 1.7rem;
            height: 1.7rem;
            padding: .1rem;
        }

        .item-info {
            flex: 1;
            padding: .1rem;
            min-width: 0;
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

            .item-button {
                background: #ff9300;
                padding:0 .1rem;
                border-radius: .06rem;
                border: 1px solid transparent;
                outline: none;
                margin-top: .2rem;
                color: #fff;
                line-height: .44rem;
                margin-top: .16rem;
            }
        }
    }
</style>