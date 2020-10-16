<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="chart" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' //局部使用
//import echarts from 'echarts' //局部使用定义的位置,与下面使用相对应var myChart = echarts.init(document.getElementById('chart'));

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
        // 基于准备好的dom，初始化echarts实例。全局定义用this.$echarts
        var myChart = this.$echarts.init(document.getElementById('chart'));
        //如果是局部定义，是下面
        //var myChart = echarts.init(document.getElementById('chart'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


    }

  }
}
</script>
