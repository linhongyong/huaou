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

<template>
  <div style="width: 90%; margin: 0 auto;">
    <form :action="'http://47.98.132.165:18088//jxZkGzzPzjl/download?id='+obj.id" method="post">
      <input class="btn" type="submit" value="导出word" style=""/>
    </form>
    <div class="flex" >
      <div class="flex-6 padding-v-5">当日气候：{{ obj.weather }}</div><div class="flex-6 padding-v-5">施工单位：{{ obj.buildCompany }}</div>
    </div>
    <div class="flex padding-v-5">旁站的部位或工序：</div>

    <div class="flex" >
      <div class="flex-6 padding-v-5">旁站监理开始时间：{{ obj.startTime }}</div><div class="flex-6 padding-v-5">旁站监理结束时间：{{ obj.endTime }} </div>
    </div>

    <div class="flex  padding-left-40">
    <div class=" padding-v-5">一、机械设备：</div>
      <div class="flex">
        <div class=" padding-v-5">钻机型号{{ obj.drillModel }}</div> <div class="padding-v-5">工作状态{{ obj.workState }}</div>
      </div>
    </div>
    <div class="padding-left-40">
      <div class="">二、材料质量</div>
      <div class="padding-left-40">
        <div class="">
          <div class="">钢筋笼配筋：</div>
          <div class="padding-v-5 flex padding-left-40">
            <div class="flex-3">主筋 : {{ obj.mainBar }}</div>
            <div class="flex-3">箍筋 : {{ obj.circularBar }}</div>
            <div class="flex-3">加强箍 : {{ obj.strongBar }}</div>
          </div>
          <div class="padding-v-5 flex padding-left-40">
            <div class="flex-3">钢筋笼数量 : {{ obj.barCageCount }}</div>
            <div class="flex-3">钢筋长度 : {{ obj.length }}</div>
            <div class="flex-3">吊筋长度 : {{ obj.suspensionBarLength }}</div>
          </div>
        </div>
        <div class="padding-v-5 flex">
        <div class="">钢筋及焊接结论：</div>
          <div class="">
            <div class="">{{ obj.weldingResult }}</div>
          </div>
        </div>
      </div>
    </div>

     <div class="padding-left-40">
       <div class="">三、施工情况：</div>
       <div class="padding-v-5 padding-left-40">
           <div class="flex">
             <div class="flex-3">设计桩径  : {{ obj.pileDiameter }}</div>
            <div class="flex-3">设计桩长 : {{ obj.pileLength }}</div>
             <div class="flex-3">地面标高 : {{ obj.groundLevel }}</div>
             <div class="flex-3">设计桩顶标高 : {{ obj.pileTopHeight }}</div>
           </div>
       </div>
       <div class="padding-v-5 padding-left-40">
        <div class="flex">
             <div class="flex-3">开孔时间 : {{ obj.openTime }}</div>
             <div class="flex-3">终孔时间 : {{ obj.stopTime }}</div>
             <div class="flex-3">实际孔深 : {{ obj.actualDeep }}</div>
             <div class="flex-3">有效桩长  : {{ obj.validPileLength }}</div>
        </div>
       </div>
     </div>
     <div class="  padding-left-40">
       <div class="">四、灌注情况：</div>
       <div class="padding-v-5 padding-left-40">
         <div class="">砼强度等级 : {{ obj.concreteStrongLevel }}</div>
       </div>
      <div class="padding-v-5 padding-left-40">
        <div class="flex">
             <div class="flex-3">灌注开始时间 : {{ obj.perfusionStartTime }}</div>
             <div class="flex-3">灌注结束时间 : {{ obj.perfusionEndTime }}</div>
             <div class="flex-3"></div>
             <div class="flex-3"></div>
          </div>
       </div>
       <div class="padding-v-5 padding-left-40">
        <div class="flex">
             <div class="flex-3">设计坍落度 : {{ obj.designSlump }}</div>
             <div class="flex-3">实测坍落度 : {{ obj.actualSlump }}</div>
             <div class="flex-3">砼理论方量 : {{ obj.theoryVolume }}</div>
             <div class="flex-3">砼实灌方量  : {{ obj.actualVolume }}</div>
        </div>
        <div class="padding-v-5 flex">
             <div class="flex-3">充盈系数 : {{ obj.fillingCoefficient }} M3 </div>
            <div class="flex-3">试块制作组数  : {{ obj.sampleMaking }}组</div>
            <div class="flex-3"></div>
            <div class="flex-3"></div>
        </div>
       </div>
    </div>
    <div class="flex">
            孔深照片：
      <img :src="obj.actualDeepImg[0]" v-if="obj.actualDeepImg.length > 0" width="100" height="100"/>
      <span class="padding-left-40">钢筋笼照片组：</span>
      <img  v-for="(item, index) in obj.barCageCountImg" v-bind:key="item" :src="item" width="100" height="100" v-if="index<5"/>
    </div>
    <div class="" style="margin-top: 30px;">
      <div class="" style="min-height: 20px;">
         发现问题及处理情况：
      </div>
    </div>
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

  },
  mounted () {

  }
}
</script>
