import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Shops from '@/pages/shops/Shops'
import Goods from '@/pages/goods/Goods'
import ShopSearch from '@/pages/shopSearch/ShopSearch'
import GoodsSearch from '@/pages/goodsSearch/GoodsSearch'
import Collect from '@/pages/common/collect/Collect'
import House from '@/pages/common/house/House'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shops/:id',
      name: 'Shops',
      component: Shops,
      meta: {
        keepAlive: true,
        isBack: false
      }
    },
    {
      path: '/goods/:id',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/shopSearch/:name/:lat/:lng/:page',
      name: 'ShopSearch',
      component: ShopSearch,
      meta: {
        keepAlive: true,
        isBack: false
      }
    },
    {
      path: '/goodsSearch/:name/:lat/:lng/:page',
      name: 'GoodsSearch',
      component: GoodsSearch,
      meta: {
        keepAlive: true,
        isBack: false
      }
    },
    {
      path: '/collect/',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/house/',
      name: 'House',
      component: House
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return {x: 0, y: 0}
  }
})
