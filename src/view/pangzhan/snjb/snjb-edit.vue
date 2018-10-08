<template>
  <div style="width: 90%; margin: 0 auto;">
    <div class=" padding-v-5">
      <div class=" padding-v-5">一、机械设备：</div>
      <div class="flex padding-v-5  padding-left-40">
        <div class=" padding-v-5">搅拌机型号: <Input v-model="obj.blenderModel" placeholder="" clearable :maxlength="200" style="width: 150px" /></div> 
        <div class="padding-v-5 margin-l-10">工作状态: <Input v-model="obj.blenderState" placeholder="" clearable :maxlength="200" style="width: 150px" /></div>
        <div class="padding-v-5 margin-l-10">配套设备: <Input v-model="obj.matchingEquipment" placeholder="" clearable :maxlength="200" style="width: 150px" /></div>
      </div>
    </div>
    <div class=" padding-v-5">
      <div class="">二、材料质量</div>
      <div class="padding-v-5 flex padding-left-40">
        <div class="flex-3">水泥品种 : <Input v-model="obj.cementVarieties" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
        <div class="flex-3">供应单位 : <Input v-model="obj.supplier" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
        <div class="flex-3">质保、试验资料 : <Input v-model="obj.tryData" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
      </div>
    </div>
    <div class=" padding-v-5">
       <div class="">三、成桩情况：</div>
       <div class="padding-v-5 padding-left-40">
           <div class="flex padding-v-5">
             <div class="flex-3">桩号  : <Input v-model="obj.pileStartNum" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
              <div class="flex-3">桩号 : <Input v-model="obj.pileEndNum" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
             <div class="flex-3">实际桩长 : <Input v-model="obj.actualPileLength" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
             <div class="flex-3">灰浆水灰比 : <Input v-model="obj.hjshProp" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
           </div>
           <div class="flex padding-v-5">
             <div class="flex-3 padding-v-5">成桩开始时间  : <Input v-model="obj.finishPileStartTime" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
              <div class="flex-3 padding-v-5">成桩结束时间 : <Input v-model="obj.finishPileEndTime" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
            
           </div>
           <div class="flex padding-v-5">
             <div class="flex-3">日完成桩数 : <Input v-model="obj.eachPlieCementCount" placeholder="" clearable :maxlength="200" style="width: 80px" />根</div>
             <div class="flex-3">日完成 : <Input v-model="obj.dayFinishCount" placeholder="" clearable :maxlength="200" style="width: 80px" />m3</div>
           </div>
       </div>
    </div>
     <div class="" style="text-align: right;margin-top: 50px;">
      <Button type="primary" @click="handleSubmit()">保存</Button>
     </div>  
  </div>
</template>
<script>
import snjbApi from '@/api/snjb-api'
export default {
  data () {
/*    const validateRoleName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填'));
      } 
      callback();
    };
    const validateRemark = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填'));
      } 
      callback();
    };*/
    return {
/*      ruleCustom: {
        roleName: [
          { validator: validateRoleName, trigger: 'blur' }
        ],
        remark: [
          { validator: validateRemark, trigger: 'blur' }
        ]
      },*/
      
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
  methods: {
    handleSubmit (obj) {
      let that = this
//    if(!this.obj.templateName){
//      this.$Message.error('请填写项目名称！');
//      return;
//    }
      snjbApi.updateSnjb(this.obj, (data) => {
        console.log(data); 
        this.$Message.success({
          content: '修改成功！',
          onClose: () => {
             this.$emit('editModalClose', true)
          }
        });
      }, (data) => {
        this.$Message.error(data.message);
      })
    },
    handleReset (obj) {
      this.$refs[obj].resetFields();
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