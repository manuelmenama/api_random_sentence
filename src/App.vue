<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Principal msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Principal from './components/Principal.vue'

export default {
  name: 'App',
  components: {
    Principal
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
