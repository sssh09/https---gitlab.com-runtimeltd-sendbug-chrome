<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// eslint-disable-next-line
import Header2 from './layout/Header2.vue'
import Section2 from './layout/Section2.vue'
import Switch2 from './components/Switch2.vue'
import Section3 from './layout/Section3.vue'
import Media from './views/Media.vue'

export default {
  name: 'App',
  components: {
    Header2,
    Section2,
    Switch2,
    Section3,
    Media
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
