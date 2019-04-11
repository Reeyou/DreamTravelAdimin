<template>
  <div>
    <header :class="{'nav': true,'fixed': fixed ,'noFixed': noFixed ,'shadow' : shadow}">
      <div>
        <div class='logo' @click='backHome'></div>
        <span class='divide' v-show='divide_show'></span>
        <span class="welcome" v-show='welcome_show'>{{welcomeTip}}</span>
        <span class="home_register" v-if='isShow'><a :href='url_register'>{{backTip_register}}</a></span>
        <span class="home" v-if='isButtonShow'><a :href='url'>{{backTip}}</a></span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: ['welcomeTip', 'backTip', 'backTip_register', 'backTip_login', 'backTip_home', 'shadow'],
  data () {
    return {
      url: this.backTip === '登录' ? '/#/login' : '/#/',
      url_register: '/#/register',
      isShow: this.backTip_register,
      isButtonShow: this.backTip_login,
      fixed: false,
      noFixed: false,
      shadow:this.shadow,
      count: 0,
      divide_show: !this.backTip_register, // nav分隔符首页不显示
      welcome_show: !this.backTip_register // nav欢迎词首页不显示
    }
  },
  methods: {
    backHome () {
      console.log(1)
      this.$router.push({path: '/'})
    }
  },
  mounted () {
    const _this = this
    window.onscroll = function () {
      document.documentElement.scrollTop === 0 ? (_this.fixed = false, _this.noFixed = true) : (_this.fixed = true, _this.noFixed = false)
    }
  }
}
</script>

<style src='./index.less' lang='less'>

</style>
