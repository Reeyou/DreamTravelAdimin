<template>
  <div class="sideNav">
    <nav class="nav">
      <div class="nav_container">
        <div class='user'>
          <el-dropdown placement='top-end'>
            <div class="el-dropdown-link">
              <img class='avatar' />
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i></i>
                <span>个人设置</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <i></i>
                <span @click='exitLogin'>退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class='list'>
          <i class='iconfont icon-mulu1'></i>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'sideNav',
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['exitLogin']),
    // 退出登录
    exitLogin() {
      this.$router.push({path: '/'})
      this.$store.commit('exitLogin', false)
      // this.$store.state.loginState = false
      // sessionStorage.setItem('loginState', false)
    }
  }
}
</script>

<style src='../index.less' lang='less'>

</style>
