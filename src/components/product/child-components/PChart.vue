<template>
  <b-card header-tag="header" class="animated fadeInDown">
    <template slot="header">
      <i class="iconfont icon-cc-chart"></i> &nbsp 产品分布
    </template>
  
    <div id="PChart" class="PChart">

    </div>
  </b-card>
</template>
<script>
  var echarts = require('echarts')
  export default {
    name:"PChart",
    data(){
      return {

      }
    },
    mounted() {
      var myChart = echarts.init(document.getElementById('PChart'))
      myChart.setOption({
        title : {
        text: '产品分布',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [20, 110],
            center : ['25%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:10, name:'产品1'},
                {value:5, name:'产品2'},
                {value:15, name:'产品3'},
                {value:25, name:'产品4'},
                {value:20, name:'产品5'},
                {value:35, name:'产品6'},
                {value:30, name:'产品7'},
                {value:40, name:'产品8'}
            ]
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:[
                {value:10, name:'产品1'},
                {value:5, name:'产品2'},
                {value:15, name:'产品3'},
                {value:25, name:'产品4'},
                {value:20, name:'产品5'},
                {value:35, name:'产品6'},
                {value:30, name:'产品7'},
                {value:40, name:'产品8'}
            ]
        }
    ]
      })
    },
  }
</script>
<style scoped>
  .PChart{
    height: 20rem;
  }
</style>