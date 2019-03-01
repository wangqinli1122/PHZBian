<template>
  <div>
    <search-header @showShare="getShowShare"></search-header>
    <h3 class="main-title">周边商品</h3>
    <search-goods :list="goods"></search-goods>
    <common-share :isShowShare="showShareValue"></common-share>
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
      showShareValue: ''
    }
  },
  components: {
    SearchHeader,
    CommonShare,
    SearchGoods
  },
  methods: {
    getGoodsList () {
      axios.get('/api/goodsList.json').then(this.getGoodsListSucc)
    },
    getGoodsListSucc (res) {
      res = res.data
      console.log(res)
      if (res.ret === true) {
        const data = res.data
        this.goods = data.goodsList
      }
    },
    getShowShare (value) {
      this.showShareValue = value
    }
  },
  mounted () {
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
</style>
