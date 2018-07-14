<template>
  <footer class="pl-6 pr-6">
    <p class="title">
        <i class="iconfont icon-user"></i>企业信息
    </p>
    <p class="info">
       基于Vue搭建的企业后台管理界面，使用了bootstrap-vue UI库，响应式布局，包含了Echarts表格插件和FullCalendar日历插件。
    </p>
  </footer>
</template>
<script>
  export default{
    name:"MainFooter",
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  footer{
    margin-top: 2.5rem;
    background-color: #1A1A1A;
    height: 5rem;
    color: #BBBBBB;
    padding-top: 0.8rem;
  }
  p{
    margin: 0;
    font-size: 0.8rem;
  }
  p.info{
    font-size: 0.5rem; 
  }
</style>
