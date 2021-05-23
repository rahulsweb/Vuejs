import Vue from 'vue'
import App from './App.vue'
import Print from './components/Print'
import PrintData from './components/PrintData'
import Scan from './components/Scan'
import Qcode from './components/Qcode'
import Age from './components/Age'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

const router = new VueRouter({
   mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: PrintData },
    { path: '/print', name: 'foo', component: Print },
    { path: '/scan', name: 'foo', component: Scan },
    { path: '/code', name: 'foo', component: Qcode },
    { path: '/age', name: 'foo', component: Age },
  ]
})
new Vue({
  router,
  mode:"history",
  render: h => h(App),
}).$mount('#app')


