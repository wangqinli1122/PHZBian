<template>
  <div class="shops">
    <router-link :to="'/shops/'+ item.id" class="shop border-bottom" v-for="item of list" :key="item.id">
      <div class="img-box">
        <img :src="item.img" class="img">
      </div>
      <div class="info">
        <div class="title-box">
          <h4 class="title">{{item.name}}</h4>
          <a class="iconfont back-icon" :href="'tel:'+item.tel" @click="hanldeClickA">&#xe60f;</a>
        </div>
        <p class="content">{{item.address}}</p>
        <div class="range"><span class="iconfont">&#xe655;</span>{{item.range}}</div>
      </div>
      <span class="iconfont details">&#xe60a;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeShops',
  props: {
    list: Array
  },
  methods: {
    hanldeClickA (e) {
      e.stopPropagation()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .border-bottom
    &:before
      border-color: #ccc
  .shops
    padding: 0 .2rem
    .shop
      display: flex
      padding: .15rem 0
      .img-box
        width: 1.2rem
        height: 1.2rem
        float: left
        margin-right: .15rem
        overflow: hidden
        text-align: center
        .img
          height: 100%
          margin: 0 -100%
      .info
        flex: 1
        min-width: 0
        .title-box
          display: flex
          .title
            flex: 1
            line-height: .4rem
            font-size: .32rem
            color: #333
            ellipsis()
          .back-icon
            color: $grayColor
        .content
          height: .5rem
          line-height: .5rem
          color: $grayColor
          ellipsis()
        .range
          color: $grayColor
          font-size: .18rem
      .details
        line-height: 1.2rem
        float: right
        font-size: .18rem
        color: $grayColor
</style>
