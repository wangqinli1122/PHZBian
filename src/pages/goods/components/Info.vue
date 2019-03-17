<template>
  <div class="info">
    <div class="range">
      <span class="range-left">¥</span>{{this.goodsprice}}
      <div class="range-right">
        <span :class="{ iconfont: true, store_up: true, store_finish: this.isFinish}" @click="handleStore">&#xe687;</span>收藏
        <span class="iconfont back-icon" style="padding-left: .2rem">&#xe655;</span>{{this.range}}
      </div>
    </div>
    <h3 class="name">{{this.sName}}</h3>
    <p class="goodsDesc">外套男士</p>
    <div class="cutoff border-bottom"></div>
    <div class="content border-topbottom">
      <span class="iconfont content-left border-right">&#xe633;</span>
      <div class="center" @click="handleClickNavigation">
        <h4 class="title">{{this.gName}}</h4>
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
    lng: String,
    range: String,
    isFinish: Boolean
  },
  methods: {
    handleClickNavigation () {
      if (localStorage.lng) {
        window.location.href = 'http://api.map.baidu.com/direction?origin=latlng:' + localStorage.lat + ',' + localStorage.lng + '|name:我的位置&destination=latlng:' + this.lat + ',' + this.lng + '|name:' + this.sAddr + '&mode=driving&region=成都&output=html&src=webapp.baidu.openAPIdemo'
      }
    },
    handleStore () {
      this.$emit('handleStoreUp')
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
      .store_up
        font-size: .36rem
        color: $grayColor
        padding-left: .2rem
      .store_finish
        color: orange
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
      cursor: pointer
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
