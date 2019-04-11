import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Index from '@/container/Index'
import Login from '@/container/Index/login'
import Register from '@/container/Index/register'
import ResetPwd from '@/container/Index/ResetPwd'
=======
import HelloWorld from '@/components/HelloWorld'
>>>>>>> 62dc1f0a7e80125f10791b59d12923430536ff92

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
    {path: '/', name: 'Index', component: Index},
    {path: '/login', name: 'Login', component: Login},
    {path: '/register', name: 'Register', component: Register},
    {path: '/resetPwd', name: 'ResetPwd', component: ResetPwd}
=======
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
>>>>>>> 62dc1f0a7e80125f10791b59d12923430536ff92
  ]
})
