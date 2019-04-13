<template>
  <div id='Home'>
    <nvHead
      :isHome='true'
      :welcomeTip='false'
    />
    <!-- <Menu /> -->
    <div class='container'>
      <HomeMid class='container_home' />
      <Side class='container_side' />
    </div>
  </div>
</template>

<script>
import nvHead from '../../components/Header'
import Menu from '../../components/Menu'
import HomeMid from '../../components/HomeContainer'
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
    HomeMid,
    Side
  }
}
</script>

<style src='./index.less' lang='less'>

</style>
