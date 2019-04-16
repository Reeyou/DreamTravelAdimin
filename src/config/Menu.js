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
    key: "/account",
    name: "账户设置",
    icon: "el-icon-menu"
  },
  {
    key: "/sysConfig",
    name: "账户设置",
    icon: "el-icon-setting",
    child: [
      {
        key: "/sysConfig/sysConfigpermission",
        name: "权限设置",
      },
      {
        key: "/sysConfig/sysConfiglog",
        name: "日志管理",
      }
    ]
  },
  {
    key: "/sysConfig",
    name: "系统设置",
    icon: "el-icon-setting",
    child: [
      {
        key: "/sysConfig/accountManage",
        name: "账户管理",
      },
      {
        key: "/sysConfig/roleManage",
        name: "角色管理",
      },
      {
        key: "/sysConfig/permissionManage",
        name: "权限管理",
      },
      {
        key: "/sysConfig/logManage",
        name: "日志管理",
      }
    ]
  }
]

export default menuList;