<template>
  <div>
    <home-header></home-header>
    <home-search></home-search>
    <home-swiper></home-swiper>
    <home-shops></home-shops>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeSwiper from './components/Swiper'
import HomeShops from './components/Shops'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSearch,
    HomeSwiper,
    HomeShops
  }
}
</script>

<style>

</style>
