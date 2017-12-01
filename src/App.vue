<template>
  <div id="app">
    <!--<transition name="fade">-->
      <router-view/>
    <!--</transition>-->
  </div>
</template>

<script>
  import logger from './lib/logger';
  import '././assets/css/vue-transitions.css';

  require('./assets/css/mui.min.css');
  //  require('./assets/js/mui.min.js');

  logger.log('应用启动');

  export default {
    name: 'app'
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
