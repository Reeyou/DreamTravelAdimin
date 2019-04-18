import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
// import getters from './getters'
// import actions from './actions'

Vue.use(Vuex)

// 初始化数据
let state = {
  // 登录状态
  loginState: sessionStorage.getItem('loginState')
}

export default new Vuex.Store({
  state,
  mutations,
  // actions,
  // getters
})
