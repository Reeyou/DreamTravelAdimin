<template>
  <div>
    <nav-Header
      :welcomeTip='welcomeTip'
      :backTip='backTip'
      :backTip_register='backTip_register'
      :backTip_login='backTip_login'
      :fixed='fixed'
    />
    <div class="wrapper_home" >
      <section class="section_one" ref='wrapper'>
        <div class="section_one_container">
          <div class="left">
            <h1>享梦游后台管理平台 v0.1</h1>
            <h2>Hi！</h2>
            <span>欢迎使用，待您开启</span>
          </div>
          <div class="right"></div>
        </div>
      </section>
      <section class="section_two">
        <div class="section_two_container">
          <div class="left">
            <h1>享梦游后台管理平台 v0.2</h1>
            <h2>Hi！</h2>
            <span>欢迎使用，待您开启</span>
          </div>
          <div class="right"></div>
        </div>
      </section>
      <section class="section_three">
        <div class="section_three_container">
          <div class="left">
            <h1>享梦游后台管理平台 v0.3</h1>
            <h2>Hi！</h2>
            <span>欢迎使用，待您开启</span>
          </div>
          <div class="right"></div>
        </div>
      </section>
      <section class="section_four">
        <div class="section_four_container">
          <div class="left">
            <h1>享梦游后台管理平台 v0.4</h1>
            <h2>Hi！</h2>
            <span>欢迎使用，待您开启</span>
          </div>
          <div class="right"></div>
        </div>
      </section>
      <section class="section_five">
        <div class="section_five_container">
          <div class="left">
            <h1>享梦游后台管理平台 v0.5</h1>
            <h2>Hi！</h2>
            <span>欢迎使用，待您开启</span>
          </div>
          <div class="right"></div>
        </div>
      </section>
      <div class='fixedRight'>
        <ul>
          <li v-for="(item, index) in items" :key='index' @click='() => changeCurrency(index)' :class="currentIndex === index ? 'active' : ''"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import navHeader from '../../components/Header'
export default {
  name: 'login',
  data () {
    return {
      welcomeTip: '享梦游后台管理平台',
      backTip: '登录',
      backTip_login: true,
      backTip_register: '注册',
      fixed: true,
      items: ['','','','',''],
      delta: 0,
      currentIndex: 0
    }
  },
  methods: {
    // 鼠标滚动函数
    scrollFunc (e) {
      // console.log(e)
      if (!e) { // for ie
        e = window.event
      }
      if (e.preventDefault) {
        e.preventDefault()
      }
      if (e.wheelDelta) { // ie opera chrome
        this.delta = e.wheelDelta / 120
      } else if (e.detail) { // firefox
        this.delta = -e.detail / 3
      }
      if(this.delta > 0 && this.currentIndex > 0){
        this.currentIndex > 0 ? this.currentIndex-- : this.currentIndex = 0
        this.moveCurrency()
      } else if (this.delta < 0 && this.currentIndex < 4) {
        this.currentIndex >= 0 && this.currentIndex < 4 ? this.currentIndex++ : this.currentIndex = 4
        this.moveCurrency()
      }
    },
    // 滚动函数
    moveCurrency () {
      document.documentElement.scrollTop = window.innerHeight * this.currentIndex
    },
    //入口函数
    init () {
      window.onmousewheel = this.scrollFunc
    },
    //点击改变
    changeCurrency (e) {
      this.currentIndex = e;
      this.moveCurrency()
    }
  },
  mounted () {
    this.init()
  },
  components: {
    navHeader
  }
}
</script>

<style src='./index.less' lang='less'>

</style>
