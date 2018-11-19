<template>
	<div style="width: 90%; margin: 0 auto;">
	<Form ref="form" :model="obj" :rules="ruleValidate" :label-width="100">
		<div class="display-flex-center-between"  >
			<FormItem label="模板名称：" prop="templateName" required>
					<Input v-model="obj.templateName" :maxlength="30"  style="width: 300px" clearable></Input>
			</FormItem>
			<FormItem label="施工单位：" prop="buildCompany">
					<Input v-model="obj.buildCompany"  :maxlength="30"  style="width: 300px" clearable></Input>
			</FormItem>
		</div>
		<FormItem label="模板备注：" prop="remark" required>
				<Input v-model="obj.remark"  :maxlength="50"  style="width: 100%"></Input>
		</FormItem>
		<div class=" padding-v-5">一、机械设备：</div>
		<div class="display-flex-center-between"  >
			<FormItem label="钻机型号：" prop="drillModel">
					<Input v-model="obj.drillModel" :maxlength="20"  style="width: 250px" clearable></Input>
			</FormItem>
			<FormItem label="工作状态：" prop="workState">
					<Input v-model="obj.workState"  :maxlength="8"  style="width: 250px" clearable></Input>
			</FormItem>
		</div>
		<div class="">二、材料质量:</div>
		<div class="display-flex-center-between"  >
			<FormItem label="主筋数量：" prop="mainBarCount">
					<Input v-model="obj.mainBarCount" :maxlength="20"  style="width: 100px" clearable></Input>
			</FormItem>
			<FormItem label="主筋：" prop="mainBarType">
					<Input v-model="obj.mainBarType"  :maxlength="20"  style="width: 140px" clearable></Input>
			</FormItem>
			<FormItem label="箍筋：" prop="circularBar">
					<Input v-model="obj.circularBar" :maxlength="20"  style="width: 140px" clearable></Input>
			</FormItem>
		</div>
		<div class="display-flex-center-between"  >
			<FormItem label="加强箍：" prop="strongBar">
					<Input v-model="obj.strongBar" :maxlength="20"  style="width: 120px" clearable></Input>
			</FormItem>
			<FormItem label="钢筋笼数量：" prop="barCageCount">
					<Input v-model="obj.barCageCount" :maxlength="8"  style="width: 60px" clearable></Input>
			</FormItem>
			<FormItem label="钢筋笼长度：" prop="length">
					<Input v-model="obj.length" :maxlength="8"  style="width: 100px">
						<span slot="suffix" style="line-height: 30px;">m</span>
					</Input>
			</FormItem>
			
			<FormItem label="钢筋及焊接结论：" prop="weldingResult" :label-width="120">
					<Input v-model="obj.weldingResult"  :maxlength="50"  style="width: 100px" clearable></Input>
			</FormItem>
		</div>
		<div class="">二、施工情况:</div>
		<div class="display-flex-center-between"  >
			<FormItem label="设计桩径 ：" prop="pileDiameter">
					<Input v-model="obj.pileDiameter" :maxlength="8"  style="width: 120px">
						<span slot="suffix" style="line-height: 30px;">mm</span>
					</Input>
			</FormItem>
			<FormItem label="设计桩长：" prop="designPileLength">
					<Input v-model="obj.designPileLength" :maxlength="8"  style="width: 120px">
						<span slot="suffix" style="line-height: 30px;">m</span>
					</Input>
			</FormItem>
			<FormItem label="平台标高/护筒标高 :" prop="platformElevation" :label-width="120">
					<Input v-model="obj.platformElevation"  :maxlength="8"  style="width: 110px">
						<span slot="suffix" style="line-height: 30px;">m</span>
					</Input>
			</FormItem>
		</div>
		<div class="flex"  >
			<FormItem label="桩顶标高 :" prop="pileTopHeight">
					<Input v-model="obj.pileTopHeight"  :maxlength="8"  style="width: 120px">
						<span slot="suffix" style="line-height: 30px;">m</span>
					</Input>
			</FormItem>
			<FormItem label="入岩深度 :" prop="deptRock">
					<Input v-model="obj.deptRock"  :maxlength="8"  style="width: 120px">
						<span slot="suffix" style="line-height: 30px;">m</span>
					</Input>
			</FormItem>
			<FormItem label="成渣厚度(范围) :" prop="sedimentHeight" :label-width="130">
					<Input v-model="obj.sedimentHeight"  :maxlength="8"  style="width: 120px">
						<span slot="suffix" style="line-height: 30px;">mm</span>
					</Input>
			</FormItem>
		</div>
		<div class="flex"  >
			<FormItem label="泥浆比重(范围) :" prop="slurryPropRange">
					<Input v-model="obj.slurryPropRange"  :maxlength="8"  style="width: 120px">
					</Input>
			</FormItem>
		</div>
		<div class="">四、灌注情况：</div>
		<div class="display-flex-center-between">
			<FormItem label="砼强度等级C ：" prop="concreteStrongLevel">
					<Input v-model="obj.concreteStrongLevel" :maxlength="20"  style="width: 120px" clearable></Input>
			</FormItem>
			<FormItem label="设计坍落度(范围)：" prop="designSlump" :label-width="130">
					<Input v-model="obj.designSlump" :maxlength="8"  style="width: 120px">
						<span slot="suffix" style="line-height: 30px;">mm</span>
					</Input>
			</FormItem>
			<FormItem label="实测坍落度 :" prop="actualSlump">
					<Input v-model="obj.actualSlump"  :maxlength="8"  style="width: 120px">
						<span slot="suffix" style="line-height: 30px;">mm</span>
					</Input>
			</FormItem>
			
		</div>
		<div class="display-flex-center-between"  >
			<FormItem label="砼理论方量 :" prop="theoryVolume">
					<Input v-model="obj.theoryVolume"  :maxlength="8"  style="width: 120px">
						<span slot="suffix" style="line-height: 30px;">m³</span>
					</Input>
			</FormItem>
			<FormItem label="砼实灌方量 ：" prop="actualVolume">
					<Input v-model="obj.actualVolume" :maxlength="8"  style="width: 120px">
						<span slot="suffix" style="line-height: 30px;">m³</span>
					</Input>
			</FormItem>
			<FormItem label="试块制作组数 ：" prop="sampleMaking">
					<Input v-model="obj.sampleMaking" :maxlength="8"  style="width: 120px" clearable>
						<span slot="suffix" style="line-height: 30px;">组</span>
					</Input>
			</FormItem>
			
		</div>
		
	<div style="text-align: right;">
		<FormItem>
				<Button type="primary" @click="handleSubmit">保存</Button>
				<Button @click="handleReset" style="margin-left: 8px">取消</Button>
		</FormItem>
	</div>
		
	</Form>
	</div>
