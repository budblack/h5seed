<template>
  <div>
    <CCollectionLabel></CCollectionLabel>
    <CListGroupDate></CListGroupDate>
  </div>
</template>

<script>
  import CCollectionLabel from '../components/HelloWorld.vue';
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


</style>
