<template>
  <div id='Home'>
    <nvHead
      :isHome='true'
      :welcomeTip='false'
    />
    <!-- <Menu /> -->
    <div class='container'>
      <Home class='container_home' />
      <Side class='container_side' />
    </div>
  </div>
</template>

<script>
import nvHead from '../../components/Header'
import Menu from '../../components/Menu'
import Home from '../../components/HomeContainer'
import Side from '../../components/RightSide'
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components: {
    nvHead,
    Menu,
    Home,
    Side
  }
}
</script>

<style src='./index.less' lang='less'>

</style>
