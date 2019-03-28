<template>
  <div class="info">
    <span :class="{ iconfont: true, store_up: true, store_finish: this.isFinish}" @click="handleStore">&#xe687;</span>
    <h3 class="name">{{this.name}}</h3>
    <div class="content border-topbottom">
      <span class="iconfont content-left border-right" @click="setMapShow">&#xe655;</span>
      <div class="center" @click="setMapShow">
        <h4 class="title">{{this.address}}</h4>
        <p class="desc">距离我{{this.range}}</p>
      </div>
      <a class="iconfont content-right border-left" :href="'tel:' + tel">&#xe60f;</a>
    </div>
    <div class="cutoff border-bottom"></div>
    <div class="mapshade" @click="setMapHide" v-show="isShowMap"></div>
    <div class="map" v-show="isShowMap">
      <svg class="icon icon-map" aria-hidden="true" style="width: 1.3rem;height:1.3rem" @click="handleClickBaidu">
        <use xlink:href="#iconbaiduditu"></use>
      </svg>
      <svg class="icon icon-map" aria-hidden="true" @click="handleClickGaode">
        <use xlink:href="#icongaodeditu"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopsInfo',
  props: {
    name: String,
    address: String,
    tel: String,
    range: String,
    lng: String,
    lat: String,
    isFinish: Boolean
  },
  data () {
    return {
      isShowMap: false
    }
  },
  methods: {
    setMapHide () {
      this.isShowMap = false
    },
    setMapShow () {
      this.isShowMap = true
    },
    handleClickGaode () {
      if (localStorage.lng) {
        window.location.href = 'http://m.amap.com/navi/?start=' + localStorage.lng + ',' + localStorage.lat + '&dest=' + this.lng + ',' + this.lat + '&destName=' + this.gName + '&naviBy=car&key=6fedcd016f04de4d297e60149333ff0f&platform=mobile'
      }
    },
    handleClickBaidu () {
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
  .mapshade
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    width: 100%
    height: 100%
    background: #000
    opacity: .5
    z-index: 100
  .map
    position: fixed
    top: 50%
    bottom: 0
    left: 50%
    right: 0
    width: 6rem
    height: 3rem
    margin-top: -1.5rem
    margin-left: -3rem
    border-radius: .4rem
    background: #fff
    z-index: 101
    .icon-map
      width: 1.2rem
      height: 1.2rem
      padding-left: 1.1rem
      padding-top: .9rem
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
    font-weight: bold
    display: inline-block
  .store_up
    font-size: .36rem
    color: $grayColor
    padding-left: .2rem
  .store_finish
    color: orange
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
      margin: .1rem 0
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
      line-height: .88rem
      margin: .1rem 0
      font-size: .36rem
      color: $bgColor
  .cutoff
    height: .3rem
    background: #eee
</style>
