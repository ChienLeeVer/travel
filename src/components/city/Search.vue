<template>
    <div class="search">
        <input class="searchInput" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';

    .search {
        height: .72rem;
        padding: 0 .1rem;
        font-size: 0;
        background: $bgColor;
        .searchInput {
            box-sizing: border-box;
            width: 100%;
            height: .62rem;
            line-height: .62rem;
            text-align: center;
            border-radius: .06rem;
            border: none;
            color: #666;
            padding: 0 .1rem;
            outline: none;
        }
    }

</style>