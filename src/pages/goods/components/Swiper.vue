<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of list" :key="index"><img class="swiper-img" :src="item"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'GoodsSwiper',
  props: {
    list: Array
  },
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
    text-align: center
    overflow: hidden
    .swiper-img
      width: 100%
 </style>
