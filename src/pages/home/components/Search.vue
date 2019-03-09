<template>
  <div class="search">
    <img class="logo" src="@/assets/images/logo.png" >
    <div class="search-box">
      <div class="search_switch">
        <div :class="[selectClass, activeClass]" @click="handleClickSelect">商品
          <div class="search-cover" v-show="active"></div>
        </div>
        <div :class="[selectClass, notactiveClass]" @click="handleClickSelect">店铺
          <div class="search-cover" v-show="!active"></div>
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
      <li class="common border-bottom" v-for="item of hotGoodsList" :key="item.id" @click="handleClickHotGoods">{{item.msg}}</li>
    </ul>
    <ul class="search-common" v-show="!active">
      <li class="common border-bottom" v-for="item of hotShopsList" :key="item.id" @click="handleClickHotShop">{{item.msg}}</li>
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
            lng: 104,
            lat: 30,
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
            lng: 104,
            lat: 30,
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
    margin-top: 1.08rem
    text-align: center
    .logo
      width: 3.8rem
      margin-bottom: .45rem
    .search-box
      position: relative
      margin: .4rem .2rem 0
      box-shadow: 0 0 .1rem #ccc
      border: 1px #eee solid;
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
        top: -.56rem
        left: 0
        z-index: 1
        .search_selected
          position: relative
          display: inline-block
          height: .36rem
          line-height: .36rem
          padding: .1rem .2rem
          box-shadow: 0 0 .06rem #ccc
          color: #444
        .search-cover
          height: .15rem
          position: absolute
          bottom: -.05rem
          left: 0
          right: 0
          z-index: 2
          background: #fff
        .active
          background: #ddd
      .search-b
        display: flex
        .search-text
          flex: 1
          height: .6rem
          line-height: .6rem
          width: 100%
          text-indent: .2rem
          color: $grayColor
        .search-button
          width: .8rem
          height: .6rem
          line-height: .6rem
          background: $bgColor
          color: white
          .back-icon
            font-size: .32rem
    .search-common
      margin: .15rem .2rem
      overflow: hidden
      .common
        float: left
        text-align: center
        padding: .08rem
        margin-right: .2rem
        font-size: .3rem
        color: $grayColor
</style>
