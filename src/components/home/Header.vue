<template>
    <div id="HomeHeader" class="header">
       <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
       </div>
       <div class="header-input">
        <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
       </div>
       <router-link to="/city">
            <div class="header-right">
                {{ this.$store.state.city }}
                <span class="iconfont arrow-icon">&#xeb6d;</span>
            </div>
       </router-link>

    </div>
</template>
<script>

export default {
    name:'HomeHeader',

}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';

    .header {
        line-height: $headerHeight;
        font-size: .28rem;
        display: flex;
        background-color: $bgColor;
        color: #fff;
        .header-left {
            width: 0.64rem;
            float: left;
            .back-icon {
                text-align: center;
                font-size: .4rem;
            }
        }

        .header-input {
            flex: 1;
            height: .64rem;
            line-height: .64rem;
            margin-top: .12rem;
            margin-left: .2rem;
            padding-left: .2rem;
            background: #fff;
            border-radius: 5px;
            color: #ccc;
        }

        .header-right {
            width: 1.04rem;
            padding: 0 .1rem;
            float: right;
            text-align: center;
            color: #fff ;
            .arrow-icon {
                font-size: .24rem;
            }
        }
    }
</style>