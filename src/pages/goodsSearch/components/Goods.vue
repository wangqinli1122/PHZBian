<template>
  <ul class="goods">
    <li @click="handleGetSee(item.id)" class="shop border-bottom" v-for="item of list" :key="item.id">
      <div class="img-box">
        <img :src="item.img" class="img">
      </div>
      <div class="info">
        <div class="title-box">
          <h4 class="title">{{item.name}}</h4>
          <!-- <a class="iconfont back-icon" v-show="isShowTel" :href="'tel:'+item.tel" @click="hanldeClickA">&#xe60f;</a> -->
        </div>
        <p class="content">{{item.desc}}</p>
        <div class="range">
          <span class="range-left">¥</span>{{item.price}}
          <div class="range-right">
            <span class="iconfont back-icon">&#xe603;</span>{{item.see}}
          </div>
        </div>
      </div>
      <span class="iconfont details">&#xe60a;</span>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ShopsGoods',
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
      axios.get('/home/index/addPv', {
        params: {
          id: id
        }
      }).then(this.handleGetSeeSucc)
      this.$router.push({
        name: 'Goods',
        params: { id: id }
      })
    },
    handleGetSeeSucc (res) {
      res = res.data
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
          color: red
          font-size: .32rem
          font-weight: bold
          .range-left
            font-size: .25rem
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
