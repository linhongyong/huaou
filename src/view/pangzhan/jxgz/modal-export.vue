<template>
  <Modal v-model="show" title="导出旁站信息" width="500px">
    <Form :model="query" ref="form" :rule="ruleValidate">
      <FormItem label="楼栋名" :label-width="80" prop="buildingId">
        <Select v-model="query.buildingId">
          <Option v-for="item in buildList" :value="item.value" :key="item.value">{{item.label}}</Option>
        </Select>
      </FormItem>
    </Form>
    <!-- <form method="post" action="http://47.98.132.165:18088/jxZkGzzPzjl/exportExcel">
          <input name="projectId" type="number" v-model.number="roleData.projectId" hidden />
          <input name="buildingId" type="number" v-model.number="query.buildingId" hidden />
          <input class="btn" type="submit" value="导出excel" />
        </form> -->
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
            const reqData = {
              projectId: Number(this.roleData.projectId),
              buildingId: this.query.buildingId
            };
            this.exportExcel(
              "http://47.98.132.165:18088/jxZkGzzPzjl/exprotExcel",
              reqData
            );
          }
        });
      },
      exportExcel(url, data) {
        const form = document.createElement("form");
        form.style.display = "none";
        form.action = url;
        form.method = "post";
        document.body.appendChild(form);

        for (let key in data) {
          let input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = data[key];
          form.appendChild(input);
        }

        form.submit();
        form.remove();
      },
      handleCancel() {
        this.$emit("input", false);
      }
    }
  };
</script>

<style scoped>
  .btn {
    float: right;
    background-color: #1890ff;
    outline: none;
    border: none;
    padding: 5px;
    color: white;
  }
</style>

    
