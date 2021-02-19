import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import customCss from './assets/css/main.css';
import router from './router'

Vue.config.productionTip = false
Vue.use(customCss)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
