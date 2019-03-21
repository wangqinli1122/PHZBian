<template>
  <div>
    <house-header></house-header>
    <div class="title"></div>
    <div class="shops-box">
      <h3 class="main-title">收藏的店铺</h3>
      <house-shops :list="shopsList" @delShop="handleDelShop"></house-shops>
      <router-link to="/collect/" class="shop-more store-more">更多···</router-link>
    </div>
    <div class="cutoff border-bottom"></div>
    <div class="shops-box">
      <h3 class="main-title">收藏的商品</h3>
      <house-goods :list="goodsList" @delGoods="handleDelGoods"></house-goods>
      <router-link to="/collect/" class="goods-more store-more">更多···</router-link>
    </div>
  </div>
</template>

<script>
import HouseHeader from './components/Header'
import HouseShops from './components/Shops'
import HouseGoods from './components/Goods'
import BMap from 'BMap'
export default {
  name: 'House',
  components: {
    HouseHeader,
    HouseShops,
    HouseGoods
  },
  data () {
    return {
      shopsList: [],
      goodsList: []
    }
  },
  methods: {
    getShopList () {
      let map = new BMap.Map('map')
      let pointA
      try {
        if (localStorage.lng) {
          pointA = new BMap.Point(localStorage.lng, localStorage.lat)
        } else {
          pointA = new BMap.Point(this.$store.state.addr.lng, this.$store.state.addr.lat)
        }
      } catch (e) {}
      if (localStorage.shopList) {
        this.shopsList = JSON.parse(localStorage.shopList)
        this.shopsList.forEach(function (c) {
          let pointB = new BMap.Point(c.lng, c.lat)
          c.range = map.getDistance(pointA, pointB)
          if (parseInt(c.range) > 1000) {
            c.range = (Math.round(c.range) / 1000).toFixed(2) + 'km'
          } else {
            c.range = parseInt(c.range) + 'm'
          }
        })
        if (this.shopsList.length > 2) {
          this.shopsList = this.shopsList.slice(0, 2)
        }
      }
    },
    handleDelShop (id) {
      let shopList = JSON.parse(localStorage.shopList)
      shopList.forEach((e, index) => {
        if (parseInt(e.id) === parseInt(id)) {
          shopList.splice(index, 1)
          localStorage.shopList = JSON.stringify(shopList)
          this.getShopList()
        }
      })
    },
    getGoodsList () {
      let map = new BMap.Map('map')
      let pointA
      try {
        if (localStorage.lng) {
          pointA = new BMap.Point(localStorage.lng, localStorage.lat)
        } else {
          pointA = new BMap.Point(this.$store.state.addr.lng, this.$store.state.addr.lat)
        }
      } catch (e) {}
      if (localStorage.goodsList) {
        this.goodsList = JSON.parse(localStorage.goodsList)
        this.goodsList.forEach(function (c) {
          let pointB = new BMap.Point(c.lng, c.lat)
          c.range = map.getDistance(pointA, pointB)
          if (parseInt(c.range) > 1000) {
            c.range = (Math.round(c.range) / 1000).toFixed(2) + 'km'
          } else {
            c.range = parseInt(c.range) + 'm'
          }
        })
        if (this.goodsList.length > 2) {
          this.goodsList = this.goodsList.slice(0, 2)
        }
      }
    },
    handleDelGoods (id) {
      let goodsList = JSON.parse(localStorage.goodsList)
      goodsList.forEach((e, index) => {
        if (parseInt(e.id) === parseInt(id)) {
          goodsList.splice(index, 1)
          localStorage.goodsList = JSON.stringify(goodsList)
          this.getGoodsList()
        }
      })
    }
  },
  mounted () {
    this.getShopList()
    this.getGoodsList()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-bottom
    &::after
      border-color: #ccc
  .title
    padding-top: .2rem
    height: $headerHeight
  .shops-box
    overflow: hidden
    .main-title
      line-height: .8rem
      padding-left: .2rem
      font-size: .32rem
      font-weight: bold
    .store-more
      padding-left: .2rem
      font-weight: bold
      font-size: .32rem
      color: $grayColor
      line-height: 1.2rem
  .cutoff
    height: .3rem
    background: #eee
</style>
