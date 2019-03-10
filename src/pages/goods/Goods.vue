<template>
  <div>
    <goods-header></goods-header>
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
    ></goods-info>
    <div style="height:30rem;"></div>
  </div>
</template>

<script>
import GoodsHeader from './components/Header'
import GoodsSwiper from './components/Swiper'
import GoodsInfo from './components/Info'
import axios from 'axios'
export default {
  name: 'Goods',
  components: {
    GoodsHeader,
    GoodsSwiper,
    GoodsInfo
  },
  data () {
    return {
      shopName: '',
      shopAddress: '',
      shopTel: '',
      goodsname: '',
      goodsprice: '',
      goodsimg: [],
      content: '',
      lat: '',
      lng: ''
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
        this.content = data.content
        this.lat = data.lat
        this.lng = data.lng
      }
    }
  },
  mounted () {
    this.getGoodsInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
