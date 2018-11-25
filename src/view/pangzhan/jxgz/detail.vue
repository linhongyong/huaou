<template>
	<div style="width: 90%; margin: 0 auto;">
		<div style="text-align: right; position: absolute; top: 10px; right: 60px;">
			<form class="" :action="'http://47.98.132.165:18088//jxZkGzzPzjl/download?id='+obj.id" method="post" style="display: inline-block;">
				<input class="btn" type="submit" value="导出word" style=""/>
			</form>
			<button class="btn" style="margin-left: 10px;"  @click="printTable">打印</button>
		</div>
		<div id="myElementId" >
			<div class="display-flex-center-between" style="font-weight: bolder; font-size: larger;">
				<div>监C4</div> <div>编 号：0001</div>
			</div>
			<h1 style="padding: 20px; text-align: center;">旁站监理记录（机械钻孔灌注桩）</h1>
			<div style="font-size: larger; padding-bottom: 5px;">工程名称：{{ obj.projectName }}</div>
			<div class="border-t border-l border-r" style="font-size: larger;">
				<div class="flex border-b">
					<div class="flex-1 p-10">当日气候：{{ obj.weather }}</div><div class="border-l flex-1 p-10">施工单位：{{ obj.buildCompany }}</div>
				</div>
				<div class="border-b p-10">
					<span>旁站的部位或工序：</span> 
					<span>{{ obj.buildingCode }}楼 ;</span> 
					<span class="p-l-10">{{ obj.pileCode }}栋 ;</span> 
					<span class="p-l-10">桩机号: {{obj.pilingMachine}};</span>        
					<span class="p-l-10">备注: {{obj.remarks}};</span>     
				</div>
				<div class="flex border-b">
					<div class="flex-1 p-10">旁站监理开始时间：{{obj.startTime}}；</div><div class="border-l flex-1 p-10">旁站监理结束时间：{{obj.endTime}}；</div>
				</div>
				<div class="p-10 border-b">
					<div class="">一、机械设备</div>
					<div class="padding-left-40"><span>钻机型号： {{obj.drillModel}}； </span><span class="p-l-10">工作状态： {{obj.workState}}</span></div>
					
					<div class="">二、材料质量</div>
					<div class="padding-left-40 p-5-l-10">
						<span>钢筋笼配筋：</span> 
						<span class="p-l-10">主筋数量： {{obj.mainBarCount}}；</span> 
						<span class="p-l-10">主筋： {{obj.mainBarType}}；</span>   
						<span class="p-l-10">箍筋： {{obj.circularBar}}；</span>   
						<span class="p-l-10">加强箍： {{obj.strongBar}}；</span> 
					</div>
					<div class="padding-left-40 p-5-l-10"> 
						<span>钢筋笼数量： {{obj.barCageCount}} 节；</span>   
						<span class="p-l-10">钢筋笼长度：： {{obj.barCageCount}} m；</span>  
						<span class="p-l-10">钢筋及焊接结论：{{obj.weldingResult}}；</span> 
					</div>
					
					<div class="">三、设计情况</div>
					<div class="padding-left-40 p-5-l-10">
						<span>平台标高/护筒标高A： {{obj.platformElevation}}  m；</span>
						<span class="p-l-10">设计桩长：B   {{obj.designPileLength}} m；</span> 
						<span class="p-l-10">桩顶标高：C  {{obj.pileTopHeight}}  m；</span>
					</div>
					<div class="padding-left-40 p-5-l-10">
						<span>本次测量成孔深度B+A-C (M）：{{obj.currentHoleDepth}}  m；</span>   
						<span class="p-l-10">本次钢筋笼吊筋长度A-C-0.5 (M）： {{obj.currentDropCageLength}}  m；</span> 
						<span class="p-l-10">设计桩径：  {{obj.designPileLength}} mm；</span>
					</div>
					
					<div class="">三、施工情况</div>
					<div class="padding-left-40 p-5-l-10">
						<span>开孔时间：{{obj.openTime}}</span> <span>实际孔深E： {{obj.actualDeep}} m；</span>  
						<span class="p-l-10">有效桩长(C+E-A)  {{obj.validPileLength}}      m；</span>
					</div>
					<div class="padding-left-40 p-5-l-10"><span>下钢筋笼时间：{{obj.dropCageStartTime}}；  至  {{obj.dropCageEndTime}}；   </span> </div>
					<div class="padding-left-40 p-5-l-10"><span>二次清孔：  {{obj.secondCleanStartTime}}；    至   {{obj.secondCleanEndTime}}；    </span></div>
					<div class="padding-left-40 p-5-l-10">
						<span>二次测量孔深：  {{obj.secondActualDeep}}    m；</span>   
						<span class="p-l-10">沉渣厚度：  {{obj.sedimentHeightDetail}}   mm；</span>
					</div>
					<div class="padding-left-40 p-5-l-10"><span>泥浆比重： {{obj.slurryProp}}； </span> <span>终孔时间： {{obj.stopTime}}；</span></div>
					<div class="padding-left-40 p-5-l-10"><span>入岩深度： {{obj.deptRock}} cm；</span>  <span>入岩时间： {{obj.rockTime}}；</span></div>
					
					<div class="">四、灌注情况</div>
					<div class="padding-left-40 p-5-l-10"><span>砼强度等级： {{obj.concreteStrongLevel}}；</span> <span class="p-l-10">灌注时间：{{obj.perfusionStartTime}}；</span>  <span>第一次灌入量:{{obj.firstIrrigationAmount}}m3；</span></div>
					<div class="padding-left-40 p-5-l-10"><span>设计坍落度： {{obj.designSlump}}mm；</span> <span class="p-l-10">实测坍落度： {{obj.actualSlump}}mm；</span></div>
					<div class="padding-left-40 p-5-l-10"><span>砼理论方量： {{obj.theoryVolume}}m3；</span> <span class="p-l-10">砼实灌方量： {{obj.actualVolume}}m3；</span></div>
					<div class="padding-left-40 p-5-l-10"><span>充盈系数： {{obj.fillingCoefficient}}；</span> <span class="p-l-10">试块制作组数： {{obj.sampleMaking}}组； </span></div>
				</div>	
				<div class="p-10 border-b">
					<div>发现的问题及处理情况：</div>
					<div class="p-10 padding-left-40 " style="min-height: 70px;">{{ obj.problemContent ? obj.problemContent : "施工正常" }}</div>
				</div>
				<div class="p-10 border-b" style="text-align: right; min-height: 50px;">
					<div class="">旁站监理人员：林洪勇</div>
					<div class="">日期：2018-11-15</div>
				</div>
			</div>
		</div>
    <div class="flex" style="margin-top: 20px;">
      <span class="">孔深照片：</span>
      <img  v-for="(item, index) in obj.actualDeepImg" v-bind:key="index" :src="item" width="100" height="100"/>
			<span style="margin-left: 20px;"  v-if="!obj.actualDeepImg.length">暂无相关照片</span>
    </div>
    <div class="flex" style="margin-top: 20px;">
      <span class="">钢筋笼照片组：</span>
      <img  v-for="(item, index) in obj.barCageCountImg" v-bind:key="index" :src="item" width="100" height="100"/>
			<span style="margin-left: 20px;"  v-if="!obj.barCageCountImg.length">暂无相关照片</span>
    </div>
    <div class="flex" style="margin-top: 20px;">
      <span class="">岩样照片：</span>
      <img  v-for="(item, index) in obj.deptRockUrl" v-bind:key="index" :src="item" width="100" height="100" />
			<span style="margin-left: 20px;" v-if="!obj.deptRockUrl.length">暂无相关照片</span>
    </div>
  </div>
</template>
<script>
import jQuery from "jquery"
import {jQueryPrint} from '@/libs/jQuery.print'
jQueryPrint(jQuery);
export default {
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