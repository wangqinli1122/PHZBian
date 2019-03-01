<template>
  <div>
    <goods-header></goods-header>
    <goods-swiper></goods-swiper>
    <goods-info></goods-info>
  </div>
</template>

<script>
import GoodsHeader from './components/Header'
import GoodsSwiper from './components/Swiper'
import GoodsInfo from './components/Info'
export default {
  name: 'Goods',
  components: {
    GoodsHeader,
    GoodsSwiper,
    GoodsInfo
  }
}
</script>

<style lang="stylus" scoped>

</style>
