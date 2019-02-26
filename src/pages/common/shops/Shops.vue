<template>
  <ul class="shops">
    <router-link tag="li" to="/shops" class="shop border-bottom" v-for="item of list" :key="item.id">
      <div class="img-box">
        <img :src="item.img" class="img">
      </div>
      <div class="info">
        <div class="title-box">
          <h4 class="title">{{item.name}}</h4>
          <span class="iconfont back-icon">&#xe60f;</span>
        </div>
        <p class="content">{{item.address}}</p>
        <div class="range"><span class="iconfont">&#xe655;</span>{{item.range}}</div>
      </div>
      <span class="iconfont details">&#xe60a;</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'HomeShops',
  props: {
    list: Array
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
            ellipsis()
          .back-icon
            float:right
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
