<template>
  <div>
    <!--<CCollectionLabel></CCollectionLabel>-->
    <CListGroupDate></CListGroupDate>
    <div

      @touchstart="onSideBtnTouchstart"
      @touchmove="onSideBtnTouchmove"
      @touchend="onSideBtnTouchend"
      :style="{'margin-left':sidebarLeft+'px'}"
      class="sidebar-rigth">
      <div class="sidebar-rigth-content">
        <div class="container">
          <div>
            <div class="heading">
              <div class="title"><strong>今天</strong>
                <small class="muted">2017年12月06日</small>
              </div>
              <nav class="nav">
                <a><i class="icon icon-sort-by-attributes-alt"></i></a>
              </nav>
            </div>

            <div class="list section">
              <a class="item multi-lines with-avatar">
                <div class="avatar circle red outline">1</div>
                <div class="content">
                  <span class="title">标题</span>
                  <div>
                    <small class="text-green">小标题</small>&nbsp;
                    <small class="muted">14:52:16</small>
                    <div class="pull-right label red-pale text-tint">状态</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="heading">
              <div class="title"><strong>昨天</strong>
                <small class="muted">7月5日</small>
              </div>
              <nav class="nav">
                <a><i class="icon icon-sort-by-attributes-alt"></i></a>
              </nav>
            </div>

            <div class="list section">
              <a class="item multi-lines with-avatar">
                <div class="avatar circle green"><i class="icon-check"></i></div>
                <div class="content">
                  <span class="title">标题</span>
                  <div>
                    <small class="text-red">小标题</small>&nbsp;
                    <small class="muted">10:00</small>
                    <div class="pull-right label green">已完成</div>
                  </div>
                </div>
              </a>
              <a class="item multi-lines with-avatar">
                <div class="avatar circle green"><i class="icon-check"></i></div>
                <div class="content">
                  <span class="title">标题</span>
                  <div>
                    <small class="text-red">小标题</small>&nbsp;
                    <small class="muted">9:00</small>
                    <div class="pull-right label green">已完成</div>
                  </div>
                </div>
              </a>
              <a class="item multi-lines with-avatar">
                <div class="avatar circle dark"><i class="icon-minus"></i></div>
                <div class="content">
                  <span class="title">标题</span>
                  <div>
                    <small class="text-yellow">小标题</small>&nbsp;
                    <small class="muted">9:00</small>
                    <div class="pull-right label dark">已关闭</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="btn-tap-left"></div>
      </div>
    </div>
  </div>
</template>

<script>
  /*eslint-disable no-undef*/
  import CCollectionLabel from '../components/util-bar-head.vue';
  import CListGroupDate from '../components/list-group-date.vue';

  export default {
    components: {
      CCollectionLabel,
      CListGroupDate
    },
    data () {
      return {
        sidebarLeft    : window.innerWidth - 80,
        touchStartEvent: {},
        alerms         : [
          {
            title : '堆石区压实',
            detail: '预计滞后xx月',
            status: '待处理'
          },
          {
            title : '单元工程',
            detail: '预计滞后xx月',
            status: '待处理'
          },
          {
            title : '心墙2017年',
            detail: '预计滞后xx月',
            status: '待处理'
          },
          {
            title : '心墙2017年',
            detail: '预计滞后xx月',
            status: '待处理'
          }
        ]
      };
    },
    methods   : {
      onSideBtnTouchstart: function (e) {
        //        console.log(e);
        this.touchStartEvent = e;
        console.log(this.$style);
      },
      onSideBtnTouchmove : function (e) {
        let mx = Math.min(window.innerWidth - 16, e.touches[0].clientX) - 80;
        console.log(e.touches[0].clientX);
        this.sidebarLeft = Math.max(mx, 0);

        console.log(this.sidebarLeft);
        if (this.touchStartEvent) {
          e.stopPropagation();
        }
      },
      onSideBtnTouchend  : function (e) {
        this.touchStartEvent = false;
        this.sidebarLeft     = this.sidebarLeft > window.innerWidth / 2 ? window.innerWidth - 80 : 0;
      }
    }
  };
</script>
<style scoped>

  .btn-tap-left {
    z-index: 8;
    position: absolute;
    width: 16px;
    height: 256px;
    background-color: white;
    top: calc(50% - 128px);
    margin-left: -16px;
    border-radius: 16px 0 0 16px;
    box-shadow: -2px 0 2px #555;
  }

  .sidebar-rigth {
    position: fixed;
    width: 100%;
    height: 100%;
    /*background-color: rgba(0, 0, 0, 0.43);*/
  }

  .sidebar-rigth-content {
    width: 80%;
    height: 100%;
    float: right;
    box-shadow: 0 -2px 12px #555;
    background-color: white;
  }

  .sidebar-rigth-content.container {

    z-index: 9;
  }
</style>
