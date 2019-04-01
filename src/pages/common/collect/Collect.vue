<template>
  <div>
    <collect-header></collect-header>
    <div class="title"></div>
    <collect-shops :list="shopsList" @delShop="handleDelShop" v-show="this.$store.state.isCollectShow"></collect-shops>
    <collect-goods :list="goodsList" @delGoods="handleDelGoods" v-show="!this.$store.state.isCollectShow"></collect-goods>
  </div>
</template>

<script>
import CollectHeader from './components/Header'
import CollectShops from './components/Shops'
import CollectGoods from './components/Goods'
import BMap from 'BMap'
export default {
  name: 'Collect',
  components: {
    CollectHeader,
    CollectGoods,
    CollectShops
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
  computed: {
    getLocationPage () {
      return this.$store.state.addr.lng
    }
  },
  watch: {
    getLocationPage (cur, old) {
      this.getShopList()
      this.getGoodsList()
    }
  },
  mounted () {
    if (this.$store.state.addr.lng) {
      this.getShopList()
      this.getGoodsList()
    } else {
      this.$store.commit('getLocation')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .title
    padding-top: .2rem
    height: $headerHeight
</style>
