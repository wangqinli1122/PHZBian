<template>
  <div>
    <search-header @showShare="getShowShare"></search-header>
    <h3 class="main-title">周边商家</h3>
    <common-shops :list="shops"></common-shops>
    <common-share :isShowShare="showShareValue"></common-share>
  </div>
</template>

<script>
import SearchHeader from './components/Header'
import CommonShops from '@/pages/common/shops/Shops'
import CommonShare from '@/pages/common/share/Share'
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      shops: [],
      showShareValue: ''
    }
  },
  components: {
    SearchHeader,
    CommonShare,
    CommonShops
  },
  methods: {
    getShopList () {
      axios.get('/api/shopsList.json').then(this.getShopListSucc)
    },
    getShopListSucc (res) {
      res = res.data
      if (res.ret === true) {
        const data = res.data
        this.shops = data.merchantList
      }
    },
    getShowShare (value) {
      this.showShareValue = value
    }
  },
  mounted () {
    this.getShopList()
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
