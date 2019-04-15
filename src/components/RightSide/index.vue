<template>
  <div class="side">
    <sideNav />
    <sideMid />
    <sideBottom />
  </div>
</template>

<script>
import sideNav from './sideNav'
import sideMid from './sideMid'
import sideBottom from './sideBottom'
export default {
  name: 'rightSide',
  data () {
    return {
    }
  },
  components: {
    sideNav,
    sideMid,
    sideBottom
  }
}
</script>

<style src='./index.less' lang='less'>

</style>
