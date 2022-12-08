<template>
    <div class="container" @click="hiddenGallery">
        <div class="wrapper" >
             <el-carousel
            >
                <el-carousel-item v-for="(item, index) in imgs" :key="index" >
                    <h3 class="small">
                        <img class="gallery-img" :src="item" alt="">

                    </h3>
                </el-carousel-item>

            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallery',
    props: {
        imgs: {
                type: Array,
                default () {
                    return []
                }
            }
    },
    data() {
        return {

        }
    },
    methods: {
        hiddenGallery() {
            this.$emit('hiddenGallery')
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
        z-index: 99;

        .wrapper {
            overflow: hidden;
            width: 100%;
            height: 0;
            padding-bottom: 100%;

            .gallery-img {
                width: 100%;
            }
        }

    }
</style>