import Vue from 'vue'
import App from './App.vue'
import Print from './components/Print'
import PrintData from './components/PrintData'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
   mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: PrintData },
    { path: '/print', name: 'foo', component: Print },
  ]
})
new Vue({
  router,
  mode:"history",
  render: h => h(App),
}).$mount('#app')


