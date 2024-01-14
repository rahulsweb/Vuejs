import Vue from 'vue'
import App from './App.vue'
import Print from './components/Print'
import PrintData from './components/PrintData'
import Tab from './components/Tab'
import Scan from './components/Scan'
import Qcode from './components/Qcode'
import Upload from './components/Uploads'
import Age from './components/Age'
import Calendar from './components/Calendar'
import Campare from './components/Campare'
import List from './components/List';
import Menu from './components/Menu';
import First from './components/programs/First';
import Two from './components/programs/Two';
import Three from './components/programs/Three';
import Test from './components/programs/Test';
import Bluetooth from './components/devices/Bluetooth';
import ListDevices from './components/devices/List';
import Tabclose from './components/devices/Tabclose';
import Chess from './components/games/Chess';
import ListGames from './components/games/List';
import Messages from './components/messages/Chat';
import MessageTest from './components/messages/Message';
import VueRouter from 'vue-router';
import VueCodeHighlight from 'vue-code-highlight';
import ChatMessage from 'vue-beautiful-chat';
import Timer from './components/programs/timer/Timer';
import Pusher from './components/Pusher';
// import './assets/css/styles.css'
import Index from './components/Index';

import './assets/css/styles.css';
import * as PusherPushNotifications from "@pusher/push-notifications-web";
const beamsClient = new PusherPushNotifications.Client({
  instanceId: '6bf0e386-cfa1-4afe-bbf2-cb2170d80b7b',
});
// const tokenProvider = new PusherPushNotifications.TokenProvider({
//   url: 'https://example.com/pusher/beams-auth',
// })
// const beamsClient = new PusherPushNotifications.Client({
//   instanceId: "YOUR_INSTANCE_ID",
// });
beamsClient
  .start()
  .then((beamsClient) => beamsClient.getDeviceId())
  .then((deviceId) =>
    console.log("Successfully registered with Beams. Device ID:", deviceId)
  )
  .then(() => beamsClient.addDeviceInterest("hello"))
  .then(() => beamsClient.getDeviceInterests())
  .then((interests) => console.log("Current interests:", interests))
  .catch(console.error);

beamsClient.start()
  .then(() => beamsClient.addDeviceInterest('hello'))
  .then(() => console.log('Successfully registered and subscribed!'))
  .catch(console.error);

  beamsClient.start()
  .then(() => beamsClient.removeDeviceInterest('donuts'))
  .catch(e => console.error('Could not remove device interest', e));



beamsClient.getDeviceInterests()
.then(interests => {
  console.log(interests) // Will log something like ["a", "b", "c"]
})
.catch(e => console.error('Could not get device interests', e));

// The user will now be subscribed to "a", "b" & "c" only
beamsClient.setDeviceInterests(['a', 'b', 'c'])
  .then(() => console.log('Device interests have been set'))
  .catch(e => console.error('Could not set device interests', e));





// beamsClient.start()
// .then(() => beamsClient.setUserId('123', tokenProvider))
// .then(() => console.log('User ID has been set'))
// .catch(e => console.error('Could not authenticate with Beams:', e));

Vue.use(ChatMessage)
Vue.use(VueCodeHighlight) 
import './assets/css/styles.css';
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
    { path: '/menu', name: 'home', component: Menu },
    { path: '/print', name: 'foo', component: Print },
    { path: '/scan', name: 'foo', component: Scan },
    { path: '/code', name: 'foo', component: Qcode },
    { path: '/age', name: 'foo', component: Age },
    { path: '/sync', name: 'sync', component: Calendar },
    { path: '/list', name: 'list', component: List },
    { path: '/apps', name: 'apps', component: PrintData },
    { path: '/list/1', name: '1', component: First },
    { path: '/list/2', name: '2', component: Two },
    { path: '/list/3', name: '3', component: Three },
     { path: '/test', name: 'test', component: Test },
     { path: '/devices/bluetooth', name: 'bluetooth', component: Bluetooth },
     { path: '/devices', name: 'devices-lists', component: ListDevices },
     { path: '/games', name: 'games-lists', component: ListGames },
     { path: '/games/chess', name: 'chess', component: Chess },
     { path: '/messages', name: 'message', component: Messages },
     { path: '/messages-test', name: 'message-test', component: MessageTest },
     { path: '/devices/tab', name: 'tab', component: Tabclose },
     { path: '/timer', name: 'timer', component: Timer },
     { path: '/campare', name: 'campare', component: Campare },
     { path: '/upload', name: 'upload', component: Upload },

     { path: '/pusher', name: 'pusher', component: Pusher },
    //  { path: '/header', name: 'Header', component: Header },
     { path: '/', name: 'Index', component: Index },
  { path: '/tab', name: 'Index', component: Tab },

  ]
})
new Vue({
  router,
  mode:"history",
  render: h => h(App),
}).$mount('#app')


