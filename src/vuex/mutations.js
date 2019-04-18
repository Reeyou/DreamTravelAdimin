const mutations = {
  exitLogin: (state, loginVisble) => {
    state.loginState = loginVisble
  },
  login: (state) => {
    state.loginState = sessionStorage.getItem('loginState')
  }
}

export default mutations