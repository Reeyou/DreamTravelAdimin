<template>
  <div class="echarts" ref='echarts'></div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
export default {
  name: 'echarts',
  data () {
    return {
      
    }
  },
  mounted() {
    this.drawCharts()
  },
  methods: {
    drawCharts() {
      //  基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.echarts)
        myChart.setOption({
          tooltip: {},
          xAxis: {
            splitLine:{show: false},
            axisLine: {show: true}, 
            axisTick: {show: true},
            data: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
          },
          legend: {
            top: 0,
            left: '10%',
            // left: '114px',
            data: ['采购', '销售']
          },
          yAxis: {
            min: 0,
            max: 80,
            axisLine: {show: false}, 
            axisTick: {show: false},
            axisLabel : {
                formatter: function(){
                      return "";
                }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#ccc',
                width: 1,
                type: 'dotted'
              }
            },
          },
          series: [
            {
              name: '采购',
              type: 'bar',
              barWidth: 10,
              color: 'rgba(31,31,33,.9)',
              data: [5, 20, 36, 10, 10, 20,28,34,56,74,123,11]
            },
            {
              name: '销售',
              type: 'bar',
              barWidth: 10,
              color: 'rgba(31,31,33,.26)',
              data: [5, 20, 36, 10, 10, 20,28,34,56,74,23,11]
            }
          ]
      });
    }
  }
}
</script>

<style scoped lang='less'>
  .echarts {
    width: 100%;
    height: 300px;
  }
</style>