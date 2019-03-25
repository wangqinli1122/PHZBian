<template>
  <div>
    <goods-header @showShare="getShowShare"></goods-header>
    <goods-swiper :list="goodsimg"></goods-swiper>
    <goods-info
      :sName="shopName"
      :sAddr="shopAddress"
      :sTel="shopTel"
      :gName="goodsname"
      :content="content"
      :goodsprice="goodsprice"
      :lat="lat"
      :lng="lng"
      :range="range"
      :isFinish="isFinish"
      @handleStoreUp="storeUp"
    ></goods-info>
    <common-share :isShowShare="showShareValue"></common-share>
  </div>
</template>

<script>
import GoodsHeader from './components/Header'
import GoodsSwiper from './components/Swiper'
import GoodsInfo from './components/Info'
import CommonShare from '@/pages/common/share/Share'
import axios from 'axios'
import BMap from 'BMap'
export default {
  name: 'Goods',
  components: {
    CommonShare,
    GoodsHeader,
    GoodsSwiper,
    GoodsInfo
  },
  data () {
    return {
      showShareValue: '',
      shopName: '',
      shopAddress: '',
      shopTel: '',
      goodsname: '',
      goodsprice: '',
      goodsimg: [],
      content: '',
      lat: '',
      lng: '',
      range: '',
      isFinish: false
    }
  },
  methods: {
    getGoodsInfo () {
      axios.get('/home/index/getShopInfo', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getGoodsInfoSucc)
    },
    getGoodsInfoSucc (res) {
      res = res.data
      if (res.ret === true) {
        const data = res.data
        this.shopName = data.shopName
        this.shopAddress = data.shopAddress
        this.shopTel = data.shopTel
        this.goodsname = data.goodsname
        this.goodsprice = data.goodsprice
        this.goodsimg = data.goodsimg
        for (var i = 0; i < this.goodsimg.length; i++) {
          if (typeof this.goodsimg[i] !== 'string') {
            this.goodsimg.splice(i, 1)
            i = i - 1
          }
        }
        this.content = data.content
        this.lat = data.lat
        this.lng = data.lng
        if (localStorage.goodsList) {
          let storeList = JSON.parse(localStorage.goodsList)
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
      this.range = range
    },
    storeUp () {
      let goods = []
      let status = true
      let goodsInfo = {
        id: this.$route.params.id,
        name: this.shopName,
        address: this.shopAddress,
        tel: this.shopTel,
        img: this.goodsimg[0],
        price: this.goodsprice,
        lng: this.lng,
        lat: this.lat,
        range: 0
      }
      goods.push(goodsInfo)
      if (localStorage.goodsList) {
        let storeList = JSON.parse(localStorage.goodsList)
        storeList.forEach(function (e) {
          if (parseInt(goodsInfo.id) === parseInt(e.id)) status = false
        })
        if (status) {
          storeList = storeList.concat(goods)
          localStorage.goodsList = JSON.stringify(storeList)
          this.isFinish = true
        }
      } else {
        localStorage.goodsList = JSON.stringify(goods)
        this.isFinish = true
      }
    },
    getShowShare (value) {
      this.showShareValue = value
    }
  },
  mounted () {
    this.getGoodsInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
