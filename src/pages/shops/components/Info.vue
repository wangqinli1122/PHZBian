<template>
  <div class="info">
    <h3 class="name">{{this.name}}</h3>
    <div class="content border-topbottom">
      <span class="iconfont content-left border-right">&#xe655;</span>
      <div class="center">
        <h4 class="title">{{this.address}}</h4>
        <p class="desc">距离我{{this.range}}</p>
      </div>
      <a class="iconfont content-right border-left" href="tel:18688888888">&#xe60f;</a>
    </div>
    <div class="cutoff border-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'ShopsInfo',
  props: {
    name: String,
    address: String,
    range: String,
    tel: String
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
  .name
    font-size: .32rem
    line-height: .8rem
    padding-left: .2rem
  .content
    display: flex
    .content-left
      width: .88rem
      text-align: center
      float: left
      line-height: .68rem
      margin: .1rem 0
      color: $grayColor
    .center
      flex: 1
      min-width: 0
      .title,.desc
        line-height: .44rem
        padding-left: .2rem
        ellipsis()
      .desc
        font-size: .2rem
        color: $grayColor
    .content-right
      width: .88rem
      text-align: center
      float: right
      line-height: .68rem
      margin: .1rem 0
      color: $bgColor
  .cutoff
    height: .3rem
    background: #eee
</style>
