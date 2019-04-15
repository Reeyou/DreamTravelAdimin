<template>
  <div class="conNav">
    <div class='conNav_con clearFix'>
      <div class='container'>
        <h2>总金额</h2>
        <p class='total'>￥1000000.00000</p>
        <p class='increase'>￥20.0000000</p>
      </div>
      <div class="select">
        <el-select v-model="value" :placeholder="value">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'conNav',
  data () {
    return {
      options: [
          {
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }
        ],
        value: 'LAST YEAR'
    }
  }
}
</script>

<style src='../index.less' lang='less'>

</style>