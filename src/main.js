import Vue from 'vue'
import App from './App.vue'
import Print from './components/Print'
import PrintData from './components/PrintData'
import Scan from './components/Scan'
import Qcode from './components/Qcode'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 

import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);

Vue.config.productionTip = false

const router = new VueRouter({
   mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: PrintData },
    { path: '/print', name: 'foo', component: Print },
    { path: '/scan', name: 'foo', component: Scan },
    { path: '/code', name: 'foo', component: Qcode },
    
  ]
})
new Vue({
  router,
  mode:"history",
  render: h => h(App),
}).$mount('#app')


