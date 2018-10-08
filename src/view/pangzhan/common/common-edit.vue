<template>
  <div style="width: 90%; margin: 0 auto;">
    <div class="flex-6 padding-v-5">
            当日气候：
      <RadioGroup v-model="obj.weather">
        <Radio label="晴">
          <span>晴</span>
        </Radio>
        <Radio label="阴">
            <span>阴</span>
        </Radio>
        <Radio label="雨">
            <span>雨</span>
        </Radio>
      </RadioGroup>
    
    </div>


    <div class="flex padding-v-5">
      <div class=" padding-v-5">楼号: <Input v-model="obj.building" placeholder="" clearable :maxlength="200" style="width: 150px" /></div> 
      <div class="padding-v-5 margin-l-10">工序: <Input v-model="obj.workProcedure" placeholder="" clearable :maxlength="200" style="width: 150px" /></div>
      <div class="padding-v-5 margin-l-10">部位: <Input v-model="obj.pzPart" placeholder="" clearable :maxlength="200" style="width: 150px" /></div>
    </div>
    <div class="flex padding-v-5">
      <div class="flex-3 padding-v-5">开始时间  : <Input v-model="obj.lookStartTime" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
      <div class="flex-3 padding-v-5">结束时间 : <Input v-model="obj.lookEndTime" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
    
    </div>
    <div class=" padding-v-5">
      <div class="">二、材料质量</div>
      <div class="padding-v-5 flex padding-left-40">
        <div class="flex-3">水泥品种 : <Input v-model="obj.cementVarieties" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
        <div class="flex-3">供应单位 : <Input v-model="obj.supplier" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
        <div class="flex-3">质保、试验资料 : <Input v-model="obj.tryData" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
      </div>
    </div>


    <div class="" style="min-height: 100px;">
       发现问题及处理情况：
      <div class="padding-v-5" style="text-indent: 2em;">
      <Input v-model="obj.problemContent" placeholder="" clearable :maxlength="500" style="width: 90%" type="textarea" :rows="5"/>
     </div>
    </div> 
      
     <div class="" style="text-align: right;margin-top: 50px;">
      <Button type="primary" @click="handleSubmit()">保存</Button>
     </div>  
  </div>
</template>
<script>
import commonApi from '@/api/common-api'
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
      commonApi.updateCommon(this.obj, (data) => {
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