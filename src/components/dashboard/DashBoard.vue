<template>
  <b-row class="pr-6 pl-6">
    <b-col cols="6" class="pr-2">
      <Stats></Stats>
      <Calendar></Calendar>
      <Comment></Comment>
    </b-col>
    <b-col cols="6" class="pl-2">
        <ShortCuts></ShortCuts>
        <Chart></Chart>
        <Table></Table>
        <News></News>
    </b-col>
  </b-row>
    
</template>
<script>
  import $ from "jquery"
  import Stats from "./child-components/Stats"
  import ShortCuts from "./child-components/ShortCuts"
  import Calendar from "./child-components/Calendar"
  import Comment from "./child-components/Comment"
  import Chart from "./child-components/Chart"
  import Table from "./child-components/Table"
  import News from "./child-components/News"
  export default {
    name:"DashBoard",
    components:{
      Stats,
      ShortCuts,
      Calendar,
      Comment,
      Chart,
      Table,
      News
    },
    mounted() {
      window.onresize = function(e){
        let clientWidth = document.body.clientWidth 
        if(clientWidth < 1100){
          $('.pr-2.col-6').addClass('col-12')
          $('.searchForm').hide()
        }else{
          $('.pr-2.col-6').removeClass('col-12')
          $('.searchForm').show()
        }
      }
    },
  }
</script>
<style scoped>
</style>