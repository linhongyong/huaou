<template>
    <Modal v-model="show" :title="'设置楼栋信息: '+obj.projectName"   width="60%">
        <Form inline :model="buildData" ref="form" :rules="ruleValidate">
            <FormItem label="楼栋名" :label-width="80" prop="buildingName" >
                <Input v-model="buildData.buildingName" :maxlength="30"></Input>
            </FormItem>
            <FormItem label="楼栋编号" :label-width="80" prop="buildingCode" >
                <Input  v-model="buildData.buildingCode" :maxlength="30"></Input>
            </FormItem>
            <FormItem label="总桩数" :label-width="80">
                <InputNumber v-model="buildData.pileNum" :min="0" :max="5000"></InputNumber>
            </FormItem>
             <FormItem :label-width="20">
                 <Button v-if="buttonType === 0" type="primary" @click="addBuildData">添加</Button>
                 <Button v-else type="primary" @click="updateBuildData">确认修改</Button>
             </FormItem>
        </Form>
        <Table :columns="columns" :data="buildList" highlight-row></Table>
        <template slot="footer">
            <Button type="primary" @click="handleOk">确定</Button>
            <Button type="primary" ghost @click="handleCancel">取消</Button>
        </template>
    </Modal>
</template>

<script>
import apiProject from "@/api/project-api";
import deepCopy from "@/libs/util";
import expandRow from './building-set-expendRow.vue';
const initBuildData = () => ({
  buildingName: "",
  buildingCode: "",
  pileNum: 0
});
export default {
	components: { expandRow },
  data() {
    return {
      show: false,
      buildData: initBuildData(),
      // 0: 新增 1: 确认修改
      buttonType: 0,
      columns: [
// 				{
// 						type: 'expand',
// 						width: 50,
// 						render: (h, params) => {
// 								return h(expandRow, {
// 										props: {
// 												rowObj: params.row
// 										}
// 								})
// 						}
// 				},
        { title: "楼栋名", key: "buildingName" },
        { title: "楼栋代码", key: "buildingCode" },
        { title: "总桩数", key: "pileNum" },
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
                      const { buildingName, buildingCode, pileNum } = params.row;
                      this.buildData = Object.assign({}, params.row);
                      this.buttonType = 1;
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
      ruleValidate: {
        buildingName: {required: true, message: "请输入楼栋名", trigger: "blur"},
        buildingCode: {required: true, message: "请输入楼栋代码", trigger: "blur"}
      }
    };
  },
	props: {
		obj: {
			type: Object,
			default () { return {} }
		},
		buildList:{
			type:Array,
			default () { return [] }
		},
		value:{
			type: Boolean,
			default (){ return false }
		}
	},
  watch: {
    value(val) { this.show = val; },
    show(val) { this.$emit("input", val); },
  },
  methods: {
    // 添加楼栋信息
    addBuildData() {
      this.$refs.form.validate(valid => {
        if (valid) {
          apiProject
            .addBuild(
              Object.assign(this.buildData, {
                projectId: Number(this.obj.id)
              })
            )
            .then(() => {
              this.$Message.success("添加成功");
              // 初始化Form
              this.buildData = initBuildData();
              this.getBuildList();
            })
            .catch(err => {
              this.$Message.error("添加失败");
            });
        }
      });
    },
    updateBuildData() {
      this.$refs.form.validate(valid => {
        if (valid) {
          apiProject
            .updateBuild(
              Object.assign(this.buildData, {
                projectId: Number(this.obj.id)
              })
            )
            .then(() => {
              this.$Message.success("修改成功");
              this.buildData = initBuildData();
              this.getBuildList();
              this.buttonType = 0;
            })
            .catch(err => {
              this.$Message.error("修改失败");
              this.buttonType = 0;
            });
        }
      });
    },
		getBuildList() { //通过ProjectId获得楼栋信息
		
			this.$emit("updateBuildList", this.obj.id);
// 			console.log(this.obj.id);
//       apiProject
//         .getBuildList({ projectId: this.obj.id } )
//         .then(data => {
//           this.buildList = data;
//         })
//         .catch(err => {
//           this.$Message.error("获取楼栋数据失败");
//         });
    },
    handleOk() { this.$emit("input", false); },
    handleCancel() { this.$emit("input", false); }
  }
};
</script>
