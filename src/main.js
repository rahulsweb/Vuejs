import Vue from 'vue'
import App from './App.vue'
import Print from './components/Print'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false
const routes = [
  { path: '/print', component: Print }
]

const router = new VueRouter({
  routes
})
new Vue({
  router,
  mode:"history",
  render: h => h(App),
}).$mount('#app')


