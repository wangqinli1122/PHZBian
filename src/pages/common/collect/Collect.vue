<template>
  <div>
    <collect-header @switchShow="handleSwitchShow"></collect-header>
    <div class="title"></div>
    <collect-shops :list="shopsList" @delShop="handleDelShop" v-show="isListShow"></collect-shops>
    <div class="nones" v-show="isShow">暂无收藏内容</div>
  </div>
</template>

<script>
import CollectHeader from './components/Header'
import CollectGoods from '@/pages/goodsSearch/components/Goods'
import CollectShops from './components/Shops'
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
      isShow: false,
      isListShow: true
    }
  },
  methods: {
    getStoreUpList () {
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
            c.range = c.range + 'm'
          }
        })
        this.isShow = false
        if (localStorage.shopList === '[]') {
          this.isShow = true
        }
      } else {
        this.isShow = true
      }
    },
    handleDelShop (id) {
      let shopList = JSON.parse(localStorage.shopList)
      shopList.forEach((e, index) => {
        if (parseInt(e.id) === parseInt(id)) {
          shopList.splice(index, 1)
          localStorage.shopList = JSON.stringify(shopList)
          this.getStoreUpList()
        }
      })
    },
    handleSwitchShow (status) {
      if (status) {
        this.isListShow = true
      } else {
        this.isListShow = false
      }
    }
  },
  mounted () {
    this.getStoreUpList()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .title
    padding-top: .2rem
    height: $headerHeight
  .nones
    font-size: .32rem
    color: #ccc
    text-align: center
    line-height: 1rem
</style>
