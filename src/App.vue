<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
/* eslint-disable */
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    background-color: #ffd;
  }
</style>

<style scoped>
  
</style>
