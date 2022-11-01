<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="" srcset="">
            </div>

            <p class="icon-desc">景点门票</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="" srcset="">
            </div>

            <p class="icon-desc">滑雪季</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="" srcset="">
            </div>

            <p class="icon-desc">泡温泉</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="" srcset="">
            </div>

            <p class="icon-desc">动植物园</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="" srcset="">
            </div>

            <p class="icon-desc">一日游</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="" srcset="">
            </div>

            <p class="icon-desc">必游榜单</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="" srcset="">
            </div>

            <p class="icon-desc">自然风光</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="" srcset="">
            </div>

            <p class="icon-desc">全部</p>
        </div>

    </div>
</template>

<script>
export default {
    nmae: 'HomeIcons'
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';
    @import '@/assets/styles/mixins.scss';
    .icons {
        height: 0;
        padding-bottom: 50%;
        overflow: hidden;

        .icon {
            float: left;
            width: 25%;
            height: 0;
            padding-bottom:25%;
            mragin-top: .2rem;
            position: relative;
            overflow: hidden;
            .icon-img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: .44rem;
                box-sizing: border-box;
                padding: .1rem;
                .icon-img-content {
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform: translate(-50%, -50%);
                    display: block;
                    height: 60%;
                }
            }

            .icon-desc {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                line-height: .44rem;
                height: .44rem;
                color: $darkTextColor;
                @include ellipse();
            }
        }


    }
</style>