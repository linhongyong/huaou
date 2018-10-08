<template>
  <div style="width: 90%; margin: 0 auto;">
    <div class="flex padding-v-5" >
      <div class="flex-6 padding-v-5">模板名称：<Input v-model="obj.templateName" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
      <div class="flex-6 padding-v-5">模板备注：<Input v-model="obj.remark" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
    </div>
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
           <div class="flex">
             <div class="flex-3">设计桩径  : <Input v-model="obj.desigePileDiameter" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
              <div class="flex-3">桩底标高 : <Input v-model="obj.desigePileLength" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
             <div class="flex-3">桩顶标高 : <Input v-model="obj.pileBottomHeight" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
             <div class="flex-3">设计桩长 : <Input v-model="obj.pileTopHeight" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
           </div>
       </div>
    </div>
     <div class="" style="text-align: right;margin-top: 50px;">
     	<Button type="primary" @click="handleSubmit()">保存</Button>
     </div>  
  </div>
</template>
<script>
import snjblApi from '@/api/snjb-api'
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
      obj: {
        roleName: '',
        remark: '',
        type: "0"
      },
      
    }
  },
  props: {
  },
  methods: {
    handleSubmit (obj) {
      let that = this
      if(!this.obj.templateName){
        this.$Message.error('请填写项目名称！');
        return;
      }
      snjblApi.addSnjb(this.obj, (data) => {
        console.log(data); 
        this.$Message.success({
          content: '添加成功！',
          onClose: () => {
             this.$emit('addModalClose', true)
          }
        });
      }, (data) => {
        this.$Message.error(data.message);
      })
    },
    handleReset (obj) {
      this.$refs[obj].resetFields();
      this.$emit('addModalClose', true)
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