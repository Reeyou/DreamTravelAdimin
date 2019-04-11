import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup, 
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
