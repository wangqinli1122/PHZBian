<template>
  <div @click="setIconHide">
    <search-header @showShare="getShowShare" @searchName="getSearchName" :name="goodsName"></search-header>
    <h3 class="main-title">周边商品</h3>
    <search-goods :list="goods"></search-goods>
    <common-share :isShowShare="showShareValue"></common-share>
    <div class="non" v-show="!non" @click="clickMore">加载更多内容</div>
    <div class="non" v-show="non">暂无更多相关内容</div>
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
      shopName: '',
      goods: [],
      showShareValue: '',
      goodsName: '',
      page: 1,
      non: false
    }
  },
  components: {
    SearchHeader,
    CommonShare,
    SearchGoods
  },
  methods: {
    setIconHide () {
      this.$store.commit('changeShowIcon', false)
    },
    getGoodsList () {
      axios.get('/home/index/searchShops', {
        params: {
          lat: this.$route.params.lat,
          lng: this.$route.params.lng,
          name: this.goodsName,
          page: this.page
        }
      }).then(this.getGoodsListSucc)
    },
    getGoodsListSucc (res) {
      res = res.data
      if (res.ret === true) {
        const data = res.data
        data.goodsList.forEach(function (c) {
          if (c.range > 1000) {
            c.range = (c.range / 1000).toFixed(2) + 'km'
          } else {
            c.range = c.range + 'm'
          }
        })
        this.goods = this.goods.concat(data.goodsList)
        if (this.goods.length < 1) {
          this.non = true
        } else {
          this.non = false
        }
        if (data.goodsList.length < 10) {
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
      this.goodsName = value
      this.goods = []
      this.getGoodsList()
    },
    clickMore () {
      this.page = parseInt(this.page) + 1
      this.getGoodsList()
    }
  },
  mounted () {
    this.goodsName = this.$route.params.name
    this.page = this.$route.params.page
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
