<template>
  <div class="block">
    <el-carousel
    height="150px"
    >
      <el-carousel-item v-for="item in images" :key="item.id">
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
    data () {
        return {
            images:[
                {
                    id:'001',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/2210/d6/d66fd33564db0a77a3.water.jpg_600x330_b4b3fa42.jpg',

                },
                {
                    id:'002',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/201309/24/6f15c7cc023de232c8d65eac.jpg_600x330_5d7e952c.jpg',

                },
                 {
                    id:'003',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_600x330_28bda6b0.jpg',

                },
                 {
                    id:'004',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/2203/62/62bb1f47f6146658a3.water.jpg_600x330_6bce615b.jpg'

                },




            ]
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

