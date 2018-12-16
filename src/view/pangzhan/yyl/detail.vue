<template>
  <div style="width: 90%; margin: 0 auto;">
		<div style="position: absolute; top: 10px; right: 60px;">
			<button class="btn" style="margin-left: 20px;cursor: pointer;"  @click="exportWord">导出word</button>
			<button class="btn" style="margin-left: 20px;cursor: pointer;"  @click="printTable">直接打印</button>
		</div>
    <!-- <div style="text-align: right; position: absolute; top: 10px; right: 60px;">
    	<form class="" :action="'https://www.therethey.com//jxZkGzzPzjl/download?id='+obj.id" method="post" style="display: inline-block;">
    		<input class="btn" type="submit" value="导出word" style=""/>
    	</form>
    	<button class="btn" style="margin-left: 10px;"  @click="printTable">打印</button>
    </div> -->
    <div id="myElementId" >
    	<div class="display-flex-center-between" style="font-weight: bolder; font-size: larger;">
    		<div>监C4</div> <div>编 号：0001</div>
    	</div>
    	<h1 style="padding: 20px; text-align: center;">旁站监理记录 （预应力管桩）</h1>
    	<div style="font-size: larger; padding-bottom: 5px;">工程名称：{{ obj.projectName }}</div>
    	<div class="border-t border-l border-r" style="font-size: larger;">
    		<div class="flex border-b">
    			<div class="flex-1 p-10">当日气候：{{ obj.weather }}</div><div class="border-l flex-1 p-10">施工单位：{{ obj.buildCompany }}</div>
    		</div>
    		<div class="border-b p-10">
    			<span>旁站的部位或工序：</span> 
    			<span>{{ buildingCode }}</span> 
    			<span class=""> {{ obj.pileCode }} ;</span> 
    		</div>
    		<div class="flex border-b">
    			<div class="flex-1 p-10">旁站监理开始时间：{{obj.startTime}}；</div><div class="border-l flex-1 p-10">旁站监理结束时间：{{obj.endTime}}；</div>
    		</div>
    		<div class="p-10 border-b">
    			<div class="">一、机械设备： {{obj.equipment}}；<span class="p-l-10">桩机号： {{obj.workState}}</span></div>
    			
    			<div class="">二、人员情况	</div>
    			<div class="padding-left-40 p-5-l-10">
    				<span class="p-l-10">管理人员： {{obj.administrator}}；</span> 
    				<span class="p-l-10">特种操作人员： {{obj.operator}}；</span>   
    			</div>
					
    			<div class=""> 
    				<span>三、材料质量： {{obj.material_quality}} ；</span>   
    			</div>
    			
    			<div class="">四、施工情况</div>
    			<div class="padding-left-40 p-5-l-10">
    				<span>设计桩长： {{obj.pileLength}}  m；</span>
    				<span class="p-l-10">设计直径:   {{obj.designDiameter}} m；</span> 
    			</div>
					<div class="padding-left-40 p-5-l-10">
						<span class="p-l-10">管桩壁厚：  {{obj.pileTopHeight}}  m；</span>
						<span class="p-l-10">放样:   {{obj.lofting}} m；</span> 

					</div>
    			<div class="padding-left-40 p-5-l-10">
    				<span>地面标高A：{{obj.ground_height}}  m；</span>   
    				<span class="p-l-10"> 桩顶标高B： {{obj.pileTopHeight}}  m；</span> 
    				<span class="p-l-10">送桩深度（A-B）：  {{obj.designPileLength}} mm；</span>
    			</div>
    			<div class="padding-left-40 p-5-l-10">
    				<span>配桩情况节（m）：{{obj.pileMatching}}  m；</span>   
    			</div>
					<div class="padding-left-40 p-5-l-10">
						<span>冷却情况（分钟）：{{obj.currentHoleDepth}}  m；</span>   
					</div>
    			<div class="padding-left-40 p-5-l-10">
    				<span>最后压力值（pa）：{{obj.lastPressure}} ；</span>   
    				<span class="p-l-10"> 最后10cm锤击数： {{obj.lastTenHitLrrigation}}  次；</span> 
    			</div>
					<div class="padding-left-40 p-5-l-10">
						<span>最后10击灌入量：{{obj.lastTenHitLrrigation}}mm ；</span>   
						<span class="p-l-10"> 垂直度： {{obj.currentDropCageLength}}  次；</span> 
					</div>
					<div class="padding-left-40 p-5-l-10">
						<span>实际桩顶标高：{{obj.actualElevation}} m；</span>   
						<span class="p-l-10"> 总锤击数： {{obj.currentDropCageLength}}  次；</span> 
					</div>
    			
    		</div>	
    		<div class="p-10 border-b">
					<div>发现的问题及处理情况：</div>
					<div class="p-10 padding-left-40 " style="min-height: 50px;">{{ obj.problem ? obj.problem : "施工正常" }}</div>
    		</div>
    		<div class="p-10 border-b">
					<div>整改意见：</div>
					<div class="p-10 padding-left-40 " style="min-height: 50px;">{{ obj.suggestion }}</div>
    		</div>
    		<div class="p-10 border-b">
					<div>处理结果：</div>
					<div class="p-10 padding-left-40 " style="min-height: 50px;">{{ obj.result }}</div>
    		</div>
    		<div class="p-10 border-b" style="text-align: right; min-height: 50px;">
					<div class="">旁站监理人员：{{obj.superName}}</div>
					<div class="">日期：<DateTimeToDate :timedate="obj.updateTime"></DateTimeToDate></div>
    		</div>
    	</div>
    </div>
  </div>
</template>
<script>
	import jQuery from "jquery"
	import {jQueryPrint} from '@/libs/jQuery.print'
	jQueryPrint(jQuery);
	import DateTimeToDate from "../../components/datetime-to-date/datetime-to-date.vue"
	import pangzhanApi from "@/api/pangzhan-api";

export default {
	components: {
		DateTimeToDate,
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
	computed: {
		buildingCode() {
			return this.$store.state.user.building.buildingCode;
		},
	},
  methods: {
		exportWord: function(){
			const data = {
				id: this.obj.id,
			};
			pangzhanApi.exportYYLGZWord(data);
		},
		printTable: function(){
			jQuery("#myElementId").print();
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
  .flex-1{
  	flex: 1;
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
  .btns{
  	float: right;
  }
  .btn{
  	background-color: #1890FF;
  	outline: none;
  	border: none;
  	padding: 5px;
  	color: white;
  }
  .border-all{
  	border: 1px solid #000000;
  }
  .border-t{
  	border-top: 1px solid #000000;
  }
  .border-b{
  	border-bottom: 1px solid #000000;
  }
  .border-l{
  	border-left: 1px solid #000000;
  }
  .border-r{
  	border-right: 1px solid #000000;
  }
  .p-10{
  	padding: 10px;
  }
  .p-5-l-10{
  	padding-top: 5px;
  	padding-bottom: 5px;
  	padding-right: 10px;
  }
  .p-l-10{
  	padding-left: 20px;
  }
</style>