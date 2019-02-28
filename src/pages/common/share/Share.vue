<template>
    <share data-wechat-qrcode-title="请打开微信扫一扫" class="social-share" v-show="isShowShare" :config="config"></share>
</template>

<script>
export default {
  name: 'CommonShare',
  props: {
    isShowShare: Boolean
  },
  data () {
    return {
      isShowShareValue: '',
      config: {
        url: '',
        source: '',
        title: '',
        description: '',
        image: '',
        disabled: ['google', 'facebook', 'twitter'],
        wechatQrcodeTitle: '微信扫一扫：分享',
        wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .social-share
    position: fixed
    bottom: 0
    left: 0
    right: 0
    z-index: 9
    background: #eee
    height: 1.5rem
    line-height: 1.5rem
    text-align: center
</style>
