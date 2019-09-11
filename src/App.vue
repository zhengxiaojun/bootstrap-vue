<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <z-navbar></z-navbar>
    <router-view />
  </div>
</template>

<script>
  import ZNavbar from '@/components/Z_Navbar'

  export default {
    name: 'App',
    components: {
      ZNavbar
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin: 10px;
  }
</style>
