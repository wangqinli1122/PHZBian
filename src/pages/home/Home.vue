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
    <div class="non" v-show="!non" @click="clickMore">加载更多内容</div>
    <div class="non" v-show="non">暂无更多相关内容</div>
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
      page: 1,
      non: false
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
      axios.get('/home/index/getHomeList', {
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
        this.swiperList = data.swiperList
        this.shops = this.shops.concat(data.merchantList)
        if (this.shops.length < 1) {
          this.non = true
        } else {
          this.non = false
        }
        if (data.merchantList.length < 10) {
          this.non = true
        } else {
          this.non = false
        }
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
    },
    clickMore () {
      this.page = parseInt(this.page) + 1
      this.getHomeInfo()
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
  .non
    font-size: .32rem
    color: #ccc
    text-align: center
    line-height: 1rem
</style>
