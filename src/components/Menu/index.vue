<template>
  <div class='menu'>
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
    >
    <!-- 不带子元素的menuItem -->
      <el-menu-item
        v-for="menuItem in menuConfig"
        :index="menuItem.path"
        v-show="!menuItem.child"
      >
        <i :class="menuItem.icon"></i>
        <span slot="title">{{menuItem.name}}</span>
      </el-menu-item>
    <!-- 带子元素的menuItem -->
      <el-submenu
        v-for="menuItem in menuConfig"
        :index="menuItem.path"
        v-show="menuItem.child"
      >
        <template slot="title">
          <i :class="menuItem.icon"></i>
          <span slot="title">{{menuItem.name}}</span>
        </template>
        <el-menu-item v-for="Item in menuItem.child" :index="Item.path">
          <span>{{Item.name}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import menuConfig from '@/config/Menu.js'
export default {
  name: 'menu',
  data () {
    return {
      menuConfig: menuConfig,
      // isCollapse: true
      isCollapse: false
    }
  }
}
</script>

<style src='../layout.less' lang='less'>

</style>
