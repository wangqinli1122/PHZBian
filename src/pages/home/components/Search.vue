<template>
  <div class="search">
    <img class="logo" src="@/assets/images/logo.png" >
    <div class="search-box">
      <div class="search_switch">
        <div :class="[selectClass, activeClass]" @click="handleClickSelect">商品
        </div>
        <div :class="[selectClass, notactiveClass]" @click="handleClickSelect">店铺
        </div>
      </div>
      <div class="search-b" v-show="active">
        <input type="text" v-model="goodContent" :class="inputClass" placeholder="请输入商品名称">
        <button class="search-button" @click="handleClickGoods"><span class="iconfont back-icon">&#xe6aa;</span></button>
      </div>
      <div class="search-b" v-show="!active">
        <input type="text" v-model="content" :class="inputClass" placeholder="请输入店铺名称">
        <button class="search-button" @click="handleClickShop"><span class="iconfont back-icon">&#xe6aa;</span></button>
      </div>
    </div>
    <ul class="search-common" v-show="active">
      <li class="common" style="margin:0">热门搜索：</li>
      <li class="common" v-for="item of hotGoodsList" :key="item.id" @click="handleClickHotGoods">{{item.msg}}</li>
    </ul>
    <ul class="search-common" v-show="!active">
      <li class="common" style="margin:0">热门搜索：</li>
      <li class="common" v-for="item of hotShopsList" :key="item.id" @click="handleClickHotShop">{{item.msg}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeSearch',
  props: {
    hotShopsList: Array,
    hotGoodsList: Array
  },
  data () {
    return {
      goodsName: '',
      shopName: '',
      content: '',
      goodContent: '',
      selectClass: 'search_selected',
      inputClass: 'search-text',
      active: true
    }
  },
  computed: {
    activeClass () {
      return {
        'active': !this.active
      }
    },
    notactiveClass () {
      return {
        'active': this.active
      }
    }
  },
  methods: {
    handleClickSelect (obj) {
      if (obj.target.getAttribute('class').indexOf('active') > 0) {
        this.active === true ? this.active = false : this.active = true
      }
    },
    handleClickShop () {
      if (this.content !== '') {
        this.$router.push({
          name: 'ShopSearch',
          params: {
            name: this.content,
            lng: this.$store.state.addr.lng,
            lat: this.$store.state.addr.lat,
            page: 1
          }
        })
      }
    },
    handleClickGoods () {
      if (this.goodContent !== '') {
        this.$router.push({
          name: 'GoodsSearch',
          params: {
            name: this.goodContent,
            lng: this.$store.state.addr.lng,
            lat: this.$store.state.addr.lat,
            page: 1
          }
        })
      }
    },
    handleClickHotGoods (obj) {
      this.goodContent = obj.target.innerHTML
      this.handleClickGoods()
    },
    handleClickHotShop (obj) {
      this.content = obj.target.innerHTML
      this.handleClickShop()
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/variables.styl'
 .border-bottom
    &:before
      border-color: #ccc
  .search
    margin-top: 1.4rem
    text-align: center
    .logo
      width: 3rem
      margin-bottom: 1rem
    .search-box
      position: relative
      margin: .4rem .2rem 0
      border: 1px #ccc solid
      input::-webkit-input-placeholder { /* WebKit browsers */
        color: $grayColor;
      }
      input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: $grayColor;
      }
      input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: $grayColor;
      }
      input:-ms-input-placeholder { /* Internet Explorer 10+ */
        color:  $grayColor;
      }
      .search_switch
        position: absolute
        top: -.62rem
        left: -1px
        z-index: 1
        .search_selected
          display: inline-block
          height: .6rem
          line-height: .6rem
          padding: 0 .2rem
          font-size: .28rem
          background: $bgColor
          color: #fff
        .active
          color: $grayColor
          background: #fff
      .search-b
        display: flex
        .search-text
          flex: 1
          height: .66rem
          line-height: .66rem
          width: 100%
          text-indent: .2rem
          color: $grayColor
        .search-button
          width: .8rem
          height: .66rem
          line-height: .66rem
          background: #fff
          color: $bgColor
          .back-icon
            font-size: .32rem
    .search-common
      margin: .15rem .2rem
      overflow: hidden
      .common
        float: left
        text-align: center
        padding: .04rem
        margin-right: .2rem
        font-family: '宋体'
        color: #888
</style>
