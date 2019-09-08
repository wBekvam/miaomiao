import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;

/* 全局过滤器
* 由于后端提供的URL需要动态的设置图片大小
* "img": "http://p1.meituan.net/w.h/movie/e5aae93570200e19c8124e5e34dfc13f4475571.jpg"
* arg 表示传入的参数
*/
Vue.filter('setWH', (url, arg) => {
  //通过正则表达式，匹配w.h
    return url.replace(/w\.h/, arg)
})

import Scroller from '@/components/Scroller'
Vue.component('Scroller', Scroller)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
