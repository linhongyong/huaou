<template>
  <div style="width: 90%; margin: 0 auto;">
    <!-- <form :action="'http://47.98.132.165:18088//jxZkGzzPzjl/download?id='+obj.id" method="post">
      <input class="btn" type="submit" value="导出word" style=""/>
    </form> -->
		<!-- <input class="btn" type="submit" value="打印" onclick="print()"/> -->
    <!-- <div class="flex" >
      <div class="flex-6 padding-v-5">当日气候：{{ obj.weather }}</div>
    </div> -->
    <div class="flex  padding-left-40">
    <div class=" padding-v-5">一、人员设备：</div>
      <div class="flex">
        <div class=" padding-v-5">机械设备：{{ obj.equipment }}</div> 
				<div class="padding-v-5 padding-left-40">管理人员：{{ obj.administrator }}</div>
				<div class="padding-v-5 padding-left-40">特种操作人员：{{ obj.operator }}</div>
      </div>
    </div>
    <div class="padding-left-40">
      <div class="">二、材料质量</div>
      <div class="padding-v-5 padding-left-40">材料质量：{{ obj.materialQuality }}</div>
    </div>

     <div class="padding-left-40">
       <div class="">三、设计情况：</div>
       <div class="padding-v-5 padding-left-40">
           <div class="flex">
					  <div class="flex-3">设计桩直径  : {{ obj.designDiameter }}mm</div>
            <div class="flex-3">桩长 : {{ obj.pileLength }}m</div>
						<div class="flex-3">放样 :{{ obj.lofting }}</div>
						<div class="flex-3">地面标高 : {{ obj.groundHeight }}m</div>
						<div class="flex-3">桩顶标高 : {{ obj.pileTopHeight }}m</div>
						<div class="flex-3">配桩情况 : {{ obj.pileMatching }}m</div>
           </div>
       </div>
       <div class="padding-v-5 padding-left-40">
        <div class="flex">
             <div class="flex-3">最后压力值 : {{ obj.lastPressure }}pa</div>
             <div class="flex-3">最后10cm锤击数 : {{ obj.lastTenHitNum }}次</div>
             <div class="flex-3">最后10击灌入量 : {{ obj.lastTenHitLrrigation }}m³</div>
						 <div class="flex-3">实际标高 : {{ obj.actualElevation }}m</div>
        </div>
       </div>
     </div>
    <!-- <div class="flex">
      <span class="padding-left-40">孔深照片：</span>
      <img  v-for="(item, index) in obj.actualDeepImg" v-bind:key="index" :src="item" width="100" height="100"/>
      
    </div>
    <div class="flex">
      <span class="padding-left-40">钢筋笼照片组：</span>
      <img  v-for="(item, index) in obj.barCageCountImg" v-bind:key="index" :src="item" width="100" height="100"/>
    </div>
    <div class="flex">
      <span class="padding-left-40">岩样照片：</span>
      <img  v-for="(item, index) in obj.deptRockUrl" v-bind:key="index" :src="item" width="100" height="100"/>
    </div> -->
   <!-- <div class="" style="margin-top: 30px;">
      <div class="" style="min-height: 100px;">
         发现问题及处理情况：
         <div class="padding-v-5" style="text-indent: 2em;">
         	{{ obj.problemContent ? obj.problemContent : "施工正常" }}
         </div>
      </div>
    </div> -->
		<!--打印内容结束-->
		<!--endprint1-->
  </div>
</template>
<script>
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