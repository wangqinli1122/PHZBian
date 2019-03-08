<template>
  <div>
    <search-header @showShare="getShowShare" @searchName="getSearchName" :name="shopName"></search-header>
    <h3 class="main-title">周边商家</h3>
    <common-shops :list="shops"></common-shops>
    <common-share :isShowShare="showShareValue"></common-share>
    <div class="non" v-show="non">暂无相关内容</div>
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
      showShareValue: '',
      shopName: this.$route.params.name,
      page: '',
      non: false
    }
  },
  components: {
    SearchHeader,
    CommonShare,
    CommonShops
  },
  methods: {
    getShopList () {
      axios.get('/api/index.php/home/index/searchMers', {
        params: {
          lat: this.$route.params.lat,
          lng: this.$route.params.lng,
          name: this.shopName,
          page: this.$route.params.page
        }
      }).then(this.getShopListSucc)
    },
    getShopListSucc (res) {
      res = res.data
      if (res.ret === true) {
        const data = res.data
        this.shops = data.merchantList
        if (this.shops.length < 1) {
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
    this.getShopList()
  },
  activated () {
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
  .non
    font-size: .32rem
    color: #ccc
    text-align: center
    line-height: 1rem
</style>
