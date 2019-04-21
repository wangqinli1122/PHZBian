<template>
  <div @click="setIconHide">
    <home-header @showShare="getShowShare"></home-header>
    <home-search :hotShopsList="hot_mers" :hotGoodsList="hot_shops"></home-search>
    <home-swiper :list="swiperList" v-show="isShowSwiper"></home-swiper>
    <h3 class="title border-bottom">
      <span>——</span>
      周边商家
      <span>——</span>
    </h3>
    <common-shops :list="shops"></common-shops>
    <common-share :isShowShare="showShareValue"></common-share>
    <div class="non" v-show="!non" @click="clickMore">加载更多内容</div>
    <div class="non" v-show="non">暂无更多相关内容</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeSwiper from './components/Swiper'
import CommonShops from '@/pages/common/shops/Shops'
import CommonShare from '@/pages/common/share/Share'
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
      page: 1,
      non: false,
      isShowSwiper: 1,
      isFirstEnter: false
    }
  },
  components: {
    HomeHeader,
    HomeSearch,
    HomeSwiper,
    CommonShops,
    CommonShare
  },
  methods: {
    setIconHide () {
      this.$store.commit('changeShowIcon', false)
    },
    getHomeInfo () {
      axios.get('/home/index/getHomeList', {
        params: {
          lng: this.$store.state.addr.lng,
          lat: this.$store.state.addr.lat,
          pro: this.$store.state.addr.pro,
          city: this.$store.state.addr.city,
          dis: this.$store.state.addr.dis,
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
        this.isShowSwiper = data.isshow
        this.swiperList = data.swiperList
        data.merchantList.forEach(function (c) {
          if (c.range > 1000) {
            c.range = (c.range / 1000).toFixed(2) + 'km'
          } else {
            c.range = c.range + 'm'
          }
        })
        this.shops = this.shops.concat(data.merchantList)
        if (this.shops.length < 1) {
          this.non = true
        } else {
          this.non = false
        }
        if (data.merchantList.length < 5) {
          this.non = true
        } else {
          this.non = false
        }
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
  computed: {
    getLocationPage () {
      return this.$store.state.addr.lng
    }
  },
  watch: {
    getLocationPage (cur, old) {
      this.shops = []
      this.getHomeInfo()
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name === 'Shops') {
      to.meta.isBack = true
    }
    next()
  },
  created () {
    this.isFirstEnter = true
  },
  activated () {
    if (!this.$route.meta.isBack || this.isFirstEnter) {
      if (this.$store.state.addr.lng) {
        this.shops = []
        this.getHomeInfo()
      } else {
        this.$store.commit('getLocation')
      }
    }
    this.$route.meta.isBack = false
    this.isFirstEnter = false
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
