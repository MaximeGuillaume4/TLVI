import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
