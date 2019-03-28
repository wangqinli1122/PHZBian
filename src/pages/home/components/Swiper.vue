<template>
  <div class="swiper">
    <div class="home-swiper" v-if="list.length">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id"><img class="swiper-img" @click="handleClickUrl(item.link)" :src="item.imgUrl"></swiper-slide>
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
        autoplay: 4000,
        speed: 1600,
        autoplayDisableOnInteraction: false
      }
    }
  },
  methods: {
    handleClickUrl (link) {
      window.location.href = link
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
      padding-bottom: 43%
      overflow: hidden
      .swiper-img
        width: 100%
    .swiper-pagination
      margin: .1rem auto 0
      position: inherit
 </style>
