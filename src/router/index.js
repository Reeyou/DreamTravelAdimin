import Vue from 'vue'
import Router from 'vue-router'
import Routers from '../config/Router'
import Index from '@/container/Index'
import Login from '@/container/Index/login'
import Register from '@/container/Index/register'
import ResetPwd from '@/container/Index/ResetPwd'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Index', component: Index},
    {path: '/login', name: 'Login', component: Login},
    {path: '/register', name: 'Register', component: Register},
    {path: '/resetPwd', name: 'ResetPwd', component: ResetPwd},
    ...Routers
  ]
})
