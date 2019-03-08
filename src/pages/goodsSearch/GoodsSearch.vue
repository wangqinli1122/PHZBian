<template>
  <div>
    <search-header @showShare="getShowShare" @searchName="getSearchName" :name="shopName"></search-header>
    <h3 class="main-title">周边商品</h3>
    <search-goods :list="goods"></search-goods>
    <common-share :isShowShare="showShareValue"></common-share>
    <div class="non" v-show="non">暂无相关内容</div>
  </div>
</template>

<script>
import SearchHeader from './components/Header'
import SearchGoods from './components/Goods'
import CommonShare from '@/pages/common/share/Share'
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      goods: [],
      showShareValue: '',
      goodsName: this.$route.params.name,
      page: '',
      non: false
    }
  },
  components: {
    SearchHeader,
    CommonShare,
    SearchGoods
  },
  methods: {
    getGoodsList () {
      axios.get('/api/index.php/home/index/searchShops', {
        params: {
          lat: this.$route.params.lat,
          lng: this.$route.params.lng,
          name: this.goodsName,
          page: this.$route.params.page
        }
      }).then(this.getGoodsListSucc)
    },
    getGoodsListSucc (res) {
      res = res.data
      console.log(res)
      if (res.ret === true) {
        const data = res.data
        this.goods = data.goodsList
        if (this.goods.length < 1) {
          this.non = true
        } else {
          this.non = false
        }
      }
    },
    getShowShare (value) {
      this.showShareValue = value
    },
    getSearchName (value) {
      console.log(value)
      this.shopName = value
      this.getShopList()
    }
  },
  mounted () {
    this.getGoodsList()
  },
  activated () {
    this.getGoodsList()
  }
}
</script>

<style lang="stylus" scoped>
  .main-title
    line-height: .8rem
    padding-left: .2rem
    margin-top: .8rem
    font-size: .32rem
    font-weight: normal
  .non
    font-size: .32rem
    color: #ccc
    text-align: center
    line-height: 1rem
</style>
