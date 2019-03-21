<template>
  <div class="wrapper">
    <div v-show="showHeader">
      <router-link to="" class="header-fixed-left" @click.native="$router.back(-1)">
        <span class="iconfont back-icon">&#xe617;</span>
      </router-link>
      <div class="header-fixed-right">
        <router-link to="/house" tag="span" class="iconfont list-icon">&#xe687;</router-link>
        <span class="iconfont list-icon" @click="showShare">&#xe626;</span>
        <router-link to="/" tag="span" class="iconfont list-icon">&#xe627;</router-link>
      </div>
    </div>
    <div v-show="!showHeader" class="header" :style="opacityStyle">
      <router-link to="" class="header-left" @click.native="$router.back(-1)">
        <span class="iconfont back-icon">&#xe617;</span>
      </router-link>
      <div class="header-center">商品详情</div>
      <div class="header-right">
        <router-link to="/house" tag="span" class="iconfont list-icon">&#xe687;</router-link>
        <span class="iconfont list-icon" @click="showShare">&#xe626;</span>
        <router-link to="/" tag="span" class="iconfont list-icon">&#xe627;</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsHeader',
  data () {
    return {
      opacityStyle: {
        opacity: 0
      },
      showHeader: true,
      isShowShare: false
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 250
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    },
    showShare () {
      this.isShowShare === false ? this.isShowShare = true : this.isShowShare = false
      this.$emit('showShare', this.isShowShare)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.$emit('showShare', this.isShowShare)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-bottom
    &:before
      border-color: #fff
  .wrapper
    max-width: 640px
    margin:0 auto
    height: $headerHeight
    line-height: $headerHeight
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 15
    .header
      background: #f4f4f4
      .header-left
        padding-left: .2rem
        padding-right: .2rem
        float: left
        color: $grayColor
        .back-icon
          font-size: .36rem
      .header-center
        display: inline-block
        color: $grayColor
        font-size: .36rem
      .header-right
        float: right
        color: $grayColor
        .list-icon
          font-size: .36rem
          padding: 0 .24rem 0 .1rem
    .header-fixed-left
      padding-left: .2rem
      padding-right: .2rem
      float: left
      color: #fff
      font-size: .2rem
      .back-icon
        font-size: .32rem
        width: .44rem
        height: .44rem
        line-height: .44rem
        margin-top: .18rem
        border-radius: .22rem
        text-align: center
        background: $grayColor
        display: block
    .header-fixed-right
      float: right
      color: #fff
      .list-icon
        font-size: .32rem
        width: .44rem
        height: .44rem
        line-height: .44rem
        border-radius: .22rem
        text-align: center
        background: $grayColor
        display: block
        margin: .18rem .24rem 0 .1rem
        float: left
</style>
