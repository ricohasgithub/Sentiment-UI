import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import App from '@/App.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)
Vue.use(VueMeta)

export const router = new VueRouter({
    mode: "history",
    routes: [
      {
        meta: {title: "home"},
        path: "/",
        components: {default: Home}
      }
    ],
    scrollBehavior() {
      return {x: 0, y: 0}
    }
  })
  
  Vue.config.productionTip = false
  Vue.config.devtools = true
  Vue.config.warnHandler = (msg, instance, trace) =>
      ![
        'Avoid using Array as root value for reactive()'
      ].some((warning) => msg.includes(warning)) &&
      console.warn('[Vue warn]: '.concat(msg).concat(trace))
  
  /* eslint-disable no-new */
  new Vue({
    router,
    el: '#app',
    render: h => h(App),
  })
  