<template>
  <div class="header">
    <div class="header-login">
      <span class="iconfont back-icon">&#xe62f;</span>
      <span class="header-login-name">登录</span>
    </div>
    <div class="header-search">
      <input type="text" class="header-search-input">
      <span class="iconfont back-icon">&#xe6aa;</span>
    </div>
    <div class="header-list" @click="handleClickShowList">
      <span class="iconfont back-icon">&#xe602;</span>
    </div>
    <ul class="header-float" v-show="showList">
      <li class="list border-bottom"><span class="iconfont list-icon">&#xe687;</span>收藏</li>
      <li class="list border-bottom"><span class="iconfont list-icon">&#xe626;</span>分享</li>
      <li class="list"><span class="iconfont list-icon">&#xe627;</span>首页</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      showList: false
    }
  },
  methods: {
    handleClickShowList () {
      this.showList === false ? this.showList = true : this.showList = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-bottom
    &:before
      border-color: #fff
  .header
    height: $headerHeight
    line-height: $headerHeight
    display: flex
    position: fixed
    top: 0
    left: 0
    right: 0
    .header-login
      width: 1.1rem
      padding-left: .2rem
      padding-right: .1rem
      display: flex
      float: left
      color: $grayColor
      font-size: .2rem
      .back-icon
        font-size: .36rem
      .header-login-name
        flex: 1
        text-align: center
    .header-search
      flex: 1
      position: relative
      .header-search-input
        width: 100%
        height: .42rem
        padding-left: .5rem
        box-sizing: border-box
        line-height: .42rem
        border-radius: .04rem
        font-size: .24rem
        background: #ebebeb
      .back-icon
        font-size: .24rem
        position: absolute
        top: .04rem
        left: .08rem
    .header-list
      width: .56rem
      padding-left: .2rem
      float: right
      color: $grayColor
      .back-icon
        font-size: .36rem
    .header-float
      width: .76rem
      height: 1.36rem
      padding: .12rem .24rem
      border-radius: .04rem
      background: $grayColor
      position: absolute
      top: .6rem
      right: .2rem
      color: white
      .list
        height: .45rem
        line-height: .45rem
        font-size: .2rem
        .list-icon
          font-size: .2rem
          padding-right: .04rem
</style>
