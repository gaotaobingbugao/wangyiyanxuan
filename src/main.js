import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import HeaderConter from './component/HeaderConter/HeaderConter.vue'



Vue.config.productionTip = false
Vue.component('HeaderConter',HeaderConter)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
