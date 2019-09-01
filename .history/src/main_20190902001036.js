import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

Vue.config.productionTip = false

require('es6-promise').polyfill();
require('es6-promise/auto');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
