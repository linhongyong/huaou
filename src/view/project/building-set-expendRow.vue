<template>
    <div>
		<Form inline :model="obj" ref="obj" :rules="ruleValidate">
			<FormItem label="开始桩号" :label-width="80" prop="buildingName" >
				<Input v-model="obj.startPileCode"></Input>
			</FormItem>
			<FormItem label="结束桩号" :label-width="80" prop="buildingCode">
				<Input  v-model="obj.endPileCode"></Input>
			</FormItem>
			<FormItem label="使用前缀" :label-width="80">
				<InputNumber v-model="obj.prefix" :min="0" :max="1000"></InputNumber>
			</FormItem>
			<FormItem :label-width="20">
				<Button v-if="buttonType === 0" type="primary" @click="addBuildData">添加</Button>
				<Button v-else type="primary" @click="updateBuildData">确认修改</Button>
			</FormItem>
		</Form>
        <Table :columns="columns" :data="prefixList"></Table>
		<div style="margin-bottom: 50px;"></div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			obj:{},
			show: false,
			// 0: 新增 1: 确认修改
			buttonType: 0,
			columns: [
				{ title: "开始桩号", key: "startPileCode" },
				{ title: "结束桩号", key: "endPileCode" },
				{ title: "使用前缀", key: "prefix" },
				{
					title: "操作",
					render: (h, params) => {
						return h("div", [
							h(
								"Button",
								{
									props: { type: "success", size: "small" },
									on: {
										click: e => {
										
										}
									},
									style: { marginRight: "5px" }
								}, 
								"修改" 
							)
						]);
					}
				}
			],
			
			prefixList:[{startPileCode:1, endPileCode:10, prefix:"A"},{startPileCode:11, endPileCode:20, prefix:"B"}],
			
// 			ruleValidate: {
// 				buildingName: {required: true, message: "请输入楼栋名", trigger: "blur"},
// 				buildingCode: {required: true, message: "请输入楼栋代码", trigger: "blur"}
// 			}
		};
	},
	props: {
		rowObj: {
			type: Object,
			default () { return {} }
		},
	},
};
</script>