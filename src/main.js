import Vue from 'vue'
import App from './App.vue'
import Print from './components/Print'
import PrintData from './components/PrintData'
import Scan from './components/Scan'
import Qcode from './components/Qcode'
import Age from './components/Age'
import Calendar from './components/Calendar'
import Chat from './components/Chat'; 
import List from './components/List';
import Menu from './components/Menu';
import First from './components/programs/First';
import Two from './components/programs/Two';
import VueRouter from 'vue-router';
import VueCodeHighlight from 'vue-code-highlight';

Vue.use(VueCodeHighlight) 

// Usage with Node.js
// const { google, outlook, office365, yahoo, ics } = require("calendar-link");

// Usage with TypeScript or ES6
import { google, outlook, office365, yahoo, ics } from "calendar-link";

// Set event as an object
const event = {
  title: "My birthday party",
  description: "Be there!",
  start: "2021-07-07 18:00:00 +0100",
  duration: [3, "hour"],
  url:"https://calendar.google.com/calendar/ical/rahulsonawanen%40gmail.com/public/basic.ics"
};

// Then fetch the link
google(event); // https://calendar.google.com/calendar/render...
outlook(event); // https://outlook.live.com/owa/...
office365(event); // https://outlook.office.com/owa/...
yahoo(event); // https://calendar.yahoo.com/?v=60&title=...
ics(event); // standard ICS file based on https://icalendar.org
Vue.use(VueRouter)
// 

// import GoogleAuth from '@/config/google.js'
// const gauthOption = {
//   clientId: '404149809856-huhpm4nrkdalfiq9772ob01ftck9qa2g.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account'
// }
// Vue.use(GoogleAuth, gauthOption)

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
    { path: '/', name: 'home', component: Menu },
    { path: '/print', name: 'foo', component: Print },
    { path: '/scan', name: 'foo', component: Scan },
    { path: '/code', name: 'foo', component: Qcode },
    { path: '/age', name: 'foo', component: Age },
    { path: '/sync', name: 'sync', component: Calendar },
    { path: '/chat', name: 'chat', component: Chat },
    { path: '/list', name: 'list', component: List },
    { path: '/menu', name: 'menu', component: PrintData },
    { path: '/first', name: 'first', component: First },
    { path: '/two', name: 'two', component: Two },
  ]
})
new Vue({
  router,
  mode:"history",
  render: h => h(App),
}).$mount('#app')


