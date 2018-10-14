<template>
  <div style="width: 90%; margin: 0 auto;">
    <form :action="'http://47.98.132.165:18088//snJbjPzjl/download?id='+obj.id" method="post">
      <input class="btn" type="submit" value="导出word" style=""/>
    </form>
    <div class="flex padding-v-5" >
      <div class="flex-6 padding-v-5">模板名称：{{obj.templateName}}</div>
      <div class="flex-6 padding-v-5">模板备注：{{obj.remark}}</div>
    </div>
    <div class=" padding-v-5">
      <div class=" padding-v-5">一、机械设备：</div>
      <div class="flex padding-v-5  padding-left-40">
        <div class=" padding-v-5">搅拌机型号: {{obj.blenderModel}}</div> 
        <div class="padding-v-5 margin-l-10">工作状态: {{obj.blenderState}}</div>
        <div class="padding-v-5 margin-l-10">配套设备: {{obj.matchingEquipment}}</div>
      </div>
    </div>
    <div class=" padding-v-5">
      <div class="">二、材料质量</div>
      <div class="padding-v-5 flex padding-left-40">
        <div class="flex-3">水泥品种 : {{obj.cementVarieties}}</div>
        <div class="flex-3">供应单位 : {{obj.supplier}}</div>
        <div class="flex-3">质保、试验资料 : {{obj.tryData}}</div>
      </div>
    </div>
    <div class=" padding-v-5">
       <div class="">三、成桩情况：</div>
       <div class="padding-v-5 padding-left-40">
           <div class="flex">
             <div class="flex-3">设计桩径  : {{obj.desigePileDiameter}}</div>
              <div class="flex-3">桩底标高 : {{obj.desigePileLength}}</div>
             <div class="flex-3">桩顶标高 : {{obj.pileBottomHeight}}</div>
             <div class="flex-3">设计桩长 : {{obj.pileTopHeight}}</div>
           </div>
       </div>
    </div>
    <div class="flex">
      <span class="padding-left-40">质保、试验资料照片：</span>
      <img  v-for="(item, index) in obj.tryDataUrl" v-bind:key="index" :src="item" width="100" height="100"/>
      
    </div>
     <!--<div class="" style="text-align: right;margin-top: 50px;">
     	<Button type="primary" @click="handleSubmit()">保存</Button>
     </div>  -->
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