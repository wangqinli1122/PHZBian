<template>
  <div class="banner">
    <img class="img" :src="img">
  </div>
</template>

<script>
export default {
  name: 'ShopsBanner',
  props: {
    img: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .banner
    margin-top: $headerHeight
    height: 0
    overflow: hidden
    padding-bottom: 50%
    .img
      width:100%
</style>
