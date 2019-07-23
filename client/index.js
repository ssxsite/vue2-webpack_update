/*
* index.js
* 项目入口文件
* */
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './app.vue'
// import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import {Ajax} from "./service/httpService.js"

import createRouter from './router'
import lazyLoadingPlucgin from './directive/lazy-loading'

const  defaultImg = require('./assets/img/default.png')

const router = createRouter()

Vue.use(VueResource);
Vue.prototype.$ajax = Ajax

import './assets/img/app_bg.jpg'
// 在body下创建一个根节点
// const root = document.createElement('div')
// document.body.appendChild(root)

// 将根节点root注入到app.vue组件中
new Vue({
  VueAwesomeSwiper,
  router,
  render: function (createElement) {
    return createElement(App)
  }
}).$mount(root)

Vue.use(lazyLoadingPlucgin, {loading: defaultImg})

