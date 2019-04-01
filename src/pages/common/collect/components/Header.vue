<template>
  <div class="wrapper">
    <div class="header">
      <router-link to="" class="header-left" @click.native="$router.back(-1)">
        <span class="iconfont back-icon">&#xe617;</span>
      </router-link>
      <div class="header-center">
        <span :class="{ nav: hasNav, active: this.$store.state.isCollectShow}" @click="handleSwitch">店铺</span>
        <span :class="{ nav: hasNav, active: !this.$store.state.isCollectShow}" @click="handleSwitch">商品</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectHeader',
  data () {
    return {
      hasNav: true
    }
  },
  methods: {
    handleSwitch (e) {
      if (e.target.className.indexOf('active') < 0) {
        if (this.$store.state.isCollectShow === true) {
          this.$store.commit('changeShowCollect', false)
        } else {
          this.$store.commit('changeShowCollect', true)
        }
      }
    }
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
        position: absolute
        top: 0
        left: 50%
        margin-left: -1.72rem
        display: inline-block
        color: $grayColor
        font-size: .36rem
        width: 100%
        .nav
          margin: 0 .5rem
          box-sizing: border-box
          display: inline-block
          height: $headerHeight
        .active
          color: $bgColor
          border-bottom: .06rem solid $bgColor
          font-size: .40rem
</style>
