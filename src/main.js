import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup, 
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Select,
  Option,
  OptionGroup,
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
