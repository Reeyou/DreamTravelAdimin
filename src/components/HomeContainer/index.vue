<template>
  <div class="home">
    <conNav />
    <echarts />
    <conList />
  </div>
</template>

<script>
import conNav from './conNav'
import echarts from '../eCharts'
import conList from './conList'
export default {
  name: 'homeContainer',
  data () {
    return {
    }
  },
  components: {
    conNav,
    echarts,
    conList
  }
}
</script>

<style src='../layout.less' lang='less'>
</style>
