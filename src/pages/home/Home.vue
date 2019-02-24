<template>
  <div>
    <home-header></home-header>
    <home-search></home-search>
    <home-swiper></home-swiper>
    <home-shops :list="shops"></home-shops>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeSwiper from './components/Swiper'
import HomeShops from './components/Shops'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      shops: []
    }
  },
  components: {
    HomeHeader,
    HomeSearch,
    HomeSwiper,
    HomeShops
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret === true) {
        const data = res.data
        this.shops = data.merchantList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
