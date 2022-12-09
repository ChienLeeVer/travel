<template>
    <div>
        <router-link
        tag="div"
        to="/"
        class="header-abs"
        v-show="showAbs">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>

        <div
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle">
            <router-link  to="/" >
            <div class="iconfont header-fixed-back">&#xe624;</div>

            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll() {
            let timer
            let that = this
            return (()=> {
                clearTimeout(timer)
                timer = setTimeout(()=>{
                    const top = document.documentElement.scrollTop
                    if( top > 60 ) {
                        let opacity = top / 140
                        opacity > 1 ? 1 : opacity
                        that.opacityStyle = {
                            opacity
                        }
                        that.showAbs = false
                    } else {
                        that.showAbs = true
                    }
                    clearInterval(timer)
                }, 10)

            })()


        }
    },
    activated() {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';
    .header-abs {
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: .8rem;
        height: .8rem;
        border-radius: .4rem;
        background: rgba(0, 0, 0, .6);

        .back-icon {
            font-size: .4rem;
            color: #fff;
            height: .8rem;
            line-height: .8rem;
            text-align: center;
            text-shadow: 0 1px 2px rgb(0 0 0 / 70%);
        }
    }

    .header-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        height: $headerHeight;
        line-height: $headerHeight;
        text-align: center;
        color: #fff;
        background: $bgColor;

        .header-fixed-back {
            position: absolute;
            top: 0;
            left: 0;
            width: .64rem;
            height: .64rem;

            text-align: center;
            font-size: .4rem;
            color: #fff;
        }
    }
</style>