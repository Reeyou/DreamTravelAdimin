import Home from '@/container/Home'
import AccountManage from '@/container/Account'
import RoleManage from '@/container/SysConfig/RoleManage'
import PermissionManage from '@/container/SysConfig/PermissionManage'
import LogManage from '@/container/SysConfig/LogManage'


 let Routers = [
    {path: '/home', name: 'Home', component: Home},
    {path: '/accountManage', name: '账户管理', component: AccountManage},
    {path: '/roleManage', name: '角色管理', component: RoleManage},
    {path: '/permissionManage', name: '权限管理', component: PermissionManage},
    {path: '/logManage', name: '日志管理', component: LogManage},
  ]
  export default Routers