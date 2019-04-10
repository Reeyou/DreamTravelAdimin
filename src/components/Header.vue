<template>
  <div>
    <header class='nav'>
      <div>
        <div class='logo clearFix'></div>
        <span class='divide'></span>
        <span class="welcome">{{welcomeTip}}</span>
        <span class="home_re" v-if='isShow'><a :href='url_re'>{{backTip_re}}</a></span>
        <span class="home"><a :href='url'>{{backTip}}</a></span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: ['welcomeTip', 'backTip', 'backTip_re'],
  data () {
    return {
      url: this.backTip === '登录' ? '/#/login' : '/#/',
      url_re: '/#/register',
      isShow: this.backTip_re ? true : false
    }
  },
  mounted() {
    console.log(this.backTip_re)
  }
}
</script>

<style src='./index.less' lang='less'>

</style>
