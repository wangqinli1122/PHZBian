<template>
  <div class="search">
    <img class="logo" src="@/assets/images/logo.png" >
    <div class="search-box">
      <input type="text" class="search-text" placeholder="请输入商铺或商品名称">
      <button class="search-button"><span class="iconfont back-icon">&#xe6aa;</span></button>
    </div>
    <ul class="search-common">
      <li class="common border-bottom">手机</li>
      <li class="common border-bottom">电脑</li>
      <li class="common border-bottom">奶茶</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeSearch'
}
</script>

<style lang="stylus" scoped>
 @import '~styles/variables.styl'
 .border-bottom
    &:before
      border-color: #ccc
  .search
    margin-top: 1.08rem
    text-align: center
    .logo
      width: 2.95rem
      margin-bottom: .45rem
    .search-box
      margin: 0 .2rem
      display: flex
      box-shadow: 0 0 .1rem #ccc
      input::-webkit-input-placeholder { /* WebKit browsers */
        color: $grayColor;
      }
      input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: $grayColor;
      }
      input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: $grayColor;
      }
      input:-ms-input-placeholder { /* Internet Explorer 10+ */
        color:  $grayColor;
      }
      .search-text
        flex: 1
        height: .6rem
        line-height: .6rem
        text-indent: .2rem
        font-size: .2rem
        color: $grayColor
      .search-button
        width: .8rem
        height: .6rem
        line-height: .6rem
        background: $bgColor
        color: white
        .back-icon
          font-size: .32rem
    .search-common
      margin: .15rem .2rem
      overflow: hidden
      .common
        float: left
        text-align: center
        padding: .04rem
        margin-right: .12rem
        font-size: .18rem
        color: $grayColor
</style>
