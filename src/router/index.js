import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '../components/dashboard/DashBoard'
import Product from '../components/product/Product'
import InfoRelease from '../components/info-release/InfoRelease'
import Annoucement from '../components/annoucement/Annoucement'
import Settings from '../components/settings/Settings'
import Login from '../components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component:Login
    },
    {
      path: '/DashBoard',
      name: 'DashBoard',
      component:DashBoard
    },
    {
      path: '/Product',
      name: 'Product',
      component:Product
    },
    {
      path: '/InfoRelease',
      name: 'InfoRelease',
      component:InfoRelease
    },
    {
      path: '/Annoucement',
      name: 'Annoucement',
      component:Annoucement
    },
    {
      path: '/Settings',
      name: 'Settings',
      component:Settings
    }
  ]
})
