<template>
  <ul class="goods">
    <li @click="handleGetSee(item.id)" class="shop border-bottom" v-for="item of list" :key="item.id">
      <div class="del" @click="handleDel" :gid="item.id">删除</div>
      <div class="img-box">
        <img :src="item.img" class="img">
      </div>
      <div class="info">
        <div class="title-box">
          <h4 class="title">{{item.name}}</h4>
          <!-- <a class="iconfont back-icon" v-show="isShowTel" :href="'tel:'+item.tel" @click="hanldeClickA">&#xe60f;</a> -->
        </div>
        <p class="content">{{item.address}}</p>
        <div class="range">
          <span class="range-left">¥</span>{{item.price}}
          <span class="range-unit">元/{{item.unit}}</span>
          <div class="range-right">
            <span class="iconfont">&#xe655;</span>
            <span>{{item.range}}</span>
          </div>
        </div>
      </div>
      <!-- <span class="iconfont details">&#xe60a;</span> -->
    </li>
    <div class="non" v-show="!list.length">暂无收藏内容</div>
  </ul>
</template>

<script>
export default {
  name: 'HouseGoods',
  props: {
    list: Array
  },
  data () {
    return {
      isShowTel: true
    }
  },
  methods: {
    hanldeClickA (e) {
      e.stopPropagation()
    },
    handleGetSee (id) {
      this.$router.push({
        name: 'Goods',
        params: { id: id }
      })
    },
    handleDel (e) {
      e.stopPropagation()
      let id = e.target.getAttribute('gid')
      this.$emit('delGoods', id)
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
  .goods
    padding: 0 .2rem
    .non
      font-size: .32rem
      color: #ccc
      text-align: center
      line-height: 1rem
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
          color: red
          font-size: .32rem
          padding-top: 0.1rem
          font-weight: bold
          .range-left
            font-size: .25rem
          .range-unit
            color: #333
            margin-left: .1rem
            font-size: .28rem
            font-weight: normal
          .range-right
            float: right
            color: $grayColor
            font-size: .25rem
            font-weight: normal
            .back-icon
              padding-right: .05rem
      .details
        line-height: 1.2rem
        float: right
        font-size: .18rem
        color: $grayColor
</style>
