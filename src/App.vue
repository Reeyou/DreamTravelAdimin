<template>
  <div id="app" v-cloak>
    <Menu v-if='loginState' />
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Menu
  },
  computed: mapState(['loginState'])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  color: #2c3e50;
}
</style>
