import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Shops from '@/pages/shops/Shops'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shops',
      name: 'Shops',
      component: Shops
    }
  ]
})