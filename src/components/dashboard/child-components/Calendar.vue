<template>
  <b-card header-tag="header" class="animated fadeInLeft">
    <template slot="header">
      <i class="iconfont icon-listalt"></i> &nbsp 日历
    </template>
    <div id="calendar"></div>
  </b-card>
</template>
<script>
  import $ from 'jquery';
  import 'fullcalendar';
  import 'fullcalendar-scheduler'

  export default {
    name: "Calendar",
    data() {
      return {

      }
    },
    mounted() {
      $('#calendar').fullCalendar({
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        defaultView: 'month',
        locale: "zh-cn",
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        footer: {
          left: "today",
          center: 'month,timeLineWeek,timeLineDay'
        },
        // 按钮文字
        buttonText:{
          today: '今天',
          month: '月视图',
          week: '周视图',
          day: '日视图',
          list: 'list'
        },
        // 切换按钮
        views: {
          timeLineWeek: {
            type: 'timeline',
            duration: {
              week: 1
            }
          },
          timeLineDay: {
            type: 'timeline',
            duration: {
              day: 1
            }
          }
        },
        handleWindowResize: false,

      });
    }
  }

</script>
<style scoped>


</style>
