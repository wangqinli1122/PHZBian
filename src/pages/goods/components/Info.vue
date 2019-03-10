<template>
  <div class="info">
    <div class="range">
      <span class="range-left">¥</span>{{this.goodsprice}}
      <div class="range-right">
        <span class="iconfont back-icon">&#xe655;</span>1.2km
      </div>
    </div>
    <h3 class="name">{{this.gName}}</h3>
    <p class="goodsDesc">外套男士</p>
    <div class="cutoff border-bottom"></div>
    <div class="content border-topbottom">
      <span class="iconfont content-left border-right">&#xe633;</span>
      <div class="center" @click="handleClickNavigation">
        <h4 class="title">{{this.sName}}</h4>
        <p class="desc">{{this.sAddr}}</p>
      </div>
      <a class="iconfont content-right border-left" :href="'tel:' + sTel">&#xe60f;</a>
    </div>
    <div class="cutoff border-bottom"></div>
    <h3 class="wrap-title border-bottom">
      <span>——</span>
      商品详情
      <span>——</span>
    </h3>
    <div class="container">{{this.content}}</div>
  </div>
</template>

<script>
export default {
  name: 'ShopsInfo',
  props: {
    sName: String,
    sAddr: String,
    sTel: String,
    gName: String,
    content: String,
    goodsprice: String,
    lat: String,
    lng: String
  },
  methods: {
    handleClickNavigation () {
      this.$router.push('www.baidu.com')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .border-topbottom
    &::after
      barder-color: #ccc
  .border-right
    &::after
      border-color: #ccc
  .border-left
    &::after
      border-color: #ccc
  .border-bottom
    &::after
      border-color: #ccc
  .range
    color: red
    font-size: .4rem
    font-weight: bold
    padding: .2rem
    .range-left
      font-size: .32rem
    .range-right
      float: right
      color: $grayColor
      font-size: .3rem
      font-weight: normal
      .back-icon
        font-size: .35rem
  .name
    font-size: .32rem
    font-weight: bold
    padding: .1rem .2rem .2rem
    ellipsis()
  .goodsDesc
    line-height: .36rem
    padding: .2rem
    color: $grayColor
    display: none
  .content
    display: flex
    .content-left
      width: .9rem
      text-align: center
      float: left
      line-height: .94rem
      margin: .1rem 0
      font-size: .36rem
      color: $grayColor
    .center
      flex: 1
      min-width: 0
      margin: .16rem 0
      .title,.desc
        line-height: .44rem
        padding-left: .2rem
        font-size: .32rem
        ellipsis()
      .desc
        font-size: .28rem
        color: $grayColor
    .content-right
      width: .9rem
      text-align: center
      float: right
      line-height: .94rem
      margin: .1rem 0
      font-size: .36rem
      color: $bgColor
  .cutoff
    height: .3rem
    background: #eee
  .wrap-title
    padding-top: .2rem
    padding-bottom: .2rem
    color: $grayColor
    text-align: center
  .container
    width: 100%
    img
      width: 100%
</style>
