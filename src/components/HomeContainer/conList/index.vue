<template>
  <div class="conList">
    <div class="prev">
      <i class='iconfont icon-arrow_u'></i>
    </div>
    <div class="list">
      <ul>
        <li>
          <img src="" alt="">
          <p>Heisenberg T-Shirt</p>
          <div>
            <h3>INVETORY</h3>
            <p>124</p>
          </div>
          <div>
            <h3>PRICE</h3>
            <p>￥188</p>
          </div>
          <div>
            <h3>SALES</h3>
            <p>68</p>
          </div>
          <div class='oneCharts' ref='onecharts'></div>
        </li>
        <li>
          <img src="" alt="">
          <p>Heisenberg T-Shirt</p>
          <div>
            <h3>INVETORY</h3>
            <p>124</p>
          </div>
          <div>
            <h3>PRICE</h3>
            <p>￥188</p>
          </div>
          <div>
            <h3>SALES</h3>
            <p>68</p>
          </div>
          <div class='oneCharts' ref='onecharts'></div>
        </li>
        <li>
          <img src="" alt="">
          <p>Heisenberg T-Shirt</p>
          <div>
            <h3>INVETORY</h3>
            <p>124</p>
          </div>
          <div>
            <h3>PRICE</h3>
            <p>￥188</p>
          </div>
          <div>
            <h3>SALES</h3>
            <p>68</p>
          </div>
          <div class='oneCharts' ref='onecharts'></div>
        </li>
      </ul>
    </div>
    <div class="next">
      <i class='iconfont icon-arrow_d'></i>
    </div>
  </div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
export default {
  name: 'conList',
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
      let onecharts = echarts.init(this.$refs.onecharts)
        onecharts.setOption({
          tooltip: {},
          xAxis: {
            show: false,
            // splitLine:{show: false},
            // axisLine: {show: true}, 
            // axisTick: {show: true},
            data: ["一月","二月","三月","四月","五月","六月"]
          },
          yAxis: {
            min: 0,
            max: 40,
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

<style style='../index.less' lang='less'>
  
</style>