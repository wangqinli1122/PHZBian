<template>
  <div>
    <shops-header @showShare="getShowShare"  @searchName="getSearchName"></shops-header>
    <shops-banner :img="shopImg"></shops-banner>
    <shops-info
      :name="shopName"
      :address="shopAddress"
      :tel="shopTel"
      :range="shopRange"
      :isFinish="isFinish"
      :lng="lng"
      :lat="lat"
      @handleStoreUp="storeUp">
    </shops-info>
    <h3 class="main-title">店铺商品</h3>
    <shops-goods :list="goods"></shops-goods>
    <common-share :isShowShare="showShareValue"></common-share>
    <div style="height:1rem;"></div>
  </div>
</template>

<script>
import ShopsHeader from './components/Header'
import ShopsBanner from './components/Banner'
import ShopsInfo from './components/Info'
import ShopsGoods from './components/Goods'
import CommonShare from '@/pages/common/share/Share'
import axios from 'axios'
import BMap from 'BMap'
export default {
  name: 'Shops',
  data () {
    return {
      shopName: '',
      shopAddress: '',
      shopTel: '',
      shopImg: '',
      shopRange: '',
      goods: [],
      showShareValue: '',
      lng: '',
      lat: '',
      isFinish: false
    }
  },
  components: {
    ShopsHeader,
    ShopsBanner,
    ShopsInfo,
    ShopsGoods,
    CommonShare
  },
  methods: {
    getShopInfo () {
      axios.get('/home/index/getMersInfo', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getShopInfoSucc)
    },
    getShopInfoSucc (res) {
      res = res.data
      if (res.ret === true) {
        const data = res.data
        this.goods = data.goodsList
        this.shopName = data.shopName
        this.shopAddress = data.shopAddress
        this.shopTel = data.shopTel
        this.shopImg = data.shopImg
        this.lng = data.lng
        this.lat = data.lat
        if (localStorage.shopList) {
          let storeList = JSON.parse(localStorage.shopList)
          storeList.forEach((e) => {
            if (parseInt(this.$route.params.id) === parseInt(e.id)) this.isFinish = true
          })
        }
        this.getRange()
      }
    },
    getRange () {
      let map = new BMap.Map('map')
      let pointA
      try {
        if (localStorage.lng) {
          pointA = new BMap.Point(localStorage.lng, localStorage.lat)
        } else {
          pointA = new BMap.Point(this.$store.state.addr.lng, this.$store.state.addr.lat)
        }
      } catch (e) {}
      let pointB = new BMap.Point(this.lng, this.lat)
      let range = map.getDistance(pointA, pointB)
      if (parseInt(range) > 1000) {
        range = (Math.round(range) / 1000).toFixed(2) + 'km'
      } else {
        range = parseInt(range) + 'm'
      }
      this.shopRange = range
    },
    storeUp () {
      let shop = []
      let status = true
      let shopInfo = {
        id: this.$route.params.id,
        name: this.shopName,
        address: this.shopAddress,
        tel: this.shopTel,
        img: this.shopImg,
        lng: this.lng,
        lat: this.lat,
        range: 0
      }
      shop.push(shopInfo)
      if (localStorage.shopList) {
        let storeList = JSON.parse(localStorage.shopList)
        storeList.forEach(function (e) {
          if (parseInt(shopInfo.id) === parseInt(e.id)) status = false
        })
        if (status) {
          storeList = storeList.concat(shop)
          localStorage.shopList = JSON.stringify(storeList)
          this.isFinish = true
        }
      } else {
        localStorage.shopList = JSON.stringify(shop)
        this.isFinish = true
      }
    },
    getShowShare (value) {
      this.showShareValue = value
    },
    getSearchName (value) {
      this.goods = value
    }
  },
  mounted () {
    this.getShopInfo()
    this.goodsName = ''
  }
}
</script>

<style lang="stylus" scoped>
  .main-title
    line-height: .8rem
    padding-left: .2rem
    font-size: .32rem
    font-weight: normal
</style>
