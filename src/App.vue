<template>
  <div id="app">
    <keep-alive exclude="Goods">
      <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    let loading = document.getElementById('Loading')
    if (loading != null) {
      document.body.removeChild(loading)
    }
  }
}
</script>

<style lang="stylus" scoped>
  #app
    max-width: 640px
    margin: 0 auto
</style>
