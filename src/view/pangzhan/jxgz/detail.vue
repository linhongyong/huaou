<template>
	<div style="width: 90%; margin: 0 auto;">
		<!-- http://47.98.132.165:18088 -->
		<div style="text-align: right; position: absolute; top: 10px; right: 60px;">
			<form class="" :action="'https://www.therethey.com//jxZkGzzPzjl/download?id='+obj.id" method="post" style="display: inline-block;">
				<input class="btn" type="submit" value="导出word" style=""/>
			</form>
			<button class="btn" style="margin-left: 10px;"  @click="printTable">打印</button>
		</div>
		<div id="myElementId" >
			<div class="display-flex-center-between" style="font-weight: bolder; font-size: larger;">
				<div>监C4</div> <div>编 号：{{obj.number}}</div>
			</div>
			<h1 style="padding: 20px; text-align: center;">旁站监理记录（机械钻孔灌注桩）</h1>
			<div style="font-size: larger; padding-bottom: 5px;">工程名称：{{ obj.projectName }}</div>
			<div class="border-t border-l border-r" style="font-size: larger;">
				<div class="flex border-b">
					<div class="flex-1 p-10">当日气候：{{ obj.weather }}</div><div class="border-l flex-1 p-10">施工单位：{{ obj.buildCompany }}</div>
				</div>
				<div class="border-b p-10">
					<span>旁站的部位或工序：</span> 
					<span>{{ obj.buildingCode }} </span> 
					<span class=""> {{ obj.pileCode }} </span>     
				</div>
				<div class="flex border-b">
					<div class="flex-1 p-10">旁站监理开始时间：<span class="valuep2">{{obj.startTime}}</span>；</div><div class="border-l flex-1 p-10">旁站监理结束时间：<span class="valuep2">{{obj.endTime}}</span>；</div>
				</div>
				<div class="p-10 border-b">
					<div class="">一、机械设备</div>
					<div class="padding-left-40">
						<span>钻机型号： <span class="valuep">{{obj.drillModel}}</span>； </span>
						<span class="p-l-10">工作状态： <span class="valuep">{{obj.workState}}</span> ；</span>
						<span class="p-l-10">桩机号: <span class="valuep">{{obj.pilingMachine}}</span> ;</span>        
					</div>
					
					<div class="">二、材料质量</div>
					<div class="padding-left-40 p-5-l-10">
						<span>钢筋笼配筋：</span> 
						<span class="p-l-10">主筋数量： <span class="valuep">{{obj.mainBarCount}}</span> ；</span> 
						<span class="p-l-10">主筋： <span class="valuep">{{obj.mainBarType}}</span> ；</span>   
						<span class="p-l-10">箍筋： <span class="valuep">{{obj.circularBar}}</span> ；</span>   
						<span class="">加强箍： <span class="valuep">{{obj.strongBar}}</span> ；</span> 
					</div>
					<div class="padding-left-40 p-5-l-10"> 
						<span>钢筋笼数量： <span class="valuep">{{obj.barCageCount}} </span> 节；</span>   
						<span class="p-l-10">钢筋笼长度： <span class="valuep">{{obj.length}} </span>m；  </span>  
						<span class="p-l-10">钢筋及焊接结论：<span class="valuep">{{obj.weldingResult}}</span> ；</span> 
					</div>
					
					<div class="">三、设计情况</div>
					<div class="padding-left-40 p-5-l-10">
						<span>平台标高/护筒标高A： <span class="valuep">{{obj.platformElevation}}  </span>m；</span>
						<span class="p-l-10">设计桩长B：<span class="valuep">{{obj.designPileLength}} </span>m；</span> 
						<span class="p-l-10">桩顶标高C：<span class="valuep">{{obj.pileTopHeight}}  </span>m；</span>
					</div>
					<div class="padding-left-40 p-5-l-10">
						<span>本次测量成孔深度：<span class="valuep">{{ bencishen}}  </span>m；</span>  <!-- (B+A-C）  --> 
						<span class="p-l-10">本次钢筋笼吊筋长度： <span class="valuep">{{bencigangchang}}  </span>m；</span> <!-- A-C-0.5 (M）  -->
						<span class="p-l-10">设计桩径：  <span class="valuep">{{obj.designPileLength}} </span>mm；</span>
					</div>
					
					<div class="">三、施工情况</div>
					<div class="padding-left-40 p-5-l-10">
						<span>开孔时间：<span class="valuep2">{{obj.openTime}}</span>；</span> <span class="p-l-10">实际孔深E： <span class="valuep">{{obj.actualDeep}}</span> m；</span>  
						<span class="p-l-10">有效桩长: <span class="valuep">{{ youxiaozhuangchang}}</span> m；</span><!-- (C+E-A)  -->
					</div>
					<div class="padding-left-40 p-5-l-10"><span>下钢筋笼时间：<span class="valuep2">{{obj.dropCageStartTime}}</span>；至 <span class="valuep2">{{obj.dropCageEndTime}}</span>; </span> </div>
					<div class="padding-left-40 p-5-l-10"><span>二次清孔：  <span class="valuep2">{{obj.secondCleanStartTime}}</span>；至 <span class="valuep2">{{obj.secondCleanEndTime}}</span>；    </span></div>
					<div class="padding-left-40 p-5-l-10">
						<span>二次测量孔深：  <span class="valuep">{{obj.secondActualDeep}}</span>    m；</span>   
						<span class="p-l-10">沉渣厚度：  <span class="valuep">{{chengzhahoudu}}</span>   mm；</span>
					</div>
					<div class="padding-left-40 p-5-l-10"><span>泥浆比重： <span class="valuep">{{obj.slurryProp}}</span>； </span> <span>终孔时间： <span class="valuep2">{{obj.stopTime}}</span>；</span></div>
					<div class="padding-left-40 p-5-l-10"><span>入岩深度： <span class="valuep">{{obj.deptRock}}</span> cm；</span>  <span>入岩时间： <span class="valuep2">{{obj.rockTime}}</span>；</span></div>
					
					<div class="">四、灌注情况</div>
					<div class="padding-left-40 p-5-l-10">
						<span>砼强度等级： <span class="valuep">{{obj.concreteStrongLevel}}</span>；</span> 
						<span class="p-l-10">灌注开始时间：<span class="valuep2">{{obj.perfusionStartTime}}</span>；</span>  
					</div>
					<div class="padding-left-40 p-5-l-10">
						<span class="">第一次灌入量: <span class="valuep">{{obj.firstIrrigationAmount}}</span>m³；</span>
						<span class="p-l-10">灌注结束时间：<span class="valuep2">{{obj.perfusionEndTime}}</span>；</span>  
					</div>
					<div class="padding-left-40 p-5-l-10"><span>设计坍落度： <span class="valuep">{{obj.designSlump}}</span>mm；</span> <span class="p-l-10">实测坍落度： <span class="valuep">{{obj.actualSlump}}</span>mm；</span></div>
					<div class="padding-left-40 p-5-l-10"><span>砼理论方量： <span class="valuep">{{obj.theoryVolume}}</span>m³；</span> <span class="p-l-10">砼实灌方量： <span class="valuep">{{obj.actualVolume}}</span>m³；</span></div>
					<div class="padding-left-40 p-5-l-10"><span>充盈系数： <span class="valuep">{{obj.fillingCoefficient=="NaN" ? "":obj.fillingCoefficient}}</span>；</span> <span class="p-l-10">试块制作组数： <span class="valuep">{{obj.sampleMaking}}</span>组； </span></div>
				</div>	
				<div class="p-10 border-b">
					<div>发现的问题及处理情况：</div>
					<div class="p-10 padding-left-40 " style="min-height: 70px;">{{ obj.problemContent ? obj.problemContent : "施工正常" }}</div>
				</div>
				<div class="p-10 border-b" style="text-align: right; min-height: 50px;">
					<div class="">旁站监理人员：<span class="valuep">{{obj.superName}}</span></div>
					<div class="">日期：<span class="valuep"><DateTimeToDate :timedate="obj.updateTime"></DateTimeToDate></span></div>
				</div>
			</div>
		</div>
    <div class="flex" style="margin-top: 20px;">
      <span class="">孔深照片：</span>
      <img  v-for="(item, index) in obj.actualDeepImg" v-bind:key="index" :src="item" width="100" height="100"/>
			<span style="margin-left: 20px;"  v-if="!obj.actualDeepImg || !obj.actualDeepImg.length">暂无相关照片</span>
    </div>
    <div class="flex" style="margin-top: 20px;">
      <span class="">钢筋笼照片组：</span>
      <img  v-for="(item, index) in obj.barCageCountImg" v-bind:key="index" :src="item" width="100" height="100"/>
			<span style="margin-left: 20px;"  v-if="!obj.barCageCountImg || !obj.barCageCountImg.length">暂无相关照片</span>
    </div>
    <div class="flex" style="margin-top: 20px;">
      <span class="">岩样照片：</span>
      <img  v-for="(item, index) in obj.deptRockUrl" v-bind:key="index" :src="item" width="100" height="100" />
			<span style="margin-left: 20px;" v-if="!obj.deptRockUrl || !obj.deptRockUrl.length">暂无相关照片</span>
    </div>
  </div>
</template>
<script>
import jQuery from "jquery"
import {jQueryPrint} from '@/libs/jQuery.print'
import math from '@/libs/math'
jQueryPrint(jQuery);
import DateTimeToDate from "../../components/datetime-to-date/datetime-to-date.vue"
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
  methods: {
		printTable: function(){
			jQuery("#myElementId").print();
		}
  },
	computed:{
		bencishen: function(){
			if(!this.obj.platformElevation || !this.obj.designPileLength || !this.obj.pileTopHeight){
				return ""
			}
			return  math.accSub(math.accAdd(this.obj.platformElevation , this.obj.designPileLength) , this.obj.pileTopHeight);
		},
		bencigangchang:  function(){
			if(!this.obj.platformElevation || !this.obj.pileTopHeight){
				return ""
			}
			return math.accSub(math.accSub(this.obj.platformElevation , this.obj.pileTopHeight) , 0.5);
		},
		youxiaozhuangchang:  function(){
			if(!this.obj.pileTopHeight || !this.obj.actualDeep || !this.obj.platformElevation){
				return ""
			}
			return math.accSub(math.accAdd(this.obj.pileTopHeight , this.obj.actualDeep) , this.obj.platformElevation);
		},
		chengzhahoudu:  function(){
			if(!this.obj.actualDeep || !this.obj.secondActualDeep){
				return ""
			}
			return math.accSub(this.obj.actualDeep ,this.obj.secondActualDeep)*1000;
		},
	},
  mounted () {

  }
}
</script>
<style>
	.valuep{
		display: inline-block;
		min-width: 30px;
		text-align: center;
	}
	.valuep2{
		display: inline-block;
		min-width: 80px;
		text-align: center;
	}
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