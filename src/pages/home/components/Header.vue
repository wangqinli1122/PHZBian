<template>
  <div class="header">
    <!-- <div class="header-login" @click="handleClickLogin">
      <span class="iconfont back-icon">&#xe62f;</span>
      <span class="header-login-name">登录</span>
    </div> -->
    <div class="header-search">
      <input type="text" class="header-search-input" v-show="isShow" :style="opacityStyle">
      <span class="iconfont back-icon" v-show="isShow" :style="opacityStyle">&#xe6aa;</span>
    </div>
    <div class="header-list" @click="handleClickShowList">
      <span class="iconfont back-icon">&#xe602;</span>
    </div>
    <ul class="header-float" v-show="showList">
      <router-link to="/house/" tag="li" class="list border-bottom"><span class="iconfont list-icon">&#xe687;</span>收藏</router-link>
      <li class="list border-bottom" @click="showShare"><span class="iconfont list-icon">&#xe626;</span>分享</li>
      <li class="list border-bottom" @click="getAdminLink"><span class="iconfont list-icon">&#xe62f;</span>商户</li>
      <router-link tag="li" to="/" class="list"><span class="iconfont list-icon">&#xe627;</span>首页</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      showList: false,
      isShowShare: false,
      isShow: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    getAdminLink () {
      window.location.href = 'https://www.phzbian.com/admin/actions/adlogin'
    },
    handleClickLogin () {
      this.$router.push('/home/index/wxLogin')
    },
    handleClickShowList () {
      this.showList === false ? this.showList = true : this.showList = false
    },
    handleScroll () {
      const top = document.documentElement.scrollTop
      console.log(top)
      if (top > 85) {
        let opacity = (top - 85) / (165 - 85)
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    addFavorite () {
      var url = window.location
      var title = document.title
      var ua = navigator.userAgent.toLowerCase()
      if (ua.indexOf('msie 8') > -1) {
        external.AddToFavoritesBar(url, title, '')
      } else {
        try {
          window.external.addFavorite(url, title)
        } catch (e) {
          try {
            window.sidebar.addPanel(title, url, '')
          } catch (e) {
            alert('加入收藏失败，请使用Ctrl+D进行添加')
          }
        }
      }
    },
    showShare () {
      this.isShowShare === false ? this.isShowShare = true : this.isShowShare = false
      this.$emit('showShare', this.isShowShare)
    }
  },
  mounted () {
    this.$emit('showShare', this.isShowShare)
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
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
    margin: 0 auto
    height: $headerHeight
    line-height: $headerHeight
    display: flex
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 15
    background: #fff
    .header-login
      width: 1.1rem
      padding-left: .2rem
      padding-right: .1rem
      display: flex
      float: left
      color: $bgColor
      font-size: .30rem
      .back-icon
        font-size: .4rem
      .header-login-name
        flex: 1
        text-align: center
    .header-search
      flex: 1
      position: relative
      .header-search-input
        width: 100%
        height: .5rem
        padding-left: .5rem
        box-sizing: border-box
        line-height: .5rem
        border-radius: .06rem
        font-size: .32rem
        background: #ebebeb
      .back-icon
        font-size: .36rem
        position: absolute
        top: .02rem
        left: .08rem
    .header-list
      width: .56rem
      padding-left: .2rem
      float: right
      color: $bgColor
      .back-icon
        font-size: .4rem
    .header-float
      width: 1.2rem
      height: 2.8rem
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
