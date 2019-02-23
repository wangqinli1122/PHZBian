<template>
  <div>
    <home-header></home-header>
    <home-search></home-search>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSearch,
    HomeSwiper
  }
}
</script>

<style>

</style>
