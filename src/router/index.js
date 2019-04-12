import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/container/Index'
import Login from '@/container/Index/login'
import Register from '@/container/Index/register'
import ResetPwd from '@/container/Index/ResetPwd'
import Home from '@/container/Home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Index', component: Index},
    {path: '/login', name: 'Login', component: Login},
    {path: '/register', name: 'Register', component: Register},
    {path: '/resetPwd', name: 'ResetPwd', component: ResetPwd},
    {path: '/home', name: 'Home', component: Home}
  ]
})
