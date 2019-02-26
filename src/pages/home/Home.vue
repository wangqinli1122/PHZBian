<template>
  <div>
    <home-header></home-header>
    <home-search></home-search>
    <home-swiper></home-swiper>
    <h3 class="title border-bottom">
      <span>——</span>
      周边商家
      <span>——</span>
    </h3>
    <home-shops :list="shops"></home-shops>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeSwiper from './components/Swiper'
import HomeShops from '@/pages/common/shops/Shops'
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

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .title
    padding-top: .2rem
    padding-bottom: .2rem
    color: $grayColor
    text-align: center
</style>
