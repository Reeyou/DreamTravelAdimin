<template>
  <div class='menu'>
    <nvHead
      :isHome='true'
      :welcomeTip='false'
    />
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      text-color='#1f1f2194'
      active-text-color='#1f1f21'
      router
    >
    <div>
      <!-- 不带子元素的menuItem -->
      <el-menu-item
        v-for="menuItem in menuConfig"
        :key='menuItem.key'
        :index="menuItem.key"
        v-show="!menuItem.child"
      >
        <i :class="menuItem.icon"></i>
        <span slot="title">{{menuItem.name}}</span>
      </el-menu-item>
    </div>
    <!-- 带子元素的menuItem -->
      <el-submenu    
        :index="menuItem.key"
        :key='menuItem.key'
        v-for="menuItem in menuConfig"
        v-show="menuItem.child"
      >
        <template slot="title">
          <i :class="menuItem.icon"></i>
          <span slot="title">{{menuItem.name}}</span>
        </template>
        <el-menu-item v-for="Item in menuItem.child" :key='Item.key ' :index="Item.key">
          <span>{{Item.name}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import nvHead from '../index/Header'
import menuConfig from '@/config/Menu.js'
export default {
  name: 'menu',
  data () {
    return {
      menuConfig: menuConfig,
      // isCollapse: true
      isCollapse: false
    }
  },
  components: {
    nvHead
  }
}
</script>

<style src='../layout.less' lang='less'>

</style>
