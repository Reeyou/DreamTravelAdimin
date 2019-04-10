<template>
  <div>
    <nav-Header :welcomeTip='welcomeTip' :backTip='backTip' :backTip_re='backTip_re'/>
    <div class="wrapper">
      <div class="container">
      </div>
    </div>
  </div>
</template>

<script>
import navHeader from '../../components/Header'
export default {
  name: 'login',
  data () {
    return {
      welcomeTip: '享梦游后台管理平台',
      backTip: '登录',
      backTip_re: '注册',
      error_user: '请输入用户名',
      error_password: '请输入密码',
      error_msg: false
    }
  },
  methods: {

  },
  components: {
    navHeader
  }
}
</script>

<style src='./index.less' lang='less'>

</style>

