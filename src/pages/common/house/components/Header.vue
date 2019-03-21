<template>
  <div class="wrapper">
    <div class="header">
      <router-link to="" class="header-left" @click.native="$router.back(-1)">
        <span class="iconfont back-icon">&#xe617;</span>
      </router-link>
      <div class="header-center">收藏列表</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HouseHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-bottom
    &:before
      border-color: #fff
  .wrapper
    max-width: 640px
    height: $headerHeight
    margin:0 auto
    background: #f4f4f4
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
</style>
