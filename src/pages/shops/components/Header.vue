<template>
  <div class="header">
    <router-link to="/" class="header-left">
      <span class="iconfont back-icon">&#xe617;</span>
    </router-link>
    <div class="header-search">
      <input type="text" class="header-search-input" ref="nameInput" @keyup.enter="enterSearchName">
      <span class="iconfont back-icon">&#xe6aa;</span>
    </div>
    <div class="header-list" @click="handleClickShowList">
      <span class="iconfont back-icon">&#xe602;</span>
    </div>
    <ul class="header-float" v-show="this.$store.state.showIcon">
      <router-link to="/house/" tag="li" class="list border-bottom"><span class="iconfont list-icon">&#xe687;</span>收藏</router-link>
      <li class="list border-bottom" @click="showShare"><span class="iconfont list-icon">&#xe626;</span>分享</li>
      <router-link tag="li" to="/" class="list"><span class="iconfont list-icon">&#xe627;</span>首页</router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ShopsHeader',
  data () {
    return {
      isShowShare: false
    }
  },
  methods: {
    handleClickShowList (e) {
      e.stopPropagation()
      this.$store.state.showIcon === false ? this.$store.commit('changeShowIcon', true) : this.$store.commit('changeShowIcon', false)
    },
    showShare () {
      this.isShowShare === false ? this.isShowShare = true : this.isShowShare = false
      this.$emit('showShare', this.isShowShare)
    },
    enterSearchName () {
      axios.get('/home/index/searchMerShops', {
        params: {
          id: this.$route.params.id,
          search: this.$refs.nameInput.value
        }
      }).then(this.enterSearchNameSucc)
    },
    enterSearchNameSucc (res) {
      res = res.data
      if (res.ret === true) {
        this.$emit('searchName', res.data)
      }
    }
  },
  mounted () {
    this.$emit('showShare', this.isShowShare)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-bottom
    &:before
      border-color: #fff
  .header
    max-width: 640px
    margin:0 auto
    height: $headerHeight
    line-height: $headerHeight
    display: flex
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 15
    background: #f4f4f4
    .header-left
      padding-left: .2rem
      padding-right: .2rem
      float: left
      color: $grayColor
      font-size: .2rem
      .back-icon
        font-size: .36rem
    .header-search
      flex: 1
      position: relative
      .header-search-input
        width: 100%
        height: .48rem
        padding-left: .5rem
        box-sizing: border-box
        line-height: .48rem
        border-radius: .04rem
        font-size: .24rem
        background: #fff
      .back-icon
        font-size: .24rem
        color: $grayColor
        position: absolute
        top: .04rem
        left: .08rem
    .header-list
      width: .56rem
      padding-left: .2rem
      float: right
      color: $grayColor
      .back-icon
        font-size: .36rem
    .header-float
      width: 1.2rem
      height: 2.1rem
      padding: .2rem .3rem
      border-radius: .08rem
      background: $grayColor
      position: absolute
      top: .7rem
      right: .3rem
      color: white
      .list
        height: .7rem
        line-height: .7rem
        font-size: .32rem
        .list-icon
          font-size: .38rem
          padding-right: .08rem
</style>
