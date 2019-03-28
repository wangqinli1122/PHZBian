<template>
  <div @click="setIconHide">
    <search-header @showShare="getShowShare" @searchName="getSearchName" :name="shopName"></search-header>
    <h3 class="main-title">周边商家</h3>
    <common-shops :list="shops"></common-shops>
    <common-share :isShowShare="showShareValue"></common-share>
    <div class="non" v-show="!non" @click="clickMore">加载更多内容</div>
    <div class="non" v-show="non">暂无更多相关内容</div>
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
      shopName: '',
      page: 1,
      non: false
    }
  },
  components: {
    SearchHeader,
    CommonShare,
    CommonShops
  },
  methods: {
    setIconHide () {
      this.$store.commit('changeShowIcon', false)
    },
    getShopList () {
      axios.get('/home/index/searchMers', {
        params: {
          lat: this.$route.params.lat,
          lng: this.$route.params.lng,
          name: this.shopName,
          page: this.page
        }
      }).then(this.getShopListSucc)
    },
    getShopListSucc (res) {
      res = res.data
      if (res.ret === true) {
        const data = res.data
        data.merchantList.forEach(function (c) {
          if (c.range > 1000) {
            c.range = (c.range / 1000).toFixed(2) + 'km'
          } else {
            c.range = c.range + 'm'
          }
        })
        this.shops = this.shops.concat(data.merchantList)
        if (this.shops.length < 1) {
          this.non = true
        } else {
          this.non = false
        }
        if (data.merchantList.length < 10) {
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
      this.shopName = value
      this.shops = []
      this.getShopList()
    },
    clickMore () {
      this.page = parseInt(this.page) + 1
      this.getShopList()
    }
  },
  mounted () {
    this.shopName = this.$route.params.name
    this.page = this.$route.params.page
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
