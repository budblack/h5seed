<template>
  <div id="homepage">
    <MenuSidebarLeft></MenuSidebarLeft>
    <div id="threeContainer">
      <ThreeHomeCube></ThreeHomeCube>
    </div>
    <div id="iconsExample">
      <div v-for="menu in menuList">
        <router-link :to="menu.url">
          <h1>
            <i class="fa fa-fw" :class="menu.icon"></i>
          </h1>
          <small>{{menu.title}}</small>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import UtilBarHead from '../components/util-bar-head.vue';
  import ThreeHomeCube from '../components/three-home-cube.vue';
  import MenuSidebarLeft from '../components/menu-sidebar-left.vue';
  import '../assets/css/style-nav-grid-main.css';
  //  import audio from '../lib/audio';

  let isFirst = true;
  export default {
    components: {
      UtilBarHead,
      ThreeHomeCube,
      MenuSidebarLeft
    },
    data () {
      return {
        menuList: [
          { title: '前期管理', icon: 'fa-calendar', url: '/p-alerm-quality' },
          { title: '安全控制', icon: 'fa-bell', url: '/p-alerm-quality' },
          { title: '质量控制', icon: 'fa-quora', url: '/p-alerm-quality' },
          { title: '进度控制', icon: 'fa-tasks', url: '/p-alerm-quality' },
          { title: '投资控制', icon: 'fa-rmb', url: '/p-alerm-quality' },
          { title: '水保环保', icon: 'fa-envira', url: '/p-alerm-quality' },
          { title: '工程评价', icon: 'fa-chain', url: '/p-alerm-quality' },
          { title: '数据中心', icon: 'fa-database', url: '/p-alerm-quality' },
          { title: '其它管理', icon: 'fa-th', url: '/p-alerm-quality' }
        ]
      };
    },
    mounted   : function () {
      if (isFirst) {
        //        setTimeout(() => {audio.tts('您已登录');}, 1000);
        isFirst = false;
      }
    }
  };
</script>

<style scoped>
  #threeContainer {
    position: fixed;
    /*margin-top: 32px;*/
    width: 100%;
    height: calc(100% - 320px)
  }

  #iconsExample {
    top: 100%;
    margin-top: -300px;
    position: absolute;

    height: 300px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  #iconsExample > div {
    background: rgba(51, 51, 51, 0.55);
    box-shadow: 0 0 2px #555;
    /*margin: 2px;*/
    border-radius: 4px;
    color: #f1f1f1;
    display: block;
    width: calc(33.3%);
    height: 5rem;
    text-align: center;
    position: relative;
    padding: 1.5rem;
  }

  #iconsExample > div > a > i:before {
    font-size: 1.05rem
  }

  #iconsExample > div > a > small {
    font-size: .5rem;
    display: block;
    opacity: .7;
    line-height: 1
  }

  .icon-10x {
    min-width: 5rem;
  }

  .icon-5x {
    min-width: 2.5rem;
  }

  .icon-2x {
    min-width: 1.4rem;
  }

  .icon-10x:before {
    font-size: 5rem;
  }

  .icon-5x:before {
    font-size: 2.5rem;
  }

  #iconPreviewModal {
    top: auto;
  }

  #iconPreviewModal .icons {
    padding: 1rem 0;
    text-align: center;
  }

  #iconPreviewModal .icons > i {
    display: inline-block;
    text-align: center;
    margin: .4rem;
    line-height: 1
  }

  body.show-icon-modal #fabNav {
    z-index: 0
  }

  body.show-icon-modal {
    padding-bottom: 10.5rem !important;
  }

</style>
