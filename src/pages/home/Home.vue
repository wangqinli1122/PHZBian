<template>
  <div>
    <home-header @showShare="getShowShare"></home-header>
    <home-search></home-search>
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
      shops: [],
      swiperList: [],
      showShareValue: '',
      addr: {
        pro: '1',
        city: '2',
        dis: '3'
      },
      center: [],
      page: 1
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
      axios.get('/api/home.json', {
        params: {
          lng: this.center.lng,
          lat: this.center.lat,
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
        this.shops = data.merchantList
        this.swiperList = data.swiperList
        console.log(this.addr)
      }
    },
    getShowShare (value) {
      this.showShareValue = value
    }
  },
  created () {
    let selfAddr = this
    this.bus.$on('getAddr', function (msg) {
      return function (msg) {
        selfAddr.addr = msg
        selfAddr.addr.pro = selfAddr.addr.pro.slice(0, selfAddr.addr.pro.length - 1)
        selfAddr.addr.city = selfAddr.addr.city.slice(0, selfAddr.addr.city.length - 1)
      } 
    })
    console.log(selfAddr.addr)
  },
  mounted () {
    this.bus.$on('getCenter', (msg) => {
      this.center = msg
      console.log(this.center)
    })
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
