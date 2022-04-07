import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue")
  },
  {
    path: "/media",
    name: "Media",
    component: () => import("./views/Media.vue")
  },
  {
    path: "/my",
    name: "my",
    component: () => import("./views/My.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
