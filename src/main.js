import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import axios from 'axios'
axios.defaults.baseURL = 'https://hirng-x2021.glitch.me/api'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
