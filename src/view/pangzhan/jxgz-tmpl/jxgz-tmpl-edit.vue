<template>
  <div style="width: 90%; margin: 0 auto;">
    <div class="flex" >
      <div class="flex-6 padding-v-5">模板名称：<Input v-model="obj.templateName" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
      <div class="flex-6 padding-v-5">模板备注：<Input v-model="obj.remark" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
    </div>
    <div class="flex" >
      <div class="flex-6 padding-v-5">施工单位：<Input v-model="obj.buildCompany" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
    </div>
    <div class="flex  padding-left-40">
      <div class=" padding-v-5">一、机械设备：</div>
      <div class="flex">
        <div class=" padding-v-5">钻机型号: <Input v-model="obj.drillModel" placeholder="" clearable :maxlength="200" style="width: 150px" /></div> 
        <div class="padding-v-5 margin-l-10">工作状态: <Input v-model="obj.workState" placeholder="" clearable :maxlength="200" style="width: 150px" /></div>
      </div>
    </div>
    <div class="padding-left-40">
      <div class="">二、材料质量:</div>
      <div class="padding-left-40">
        <div class="">
          <div class="">钢筋笼配筋：</div>
          <div class="padding-v-5 flex padding-left-40">
            <div class="flex-3">主筋数量 : 
              <Input v-model="obj.mainBarCount" placeholder="" clearable :maxlength="200" style="width: 100px" />
            </div>
            <div class="flex-3">主筋类型 : 
              <Input class="" v-model="obj.mainBarType" placeholder="" clearable :maxlength="200" style="width: 100px" >
                <span slot="prefix" style="line-height: 30px;"></span>
              </Input>
            </div>
            <div class="flex-3">箍筋 : 
              <Input class="" v-model="obj.circularBar" placeholder="" clearable :maxlength="200" style="width: 100px" >
                <span slot="prefix" style="line-height: 30px;"></span>
              </Input>
            </div>
          </div>
          <div class="padding-v-5 flex padding-left-40">
            <div class="flex-3">加强箍 : 
              <Input class="" v-model="obj.strongBar" placeholder="" clearable :maxlength="200" style="width: 100px" >
                <span slot="prefix" style="line-height: 30px;"></span>
              </Input>
            </div>
            <div class="flex-3">钢筋笼数量 : 
              <Input class="" v-model="obj.barCageCount" placeholder=""  :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">个</span>
              </Input>
            </div>
            <div class="flex-3"></div><div class="flex-3"></div>
            <!--<div class="flex-3">钢筋长度 : <Input v-model="obj.length" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>-->
            <!--<div class="flex-3">吊筋长度 : <Input v-model="obj.suspensionBarLength" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>-->
          </div>
        </div>
        <div class="padding-v-5 flex">
        <div class="">钢筋及焊接结论：<Input v-model="obj.weldingResult" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
        </div>
      </div>
    </div>
    <div class="padding-left-40">
       <div class="">三、施工情况：</div>
       <div class="padding-v-5 padding-left-40">
           <div class="flex">
            <div class="flex-3">设计桩径  : 
              <Input class="" v-model="obj.pileDiameter" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">mm</span>
              </Input>
             </div>
            <div class="flex-3">设计桩长 : 
              <Input class="" v-model="obj.designPileLength" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m</span>
              </Input>
            </div>
           </div>
       </div>
        <div class="padding-v-5 padding-left-40">
           <div class="flex">
             <div class="flex-3">平台标高/护筒标高 : 
              <Input class="" v-model="obj.platformElevation" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m</span>
              </Input>
             </div>
             
             <div class="flex-3">桩顶标高 : 
              <Input class="" v-model="obj.pileTopHeight" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m</span>
              </Input>
             </div>
             
           </div>
       </div>
    </div>
    <div class="  padding-left-40">
       <div class="">四、灌注情况：</div>
       <div class="padding-v-5 padding-left-40">
         <div class="">砼强度等级C : <Input v-model="obj.concreteStrongLevel" placeholder="" :maxlength="200" style="width: 100px" /></div>
       </div>
       <div class="padding-v-5 padding-left-40">
        <div class="padding-v-5 flex">
             <div class="flex-3">设计坍落度 : 
               <Input class="" v-model="obj.designSlump" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">mm</span>
              </Input>

             </div>
             <div class="flex-3">实测坍落度 : 
               <Input class="" v-model="obj.actualSlump" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m³</span>
              </Input>

             </div>
             <div class="flex-3">砼理论方量 : 
               <Input class="" v-model="obj.theoryVolume" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m³</span>
              </Input>

             </div>
             
        </div>
        <div class="padding-v-5 flex">
             <div class="flex-3">砼实灌方量  : 
               <Input class="" v-model="obj.actualVolume" placeholder="" :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">m³</span>
              </Input>
             </div>
            <div class="flex-5 margin-l-10">试块制作组数  : 
              <Input class="" v-model="obj.sampleMaking" placeholder="" clearable :maxlength="200" style="width: 100px" >
                <span slot="suffix" style="line-height: 30px;">组</span>
              </Input>
            </div>
            <div class="flex-1"></div>
            <div class="flex-1"></div>
        </div>
       </div>
    </div>
     <div class="" style="text-align: right;">
      <Button type="primary" @click="handleSubmit()">保存</Button>
     </div>  
  </div>
</template>
<script>
import jxgzTmplApi from '@/api/jxgz-tmpl-api'
export default {
  data () {

    return {

    }
  },
  props: {
    obj: {
      type: Object,
      default () {
        return {
          actualDeepImg: [],
          barCageCountImg: []
        }
      }
    }
  },
  methods: {
    handleSubmit (obj) {
      let that = this
       if(!this.obj.templateName){
        this.$Message.error('请填写项目名称！');
        return;
      }
      if(!this.obj.remark){
        this.$Message.error('请填写项目备注！');
        return;
      }
      if(!this.obj.buildCompany){
        this.$Message.error('请填写施工单位！');
        return;
      }
      if(!this.obj.drillModel){
        this.$Message.error('请填写工作状态！');
        return;
      }
      // this.obj.mainBar = `${this.obj.mainBarNum}φ${this.obj.mainBarType}`
      jxgzTmplApi.updateJxgzTmpl(this.obj, (data) => {
        console.log(data); 
        this.$Message.success({
          content: '修改成功！',
          onClose: () => {
            this.obj = {};
             this.$emit('editModalClose', true)
          }
        });
      }, (data) => {
        this.$Message.error(data.message);
      })
    },
    handleReset () {
      this.obj = {};
      this.$emit('editModalClose', true)
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
  .margin-l-10{
    margin-left: 10px;
  }
</style>