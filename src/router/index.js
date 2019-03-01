import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Shops from '@/pages/shops/Shops'
import Goods from '@/pages/goods/goods'

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
      component: Shops
    },
    {
      path: '/goods/:id',
      name: 'Goods',
      component: Goods
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return {x: 0, y: 0}
  }
})
