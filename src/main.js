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
  Input,
  InputNumber,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Button
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
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Button)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
