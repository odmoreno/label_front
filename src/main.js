import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import axios from 'axios'
import VueAxios from 'vue-axios'

import videoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false

Vue.use(vuetify)
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://localhost:3000/api'

new Vue({
  router,
  store,
  vuetify,
  videoPlayer,
  render: h => h(App)
}).$mount('#app')
