<template>
   <Modal v-model="show" title="导出旁站信息" width="80%" >
       <Form :model="query" ref="form" :rule="ruleValidate">
            <FormItem label="楼栋名" :label-width="80" prop="buildingId">
                <Select v-model="query.buildingId">
                    <Option v-for="item in buildList" :value="item.value" :key="item.value">{{item.label}}</Option>
                </Select>
            </FormItem>
       </Form>
       <template slot="footer">
            <Button type="primary" ghost @click="handleOk">确定</Button>
            <Button type="primary" ghost @click="handleCancel">取消</Button>
        </template>
   </Modal>
</template>
<script>
import apiProject from "@/api/project-api";
import apiJxgz from "@/api/jxgz-api";

const initQuery = () => ({
  // 导出的楼栋Id
  buildingId: ""
});

export default {
  name: "modal-export",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    roleData: Object
  },
  data() {
    return {
      show: false,
      query: initQuery(),
      // 楼栋列表
      buildList: [],
      ruleValidate: {
        buildingId: {
          required: true,
          message: "暂无楼栋信息",
          trigger: "blur"
        }
      }
    };
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit("input", val);
    },
    roleData(val) {
      this.getBuildList();
    }
  },
  methods: {
    // 获取当前项目的楼栋列表
    getBuildList() {
      apiProject
        .getBuildList({ projectId: Number(this.roleData.projectId) })
        .then(data => {
          this.buildList = data.map(({ buildingName, id }) => ({
            label: buildingName,
            value: id
          }));
          // 默认第一个
          this.query.buildingId =
            this.buildList.length > 0 ? this.buildList[0].value : "";
        })
        .catch(err => {
          this.$Message.error("获取楼栋数据失败");
        });
    },

    handleOk() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit("input", false);
          apiJxgz.export({
            projectId: Number(this.roleData.projectId),
            buildingId: this.query.buildingId
          });
        }
      });
    },
    handleCancel() {
      this.$emit("input", false);
    }
  }
};
</script>
    
