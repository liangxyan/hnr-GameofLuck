import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Routescomp from './routes.js'

Vue.use(VueRouter)

Vue.config.productionTip = false

//Register routes 
const theRouter = new VueRouter({
  routes: Routescomp,
  mode: 'history'
})

new Vue({
  vuetify,
  render: h => h(App),
  router: theRouter
}).$mount('#app')
