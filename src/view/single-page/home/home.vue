<template>
  <div class="display-flex-center">
    <div id="myChart" :style="{width: '600px', height: '300px'}"></div>
    <div id="myChart2" :style="{width: '600px', height: '300px'}"></div>
  </div>
</template>

<script>

let echarts = require('echarts/lib/echarts')// 引入基本模板
require('echarts/lib/chart/bar')// 引入柱状图组件
require('echarts/lib/chart/line')

require('echarts/lib/component/tooltip')// 引入提示框和title组件
require('echarts/lib/component/title')
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '机械灌注桩旁站完成情况（每日）' },
        tooltip: {},
        xAxis: {
          data: ["11-01", "11-02", "11-03", "11-04", "11-05", "11-06","11-07", "11-08", "11-09", "11-10", "11-11", "11-12"]
        },
        yAxis: {},
        series: [{
          name: '完成桩数',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20,5, 20, 36, 10, 10, 20],
          itemStyle:{
            color: '#3B94F1'
          }
        }]
      });
    },
    drawLine2() {
      var dom = document.getElementById("myChart2");
      var myChart = echarts.init(dom);
      var app = {};
      let option = null;
      option = {
        title: { text: '机械灌注桩旁站完成情况（累计）' },
        tooltip: {},
          xAxis: {
              type: 'category',
              data: ["11-01", "11-02", "11-03", "11-04", "11-05", "11-06","11-07", "11-08", "11-09", "11-10", "11-11", "11-12"]
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              name: '完成总数',
              data: [5, 25, 61, 71, 81, 101, 106,126,162,172,182,202],
              type: 'line',
              itemStyle:{
                color: '#3B94F1',
                borderWidth: 4
              }
          }]
      };
      ;
      if (option && typeof option === "object") {
          myChart.setOption(option, true);
      }
    }
  }
}

</script>

<style lang="less">
.count-style {
  font-size: 50px;
}

.center {
  text-align: center;
}
</style>
