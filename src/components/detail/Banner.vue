<template>
    <div class="banner">
        <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/1707/81/81b18af22b775e20a3.img.jpg_600x330_1da3e0d8.jpg" alt="">
        <div class="banner-info">
            <div class="banner-tittle">欢乐海岸teamLab未来游乐园</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe6c8;</span>
                7
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBanner'
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/mixins.scss';
    .banner {
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        position: relative;
        .banner-img {
            width: 100%;
        }

        .banner-info {
            display: flex;
            justify-content: space-around ;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height:  .6rem;
            color: #fff;
            font-size: .36rem;
            text-shadow: 0 1px 2px rgb(0 0 0 / 70%);
            @include browserCss(background-image, linear-gradient,top, rgba(0,0,0,0),rgba(0,0,0,0.8));

            .banner-title {
                flex: 1;
                padding:0 .2rem;
            }

            .banner-number {
                margin-top: .14rem;
                padding: 0 .4rem;
                height: .32rem;
                line-height: .32rem;
                border-radius: .14rem;
                background: rgba(0, 0, 0, .8);
                font-size: .24rem;

                .banner-icon {
                    font-size: .24rem;

                }
            }
        }
    }

</style>