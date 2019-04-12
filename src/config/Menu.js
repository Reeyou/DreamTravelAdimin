/** @Author: Reeyou  
 *  @Date: 2019-04-12 14:32:03  
 *  @Params: 菜单列表 
**/
let menuList = [
  {
    path: "",
    name: "首页",
    icon: "el-icon-location"
  },
  {
    path: "/userConfig",
    name: "账户设置",
    icon: "el-icon-menu"
  },
  {
    path: "/sysConfig",
    name: "系统设置",
    icon: "el-icon-setting",
    child: [
      {
        path: "/sysConfig/permission",
        name: "权限设置",
      },
      {
        path: "/sysConfig/log",
        name: "日志管理",
      }
    ]
  },
  {
    path: "/userConfigO",
    name: "账户设置",
    icon: "el-icon-menu"
  },
  {
    path: "/sysConfig",
    name: "系统设置",
    icon: "el-icon-setting",
    child: [
      {
        path: "/permissionR",
        name: "权限设置",
      },
      {
        path: "/logR",
        name: "日志管理",
      }
    ]
  }
]

export default menuList;