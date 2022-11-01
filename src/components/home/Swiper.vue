<template>
  <div class="block">
    <el-carousel
    height="150px"
    >
      <el-carousel-item v-for="item in list" :key="item.id">
        <h3 class="small">
            <img :src="item.imgUrl" alt="">
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>
<script>
export default {
    name:"HomeSwiper",
    props:{
        list: Array
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .block {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 150px;
    }

    .el-carousel__item  {
        h3 {
            background-color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 150px;
            margin: 0;

            img {
                height: 150px;
                width: 100%;
            }
        }
    }

    .el-carousel__item {
    &:nth-child(2n) {
        background-color: #99a9bf;
    }

    }

    .el-carousel__item {
        &:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
</style>

