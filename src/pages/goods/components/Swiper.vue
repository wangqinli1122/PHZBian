<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide><img class="swiper-img" src="static/img/goods-img1.jpg"></swiper-slide>
      <swiper-slide><img class="swiper-img" src="@/assets/images/shop-img1.jpg"></swiper-slide>
      <swiper-slide><img class="swiper-img" src="@/assets/images/banner1.jpg"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'GoodsSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper
    width: 100%
    height: 0
    padding-bottom: 100%
    overflow: hidden
    .swiper-img
      width: 100%
 </style>
