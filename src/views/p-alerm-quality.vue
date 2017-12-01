<template>
  <div class="mui-content">
    <ul class="mui-table-view">
      <li
        v-for="alerm in alerms"
        class="mui-table-view-cell">
        <div class="mui-row">
          <div class="mui-col-xs-4">
            <h4>{{alerm.title}}</h4>
          </div>
          <div class="mui-col-xs-4">
            <h5>{{alerm.detail}}</h5>
          </div>
          <div class="mui-col-xs-4">
            <h5>{{alerm.status}}</h5>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        alerms: [
          {
            title : '心墙2017年',
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
</style>
