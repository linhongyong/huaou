<template>
  <div style="width: 90%; margin: 0 auto;">
    <div class=" padding-v-5">一、材料进场情况：</div>
		<div class="flex">
			<div class=" padding-v-5">进场日期：{{ obj.enterDate }}</div> 
			<div class="padding-v-5 padding-left-40">等级：{{ obj.steelGrade }}</div>
			<div class="padding-v-5 padding-left-40">生产厂家：{{ obj.manufacturer }}</div>
			<div class="padding-v-5 padding-left-40">规格：{{ obj.specifications }}</div>
			
		</div>
		<div class="flex">
			<div class="padding-v-5 padding-left-40">数量（t）：{{ obj.amount }}</div>
			<div class="padding-v-5 padding-left-40">炉批号：{{ obj.heatNo }}</div>
			<div class=" padding-v-5 padding-left-40">生产日期：<StampToDate :timestamp="obj.manufactureDate"></StampToDate></div> 
			<div class="padding-v-5 padding-left-40">卸料堆放时间：{{ obj.stackingTime }}</div>
			<!-- <div class="padding-v-5 padding-left-40">卸料堆放：{{ obj.stackingImages }}</div> -->
		</div>
		
		<div class=" padding-v-5">一、检测使用情况：</div>
		<div class="flex">
			<div class=" padding-v-5">送检日期：{{ obj.inspectionDate }}</div> 
			<div class="padding-v-5 padding-left-40">工程使用部位：{{ obj.usePart }}</div>
			<div class="padding-v-5 padding-left-40">检测报告编号：{{ obj.testReportNo }}</div>
			<div class="padding-v-5 padding-left-40">检测结果：{{ obj.testResult }}</div>
		</div>
		<div class="flex" style="margin-top: 20px;">
			<div class="padding-left-40">卸料堆放照片：</div>
			<img  v-for="(item, index) in obj.stackingImages" v-bind:key="index" :src="item" width="100" height="100"/>
		</div>
  </div>
</template>
<script>
	import StampToDate from "../../components/stamp-to-date/stamp-to-date.vue"
export default {
	components: {
		StampToDate,
	},
  data () {
    return {
      formItem: {
        templateId: 0,
        weather: '',
        buildCompany: '',
        building: ''
      },
      templateList: []
    }
  },
  props: {
    obj: {
      type: Object,
      default () {
        return {
          templateId: 0,
          weather: '',
          buildCompany: '',
          building: 0,
          actualDeepImg: [],
          barCageCountImg: []
        }
      }
    }
  },
  methods: {
		print: function(){
			let bdhtml=window.document.body.innerHTML;//获取当前页的html代码
			let sprnstr="<!--startprin1-->";//设置打印开始区域
			let eprnstr="<!--endprint1-->";//设置打印结束区域
			prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+18); //从开始代码向后取html
			prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//从结束代码向前取html
			window.document.body.innerHTML=prnhtml;
			window.print();
			window.document.body.innerHTML=bdhtml;
		}
  },
  mounted () {

  }
}
</script>
<style>
  .flex{
  display: flex;
  }
  .flex-6{
  flex: 6;
  }
  .flex-3{
  flex: 3;
  }
  .row{
  overflow: hidden;
  }
  .float-l{
  float: left;
  }
  .padding-v-5{
  padding-top: 5px;
  padding-bottom: 5px;;
  }
  .padding-left-40{
  padding-left: 40px;;
  }
  .btn{
  float: right;
  background-color: #1890FF;
  outline: none;
  border: none;
  padding: 5px;
  color: white;
  }
</style>