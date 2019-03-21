<template>
  <div class="shops">
    <div class="shop border-bottom" @click="handleGetRange(item.id)" v-for="item of list" :key="item.id">
      <div class="del" @click="handleDel" ref="shop" :did="item.id">删除</div>
      <div class="img-box">
        <img :src="item.img" class="img">
      </div>
      <div class="info">
        <div class="title-box">
          <h4 class="title">{{item.name}}</h4>
          <!-- <a class="iconfont back-icon" :href="'tel:'+item.tel" @click="hanldeClickA">&#xe60f;</a> -->
        </div>
        <p class="content">{{item.address}}</p>
        <div class="range">
          <span class="iconfont">&#xe655;</span>
          <span>{{item.range}}</span>
        </div>
      </div>
      <!-- <span class="iconfont details">&#xe60sa;</span> -->
      <a class="iconfont details" :href="'tel:'+item.tel" @click="hanldeClickA">&#xe60f;</a>
    </div>
    <div class="non" v-show="!list.length">暂无收藏内容</div>
  </div>
</template>

<script>
export default {
  name: 'HouseShops',
  props: {
    list: Array
  },
  methods: {
    hanldeClickA (e) {
      e.stopPropagation()
    },
    handleGetRange (id) {
      this.$router.push({
        name: 'Shops',
        params: { id: id }
      })
    },
    handleDel (e) {
      e.stopPropagation()
      let id = e.target.getAttribute('did')
      this.$emit('delShop', id)
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
  .border-left
    &:before
      border-color: #ccc
  .non
    font-size: .32rem
    color: #ccc
    text-align: center
    line-height: 1rem
  .shops
    padding: 0 .2rem
    .shop
      display: flex
      padding: .15rem 0
      .del
        float: left
        font-size: .26rem
        line-height: 1.4rem
        color: $bgColor
      .img-box
        width: 1.4rem
        height: 1.4rem
        float: left
        margin: 0 .15rem
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
          padding-top: .13rem
      .details
        line-height: 1.4rem
        float: right
        font-size: .36rem
        color: $grayColor
        padding: 0 .1rem 0 .2rem
</style>
