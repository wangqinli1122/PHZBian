<template>
  <div>
    <home-header @showShare="getShowShare"></home-header>
    <home-search :hotShopsList="hot_mers" :hotGoodsList="hot_shops"></home-search>
    <home-swiper :list="swiperList"></home-swiper>
    <h3 class="title border-bottom">
      <span>——</span>
      周边商家
      <span>——</span>
    </h3>
    <common-shops :list="shops"></common-shops>
    <common-share :isShowShare="showShareValue"></common-share>
    <map-city></map-city>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeSwiper from './components/Swiper'
import CommonShops from '@/pages/common/shops/Shops'
import CommonShare from '@/pages/common/share/Share'
import MapCity from '@/pages/common/bmap/MapCity'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      hot_mers: [],
      hot_shops: [],
      shops: [],
      swiperList: [],
      userinfo: {},
      showShareValue: '',
      addr: {},
      page: 0
    }
  },
  components: {
    HomeHeader,
    HomeSearch,
    HomeSwiper,
    CommonShops,
    CommonShare,
    MapCity
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.php/home/index/getHomeList', {
        params: {
          lng: this.addr.lng,
          lat: this.addr.lat,
          pro: this.addr.pro,
          city: this.addr.city,
          dis: this.addr.dis,
          page: this.page
        }
      }).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret === true) {
        const data = res.data
        this.hot_mers = data.hot_mers
        this.hot_shops = data.hot_shops
        this.shops = data.merchantList
        this.swiperList = data.swiperList
        this.shops.forEach(function (c) {
          if (c.range > 1000) {
            c.range = (c.range / 1000).toFixed(2) + 'km'
          } else {
            c.range = c.range + 'm'
          }
        })
      }
    },
    getShowShare (value) {
      this.showShareValue = value
    }
  },
  mounted () {
    this.bus.$on('getAddr', (msg) => {
      this.addr = msg
      this.addr.pro = this.addr.pro.slice(0, this.addr.pro.length - 1)
      this.addr.city = this.addr.city.slice(0, this.addr.city.length - 1)
      this.getHomeInfo()
    })
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
