// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App'


// import 'bootstrap/dist/js/bootstrap.js'
 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import '../node_modules/fullcalendar-scheduler/dist/scheduler.css'
import '../node_modules/fullcalendar/dist/fullcalendar.css'

import './assets/animate.css'
import './assets/initialize.css'

// 加入UE
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

import store from './state'
import Axios from 'axios'
import router from './router'
Vue.prototype.$http = Axios
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
