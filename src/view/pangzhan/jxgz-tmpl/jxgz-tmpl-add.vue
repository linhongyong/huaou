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
      <div class="">二、材料质量</div>
      <div class="padding-left-40">
        <div class="">
          <div class="">钢筋笼配筋：</div>
          <div class="padding-v-5 flex padding-left-40">
            <div class="flex-3">主筋 : <Input v-model="obj.mainBar" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
            <div class="flex-3">箍筋 : <Input v-model="obj.circularBar" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
            <div class="flex-3">加强箍 : <Input v-model="obj.strongBar" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
          </div>
          <div class="padding-v-5 flex padding-left-40">
            <div class="flex-3">钢筋笼数量 : <Input v-model="obj.barCageCount" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
            <div class="flex-3">钢筋长度 : <Input v-model="obj.length" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
            <div class="flex-3">吊筋长度 : <Input v-model="obj.suspensionBarLength" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
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
             <div class="flex-3">设计桩径  : <Input v-model="obj.pileDiameter" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
            <div class="flex-3">设计桩长 : <Input v-model="obj.pileLength" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
             <div class="flex-3">地面标高 : <Input v-model="obj.pileLength" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
             <div class="flex-3">设计桩顶标高 : <Input v-model="obj.pileTopHeight" placeholder="" clearable :maxlength="200" style="width: 80px" /></div>
           </div>
       </div>
    </div>
    <div class="  padding-left-40">
       <div class="">四、灌注情况：</div>
       <div class="padding-v-5 padding-left-40">
         <div class="">砼强度等级C : <Input v-model="obj.concreteStrongLevel" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
       </div>
       <div class="padding-v-5 padding-left-40">
        <div class="padding-v-5 flex">
             <div class="flex-3">设计坍落度 : <Input v-model="obj.designSlump" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
             <div class="flex-3">实测坍落度 : <Input v-model="obj.actualSlump" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
             <div class="flex-3">砼理论方量 : <Input v-model="obj.theoryVolume" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
             <div class="flex-3">砼实灌方量  : <Input v-model="obj.actualVolume" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
        </div>
        <div class="padding-v-5 flex">
             <div class="flex-5">充盈系数 : <Input v-model="obj.fillingCoefficient" placeholder="" clearable :maxlength="200" style="width: 100px" /> M3 </div>
            <div class="flex-5 margin-l-10">试块制作组数  : <Input v-model="obj.sampleMaking" placeholder="" clearable :maxlength="200" style="width: 100px" /> 组</div>
            <div class="flex-1"></div>
            <div class="flex-1"></div>
        </div>
       </div>
    </div>
     <div class="" style="text-align: right;">
     	<Button type="primary" @click="handleSubmit()">保存</Button>
     </div>  
  </div>
  <!--<Form :model="obj" ref="obj" :rules="ruleCustom">
        <Row  type="flex"  justify="space-around">
      <Col span="11">
        <FormItem label="" prop="roleName">
          <Input v-model="obj." placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span="11">
        <FormItem label="说明" prop="remark">
          <Input v-model="obj.remark" placeholder=""></Input>
        </FormItem>
      </Col>
    </Row>
    <Row  type="flex"  >
      <Col span="12">
        <div class="" style="padding-left: 20px;">
        	<FormItem label="是否项目角色 :">
            <RadioGroup v-model="obj.type">
              <Radio label="1">是</Radio>
              <Radio label="0">否</Radio>
            </RadioGroup>
          </FormItem>
        </div>
        
        
      </Col>
    </Row>
    <FormItem style="text-align: right;">
      <Button type="primary" @click="handleSubmit('obj')">保存</Button>
      <Button style="margin-left: 8px"  @click="handleReset('obj')">取消</Button>
    </FormItem>
  </Form>-->
  
</template>
<script>
import jxgzTmplApi from '@/api/jxgz-tmpl-api'
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
      jxgzTmplApi.addJxgzTmpl(this.obj, (data) => {
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