<template>
  <div>
    <header :class="{'nav': true,'fixed': fixed ,'noFixed': noFixed ,'nvHome': isHomeShow}">
      <div>
        <div :class="{'logo': true,'smallLog': isCollapse}" @click='backHome'></div>
        <span class='divide' v-show='divide_show'></span>
        <span class="welcome" v-show='welcome_show'>{{welcomeTip}}</span>
        <span class="home_register" v-if='isRegisterShow'><a :href='url_register'>{{backTip_register}}</a></span>
        <span class="home" v-if='isLoginShow'><a :href='url'>{{backTip}}</a></span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: [
          'welcomeTip', // 欢迎词
          'backTip', // 登录/返回首页
          'backTip_register', // 注册
          'isHome' // 内部首页nvHead样式
        ],
  data () {
    return {
      url: this.backTip === '登录' ? '/#/login' : '/#/',
      url_register: '/#/register',
      isRegisterShow: this.backTip_register, // 注册button显示
      isLoginShow: this.backTip, // 登录button显示
      fixed: false,
      noFixed: false,
      isCollapse: false,
      isHomeShow: this.isHome,
      divide_show: this.welcomeTip, // nav分隔符首页不显示
      welcome_show: this.welcomeTip // nav欢迎词首页不显示
    }
  },
  methods: {
    backHome () {
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
