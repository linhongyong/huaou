<template>
  <div style="width: 90%; margin: 0 auto;">
		<div style="position: absolute; top: 10px; right: 60px;">
			<button class="btn" style="margin-left: 20px;cursor: pointer;"  @click="exportWord">导出word</button>
			<button class="btn" style="margin-left: 20px;cursor: pointer;"  @click="printTable">直接打印</button>
		</div>
		<!-- <div style="text-align: right; position: absolute; top: 10px; right: 60px;">
			<form class="" :action="'https://www.therethey.com//snJbjPzjl/download?id='+obj.id" method="post" style="display: inline-block;">
				<input class="btn" type="submit" value="导出word" style=""/>
			</form>
			<button class="btn" style="margin-left: 10px;"  @click="printTable">打印</button>
		</div> -->
		<div id="myElementId" >
			<div class="display-flex-center-between" style="font-weight: bolder; font-size: larger;">
				<div>监C4</div> <div>编 号：{{ obj.number }}</div>
			</div>
			<h1 style="padding: 20px; text-align: center;">旁站监理记录({{obj.severalAxes }}水泥搅拌桩)</h1>
			<div style="font-size: larger; padding-bottom: 5px;">工程名称：{{ obj.projectName }}</div>
			<div class="border-t border-l border-r" style="font-size: larger;">
				<div class="flex border-b">
					<div class="flex-1 p-10">当日气候：{{ obj.weather }}</div><div class="border-l flex-1 p-10">施工单位：{{ obj.buildCompany }}</div>
				</div>
				<div class="border-b p-10">
					<span>旁站的部位或工序：</span> 
					<span>{{ buildingCode }}</span> 
					<span class=""> {{ obj.pileStartNum }};</span> 
				</div>
				<div class="flex border-b">
					<div class="flex-1 p-10">旁站监理开始时间：{{obj.lookStartTime}}；</div><div class="border-l flex-1 p-10">旁站监理结束时间：{{obj.lookEndTime}}；</div>
				</div>
				<div class="p-10 border-b">
					<div class="">一、机械设备</div>
					<div class="padding-left-40"><span>搅拌机型号： {{obj.blenderModel}}； </span><span class="p-l-10">工作状态： {{obj.blenderState}}</span></div>
					
					<div class="">二、材料质量</div>
					<div class="padding-left-40 p-5-l-10">
						<span class="p-l-10">水泥品种： {{obj.cementVarieties}}；</span> 
						<span class="p-l-10">供应单位： {{obj.supplier}}；</span>   
						<span class="p-l-10">质保、试验资料： {{obj.tryData}}；</span>   
					</div>
					
					<div class="">三、成桩情况</div>
					<div class="padding-left-40 p-5-l-10">
						<span>设计桩径： {{obj.desigePileDiameter}}  mm；</span>
						<span class="p-l-10">相对桩底标高：{{obj.pileBottomHeight}}；</span> 
					</div>
					<div class="padding-left-40 p-5-l-10">
						<span>桩顶标高：{{obj.pileTopHeight}}  m；</span>   
						<span class="p-l-10">设计桩长： {{obj.desigePileLength}}  m；</span> 
					</div>
					<div class="padding-left-40 p-5-l-10">
						<span>实际桩长：{{obj.actualPileLength}}  m；</span>   
						<span class="p-l-10">灰浆水灰比： {{obj.hjshProp}}；</span> 
					</div>
					<div class="padding-left-40 p-5-l-10">
						<span>成桩时间：{{obj.finishPileStartTime}}；</span> 至 <span class="p-l-10">{{obj.finishPileEndTime}}  m；</span> 
					</div>
					<div class="padding-left-40 p-5-l-10">
						<span>每桩孔水泥用量：{{obj.eachPlieCementCount}} kg；</span>   
						<span class="p-l-10">设计桩长： {{obj.desigePileLength}}  m；</span> 
					</div>
					<div class="padding-left-40 p-5-l-10">
						<span>水泥掺入量：{{obj.cementMixingAmount}}%；</span>   
						<span class="p-l-10">设计桩长： {{obj.desigePileLength}}  m；</span> 
					</div>
				</div>	
					
				<div class="p-10 border-b">
					<div>发现的问题及处理情况：</div>
					<div class="p-10 padding-left-40 " style="min-height: 50px;">{{ obj.problemContent ? obj.problemContent : "施工正常" }}</div>
				</div>
				<div class="p-10 border-b">
					<div>整改意见：</div>
					<div class="p-10 padding-left-40 " style="min-height: 50px;">{{ obj.rectification }}</div>
				</div>
				<div class="p-10 border-b">
					<div>处理结果：</div>
					<div class="p-10 padding-left-40 " style="min-height: 50px;">{{ obj.dealResult }}</div>
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
import snjblApi from '@/api/snjb-api'
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
    }
  },
  props: {
    obj: {
      type: Object,
      default () {
        return {
  
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
			pangzhanApi.exportSNJBWord(data);
		},
		printTable: function(){
			jQuery("#myElementId").print();
		},
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