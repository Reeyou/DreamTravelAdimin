<template>
  <div class='Home'>
    <Menu />
    <div class='container'>
      <HomeMid class='container_home' />
      <Side class='container_side' />
    </div>
  </div>
</template>

<script>
import HomeMid from '../../components/HomeContainer'
import Side from '../../components/RightSide'
import Menu from '../../components/Menu'

export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components: {
    HomeMid,
    Side,
    Menu
  }
}
</script>

<style scoped lang='less'>
@import '../../assets/css/common.less';

.Home {
  font-size: 0;
  .container {
    margin-left: @bodyMargin;
    min-width: 1000px;
    background: @bgWhite;
    &_home {
      width: 70%;
      height: 100vh;
      float: left;
    }
    &_side {
      width: 30%;
      height: 100vh;
      display: inline-block;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 2px;
        height: 100vh;
        top: 0;
        left: 0;
        background: @BlackRgbOO;
      }
    }
  }
}
</style>
