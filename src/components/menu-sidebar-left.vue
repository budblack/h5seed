<template>
  <transition name="slide-fade">
    <div id="sidebar" v-show="isSidebarVisible">
      <div id="sidebar-content">
        <div class="list">
          <a class="item with-avatar primary multi-lines dark">
            <div class="avatar circle">
              <img src="" alt="">
            </div>
            <div class="content">
              <div class="title">Catouse</div>
              <div class="subtitle">在线</div>
            </div>
          </a>
          <a class="item with-avatar">
            <div class="avatar text-gray"><i class="icon-list-ul"></i></div>
            <div class="title">订单列表</div>
          </a>
          <a class="item with-avatar">
            <div class="avatar text-gray"><i class="icon icon-comments"></i></div>
            <div class="title">我的消息</div>
          </a>
          <a class="item with-avatar">
            <div class="avatar text-gray"><i class="icon icon-lock"></i></div>
            <div class="title">安全中心</div>
          </a>
          <a class="item with-avatar">
            <div class="avatar text-gray"><i class="icon-cog"></i></div>
            <div class="title">个人设置</div>
          </a>
          <a class="item with-avatar">
            <div class="avatar text-gray"><i class="icon-qrcode"></i></div>
            <div class="title">我的二维码</div>
          </a>
          <hr>
          <a class="item with-avatar">
            <div class="avatar text-gray"><i class="icon-signout"></i></div>
            <div class="title">退出</div>
          </a>
        </div>
      </div>
      <div id="sidebar-mask"></div>
    </div>
  </transition>
</template>
<script>
  /*eslint-disable no-undef*/
  /*eslint-disable require-jsdoc*/
  import audio from '../lib/audio';

  const vm = {
    isSidebarVisible: false
  };

  function init () {
    document.getElementById('sidebar-content')
            .addEventListener('click', function (e) {
              e.stopPropagation();
            });
    document.getElementById('sidebar')
            .addEventListener('click', function (e) {
              if (vm.isSidebarVisible) {
                vm.isSidebarVisible = false;
                e.stopPropagation();
              }
            });
    document.addEventListener('swipeLeft', function (e) {
      if (vm.isSidebarVisible) {
        vm.isSidebarVisible = false;
        e.stopPropagation();
      }
    });
    document.getElementById('homepage')
            .addEventListener('swipeRight', function (e) {
              if (!vm.isSidebarVisible) {
                vm.isSidebarVisible = true;
                e.stopPropagation();
              }
            });
  }

  export default {
    data () {
      return vm;
    },
    watch  : {
      isSidebarVisible: function () {
        audio.noticDa();
      }
    },
    mounted: function () {
      init();
    }
  };
</script>
<style>
  #sidebar {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.49);
  }

  #sidebar-content {
    width: 60%;
    height: 100%;
    background: #f1f1f1;
    box-shadow: 2px 0 12px #111;
  }

  .list {
    min-width: 10rem
  }
</style>
