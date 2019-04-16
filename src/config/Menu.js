/** @Author: Reeyou  
 *  @Date: 2019-04-12 14:32:03  
 *  @Params: 菜单列表 
**/
let menuList = [
  {
    key: "/home",
    name: "首页",
    icon: "el-icon-location"
  },
  {
    key: "/accountManage",
    name: "账户管理",
    icon: "el-icon-menu"
  },
  {
    key: "/sysConfig",
    name: "系统设置",
    icon: "el-icon-setting",
    child: [
      {
        key: "/roleManage",
        name: "角色管理",
      },
      {
        key: "/permissionManage",
        name: "权限管理",
      },
      {
        key: "/logManage",
        name: "日志管理",
      }
    ]
  }
]

export default menuList;