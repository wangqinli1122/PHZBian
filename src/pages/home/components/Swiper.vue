<template>
  <div class="swiper">
    <div class="home-swiper">
      <swiper :options="swiperOption" v-if="list.length">
        <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" :src="item.imgUrl"></swiper-slide>
      </swiper>
    </div>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet
    margin: 0 .06rem
  .swiper
    padding: .15rem .2rem
    .home-swiper
      width: 100%
      height: 0
      padding-bottom: 43.1%
      overflow: hidden
      .swiper-img
        width: 100%
    .swiper-pagination
      margin: .1rem auto 0
      position: inherit
 </style>
