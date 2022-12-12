<template>
    <div>
        <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="galleryImgs"
        >

        </detail-banner>

        <detail-header >

        </detail-header>

        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>

    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        DetailBanner: ()=> import('@/components/detail/Banner'),
        DetailHeader: () => import('@/components/detail/Header'),
        DetailList: () => import('@/components/detail/List')
    },
    data() {
        return {
            sightName: '',
            bannerImg: '',
            galleryImgs: [],
            list: []
        }
    },
    methods: {
        getDetailInfo() {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res) {

            res = res.data
            if(res.ret && res.data) {
                const data = res.data

                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.galleryImgs = data.galleryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted() {
        this.getDetailInfo()
    }
}
</script>

<style lang="scss" scoped>
    div {
        font-size: .32rem;
    }

    .content {
        height: 50rem;
    }
</style>