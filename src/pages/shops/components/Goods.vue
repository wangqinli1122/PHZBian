<template>
  <div>
    <ul class="goods content">
      <li @click="handleGetSee(item.id)" class="shop border-bottom" v-for="item of list" :key="item.id" ref="item.id">
        <div class="img-box">
          <img :src="item.img" class="img">
        </div>
        <div class="info">
          <div class="title-box">
            <h4 class="title">{{item.name}}</h4>
            <span class="iconfont back-icon" v-show="isShowTel">&#xe60f;</span>
          </div>
          <!-- <p class="content">{{item.desc}}</p> -->
          <div class="range">
            <span class="range-left">¥</span>{{item.price}}
            <span class="range-unit">单位：{{item.unit}}</span>
            <div class="range-right">
              <span class="iconfont back-icon">&#xe603;</span>{{item.see}}
            </div>
          </div>
        </div>
        <span class="iconfont details">&#xe60a;</span>
      </li>
    </ul>
    <div class="non" v-show="non">暂无相关内容</div>
  </div>
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
      isShowTel: false,
      non: false
    }
  },
  methods: {
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
  .non
    font-size: .32rem
    color: #ccc
    text-align: center
    line-height: 1rem
  .goods
    padding: 0 .2rem
    .shop
      display: flex
      padding: .15rem 0
      .img-box
        width: 2rem
        height: 2rem
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
            height: 1rem
            margin-bottom: .2rem
            line-height: .5rem
            font-size: .32rem
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          .back-icon
            float:right
            color: $grayColor
        .content
          height: .6rem
          line-height: .6rem
          color: $grayColor
          ellipsis()
        .range
          color: red
          font-size: .32rem
          padding-top: 0.4rem
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
