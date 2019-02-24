<template>
  <div class="shops-box">
    <h3 class="title border-bottom">
      <span>——</span>
      周边商家
      <span>——</span>
    </h3>
    <ul class="shops-list border-bottom">
      <li class="shop">
        <div class="shop-img-box">
          <img src="@/assets/images/shop-img1.jpg" alt="" class="shop-img">
        </div>
        <div class="shop-info">
          <h4 class="shop-title">老凤祥</h4>
          <p class="shop-content">锦江区东大街紫东楼段156号附31号</p>
          <div class="shop-range"><span class="iconfont">&#xe655;</span>1.2km</div>
        </div>
        <span class="iconfont shop-right">&#xe60a;</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeShops'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .border-bottom
    &:before
      border-color: #ccc
  .shops-box
    padding: .1rem .2rem
    .title
      padding-top: .2rem
      padding-bottom: .2rem
      color: $grayColor
      text-align: center
    .shop
      display: flex
      padding: .15rem 0
      .shop-img-box
        width: 1.2rem
        height: 1.2rem
        float: left
        margin-right: .15rem
        overflow: hidden
        text-align: center
        .shop-img
          height: 100%
          margin: 0 -100%
      .shop-info
        flex: 1
        min-width: 0
        .shop-title
          line-height: .4rem
          font-size: .32rem
          ellipsis()
        .shop-content
          line-height: .5rem
          color: $grayColor
          ellipsis()
        .shop-range
          color: $grayColor
          font-size: .18rem
      .shop-right
        line-height: 1.2rem
        float: right
        font-size: .18rem
        color: $grayColor
</style>
