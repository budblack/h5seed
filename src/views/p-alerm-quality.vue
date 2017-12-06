<template>
  <div>
    <!--<CCollectionLabel></CCollectionLabel>-->
    <CListGroupDate></CListGroupDate>
    <div class="sidebar-rigth">
      <div class="sidebar-rigth-content">
        <div class="container">

          <div>
            <div class="heading">
              <div class="title"><strong>今天</strong>
                <small class="muted">7月6日</small>
              </div>
              <nav class="nav">
                <a><i class="icon icon-sort-by-attributes-alt"></i></a>
              </nav>
            </div>

            <div class="list section">
              <a class="item multi-lines with-avatar">
                <div class="avatar circle red outline">1</div>
                <div class="content">
                  <span class="title">为响应式开发增加更多的内容</span>
                  <div>
                    <small class="text-green">#新增功能</small>&nbsp;
                    <small class="muted">今天 20:00</small>
                    <div class="pull-right label red-pale text-tint">进行中</div>
                  </div>
                </div>
              </a>
              <a class="item multi-lines with-avatar">
                <div class="avatar circle yellow outline">2</div>
                <div class="content">
                  <span class="title">增加更多的场景示例</span>
                  <div>
                    <small class="text-blue">#文档</small>&nbsp;
                    <small class="muted">今天 18:00</small>
                    <div class="pull-right label blue-pale text-tint">未开始</div>
                  </div>
                </div>
              </a>
              <a class="item multi-lines with-avatar">
                <div class="avatar circle yellow outline">2</div>
                <div class="content">
                  <span class="title">增加轮播</span>
                  <div>
                    <small class="text-green">#新增功能</small>&nbsp;
                    <small class="muted">今天 12:00</small>
                    <div class="pull-right label blue-pale text-tint">未开始</div>
                  </div>
                </div>
              </a>
              <a class="item multi-lines with-avatar">
                <div class="avatar circle purple outline">3</div>
                <div class="content">
                  <span class="title">处理 Bug 列表</span>
                  <div>
                    <small class="text-red">#BUG</small>&nbsp;
                    <small class="muted">今天 12:00</small>
                    <div class="pull-right label blue-pale text-tint">未开始</div>
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
                  <span class="title">增加卡片控件</span>
                  <div>
                    <small class="text-red">#新增功能</small>&nbsp;
                    <small class="muted">7月5日 10:00</small>
                    <div class="pull-right label green">已完成</div>
                  </div>
                </div>
              </a>
              <a class="item multi-lines with-avatar">
                <div class="avatar circle green"><i class="icon-check"></i></div>
                <div class="content">
                  <span class="title">增加轻量的路由功能</span>
                  <div>
                    <small class="text-red">#新增功能</small>&nbsp;
                    <small class="muted">7月5日 9:00</small>
                    <div class="pull-right label green">已完成</div>
                  </div>
                </div>
              </a>
              <a class="item multi-lines with-avatar">
                <div class="avatar circle dark"><i class="icon-minus"></i></div>
                <div class="content">
                  <span class="title">整理文档</span>
                  <div>
                    <small class="text-yellow">#日常任务</small>&nbsp;
                    <small class="muted">7月4日 9:00</small>
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
        alerms: [
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
    }
  };
</script>

<style scoped>
  .btn-tap-left {
    z-index: 8;
    position: absolute;
    width: 16px;
    height: 256px;
    background-color: #f1f1f1;
    top: calc(50% - 128px);
    margin-left: -16px;
    border-radius: 16px 0 0 16px;
  }

  .sidebar-rigth {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.43);
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
