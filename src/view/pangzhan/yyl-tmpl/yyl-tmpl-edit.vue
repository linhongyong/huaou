<template>
  <div style="width: 90%; margin: 0 auto;">
  	<div class="flex padding-v-5" >
  		<div class="flex-6 padding-v-5">模板名称：<Input v-model="obj.templateName" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
  		<!-- <div class="flex-6 padding-v-5">几轴水泥：<Input v-model="obj.severalAxes " placeholder="如:一轴/二轴/三轴" clearable :maxlength="200" style="width: 200px" /></div> -->
  	</div>
  	<!-- <div class="flex padding-v-5" >
  		<div class="flex-6 padding-v-5">模板备注：<Input v-model="obj.remark" placeholder="" clearable :maxlength="200" style="width: 200px" /></div>
  	</div> -->
  	<div class=" padding-v-5">
  		<div class=" padding-v-5">一、机械设备：</div>
  		<div class="flex padding-v-5  padding-left-40">
  			<div class=" padding-v-5">机械设备: <Input v-model="obj.equipment" placeholder="" clearable :maxlength="200" style="width: 150px" /></div> 
  			<div class="padding-v-5 margin-l-10">桩机号: <Input v-model="obj.pileDriverNumber" placeholder="" clearable :maxlength="200" style="width: 150px" /></div>
  		</div>
  	</div>
  	<div class=" padding-v-5">
  		<div class="">二、人员情况</div>
  		<div class="padding-v-5 flex padding-left-40">
  			<div class="flex-3">管理人员 : <Input v-model="obj.administrator" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
  			<div class="flex-3">特种操作人员 : <Input v-model="obj.operator" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
  		</div>
  	</div>
  	<div class=" padding-v-5">
  		<div class="">三、材料质量</div>
  		<div class="padding-v-5 flex padding-left-40">
  			<div class="flex-3">材料质量 : <Input v-model="obj.materialQuality" placeholder="" clearable :maxlength="200" style="width: 100px" /></div>
  		</div>
  	</div>
  	<div class=" padding-v-5">
  		<div class="">四、施工情况：</div>
  		<div class="padding-v-5 padding-left-40">
  				<div class="flex">
  					<div class="flex-3">设计桩长  : <Input v-model="obj.pileLength" placeholder="" clearable :maxlength="200" style="width: 120px" /> m</div>
  					<div class="flex-3">设计直径 : <Input v-model="obj.designDiameter" placeholder="" clearable :maxlength="200" style="width: 120px" /> mm</div>
  					<div class="flex-3">管桩壁厚 : <Input v-model="obj.pileThickness" placeholder="" clearable :maxlength="200" style="width: 120px" /> mm</div>
  				</div>
  		</div>
  		<div class="padding-v-5 padding-left-40">
  				<div class="flex">
  					<div class="flex-4">放样 : <Input v-model="obj.lofting" placeholder="" clearable :maxlength="200" style="width: 120px" /></div>
  					<div class="flex-4">垂直度 : <Input v-model="obj.verticality" placeholder="" clearable :maxlength="200" style="width: 120px" /></div>
  				</div>
  		</div>
  	</div>
  	<div class="" style="text-align: right;margin-top: 50px;">
  		<Button type="primary" @click="handleSubmit()">保存</Button>
  	</div>  
  </div>
</template>
<script>
  import yylTmplApi from '@/api/yyl-tmpl-api'
  export default {
    data() {
      return {
      }
    },
    props: {
      obj: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      handleSubmit(obj) {
        let that = this
        if (!this.obj.templateName) {
          this.$Message.error('请填写项目名称！');
          return;
        }
        yylTmplApi.updateYylTmpl(this.obj, (data) => {
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
      handleReset(obj) {
        this.$refs[obj].resetFields();
        this.$emit('editModalClose', true)
      }
    },
    mounted() {

    }
  }
</script>
<style>
  .flex {
    display: flex;
  }
  .flex-6 {
    flex: 6;
  }
  .flex-3 {
    flex: 3;
  }
  .row {
    overflow: hidden;
  }
  .float-l {
    float: left;
  }
  .padding-v-5 {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .padding-left-40 {
    padding-left: 40px;
  }
  .btn {
    float: right;
    background-color: #1890ff;
    outline: none;
    border: none;
    padding: 5px;
    color: white;
  }
  .margin-l-10 {
    margin-left: 10px;
  }
</style>