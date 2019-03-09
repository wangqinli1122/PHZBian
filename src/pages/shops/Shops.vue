<template>
  <div>
    <shops-header @showShare="getShowShare"  @searchName="getSearchName"></shops-header>
    <shops-banner :img="shopImg"></shops-banner>
    <shops-info
      :name="shopName"
      :address="shopAddress"
      :tel="shopTel">
    </shops-info>
    <h3 class="main-title">店铺商品</h3>
    <shops-goods :list="goods" :getGoodsName="goodsName"></shops-goods>
    <common-share :isShowShare="showShareValue"></common-share>
  </div>
</template>

<script>
import ShopsHeader from './components/Header'
import ShopsBanner from './components/Banner'
import ShopsInfo from './components/Info'
import ShopsGoods from './components/Goods'
import CommonShare from '@/pages/common/share/Share'
import axios from 'axios'
export default {
  name: 'Shops',
  data () {
    return {
      shopName: '',
      shopAddress: '',
      shopTel: '',
      shopImg: '',
      goods: [],
      showShareValue: '',
      goodsName: ''
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
    getHomeInfo () {
      axios.get('/home/index/getMersInfo', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret === true) {
        const data = res.data
        this.goods = data.goodsList
        this.shopName = data.shopName
        this.shopAddress = data.shopAddress
        this.shopTel = data.shopTel
        this.shopImg = data.shopImg
      }
    },
    getShowShare (value) {
      this.showShareValue = value
    },
    getSearchName (value) {
      this.goodsName = value
    }
  },
  mounted () {
    this.getHomeInfo()
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
