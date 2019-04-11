<template>
  <div>
    <nvHead :welcomeTip='welcomeTip' :backTip_home='backTip_home' :shadow='true' :backTip_login='backTip_login' />
    <nvMenu />
  </div>
</template>

<script>
import nvHead from '../../components/Header'
import nvMenu from '../../components/menu/menu.vue'
export default {
  name: 'menu',
  data () {
    return {
      welcomeTip: '享梦游后台管理平台',
      backTip_login: false
    }
  },
  components: {
    nvHead,
    nvMenu
  }
}
</script>

<style src='./index.less' lang='less'>

</style>