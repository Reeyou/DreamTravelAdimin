<template>
  <div class="sideMid">
    <div class="sideMid_con">
      <div class="sideMid_con_top">
        <div class='title'>
          <h2>{{topTitle}}</h2>
          <i class="iconfont icon-more"></i>
        </div>
        <div class='list'>
          <ul v-for='(topItem, index) in topList' :key=index>
            <li>{{topItem}}</li>
          </ul>
        </div>
      </div>
      <div class="sideMid_con_bottom">
        <div class='title'>
          <h2>{{bottomTitle}}</h2>
          <i class="iconfont icon-more"></i>
        </div>
        <div class='list'>
          <ul v-for='(bottomItem, index) in bottomList' :key=index >
            <li>{{bottomItem}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideMid',
  data () {
    return {
      topTitle: 'SAELS FUNNEL',
      bottomTitle: 'REVENUE BY CHANNEL',
      topList: ['Cart', 'Checkout', 'Seesions'],
      bottomList: ['Direct', 'Search', 'Refferal']
    }
  }
}
</script>

<style src='../index.less' lang='less'>

</style>
