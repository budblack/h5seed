<template>
  <div id="app">
    <UtilBarHead></UtilBarHead>

    <div class="">
      <!--<div class="with-heading-top">-->
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  /*eslint-disable no-undef*/

  import FastClick from 'fastclick';

  import logger from './lib/logger';
  import '././assets/css/vue-transitions.css';
  import UtilBarHead from './components/util-bar-head.vue';


  require('./assets/css/font-awesome.css');
  require('./assets/css/mzui.css');
  require('./assets/js/mzui.js');


  FastClick.attach(document.body);

  /**
   * @returns {{}} null
   */
  function plusReady () {
    logger.log('plus对象就绪');
  }

  document.addEventListener('plusready', plusReady, false);

  logger.log('应用启动');

  export default {
    name      : 'app',
    components: {
      UtilBarHead
    },
    mounted   : function () {
      document.addEventListener('swipeRight', (e) => {
        console.log('返回');
        this.$router.back(-1);
        e.stopPropagation();
      });
    }
  };
</script>

<style>
</style>