</template>
<script>
import jxgzTmplApi from '@/api/jxgz-tmpl-api'
export default {
  data () {
		const validateIsNaN = (rule, value, callback) => {
			if(isNaN(value) && value){
				callback(new Error('请输入数值'));
			}else{
				callback();
			}
		};
		const validateIsInteger = (rule, value, callback) => {
			if(isNaN(value) && value){
				callback(new Error('请输入数值'));
			}else{
				if(Number.isInteger(value-0)  || !value){
					callback();
				}else{
					callback(new Error('请输入整数'));
				}
			}
		};
    return {
			ruleValidate:{
				templateName: [{ required: true, message: "必填项", trigger: 'change' } ],
				remark: [{ required: true, message: "必填项", trigger: 'change' } ],
				// mainBarType: [{ validator: validateIsInteger, trigger: 'change' } ],
				// mainBarCount: [{ validator: validateIsInteger, trigger: 'change' } ],
				barCageCount: [{ validator: validateIsInteger, trigger: 'change' } ],
				pileDiameter: [{ validator: validateIsNaN, trigger: 'change' } ],
				designPileLength: [{ validator: validateIsNaN, trigger: 'change' } ],
				platformElevation: [{ validator: validateIsNaN, trigger: 'change' } ],
				pileTopHeight: [{ validator: validateIsNaN, trigger: 'change' } ],
				deptRock: [{ validator: validateIsNaN, trigger: 'change' } ],
				// designSlump: [{ validator: validateIsNaN, trigger: 'change' } ],
				actualSlump: [{ validator: validateIsNaN, trigger: 'change' } ],
				theoryVolume: [{ validator: validateIsNaN, trigger: 'change' } ],
				actualVolume: [{ validator: validateIsNaN, trigger: 'change' } ],
				sampleMaking: [{ validator: validateIsInteger, trigger: 'change' } ],
			}
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
			this.$refs.form.validate((valid) => {
				if (valid) {
						// this.obj.projectId = this.projectId;
						jxgzTmplApi.updateJxgzTmpl(this.obj, (data) => {
							console.log(data); 
							this.$Message.success({
								content: '修改成功！',
								onClose: () => {
									// this.obj = {};
									this.$emit('editModalClose', true)
								}
							});
						}, (data) => {
							this.$Message.error(data.message);
						})
				} else {
						this.$Message.error('保存失败!');
				}
			})
      
    },
    handleReset (o) {
      // this.obj = {};
			this.$refs.form.resetFields();
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