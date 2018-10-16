<template>
 <Form :model="obj" ref="obj" :rules="ruleCustom">
    <Row  type="flex"  justify="center">
      <Col span="12">
        <FormItem label="项目名称" prop="projectName">
          <Input v-model="obj.projectName" placeholder=""></Input>
        </FormItem>
      </Col>
    </Row>
    <FormItem style="text-align: right;">
      <Button type="primary" @click="handleSubmit('obj')">保存</Button>
      <Button style="margin-left: 8px"  @click="handleReset('obj')">取消</Button>
    </FormItem>
    </Form>
  
</template>
<script>
import tools from "_u/tools.js";
import projectApi from "@/api/project-api";
import roleApi from "@/api/role-api";
import userApi from "@/api/user-api";

export default {
  data() {
    const validateProjectName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("必填"));
      }
      callback();
    };
    const validateCurrentRoleIndex = (rule, value, callback) => {
      if (value === -1) {
        callback(new Error("必填"));
      }
      callback();
    };
    return {
      ruleCustom: {
        projectName: [{ validator: validateProjectName, trigger: "blur" }],
        currentRoleIndex: [
          { validator: validateCurrentRoleIndex, trigger: "blur" }
        ]
      },
      roleList: [],
      userList: [],
      currentRoleIndex: -1,

      searchKey: ""
    };
  },
  props: {
    obj: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    handleSubmit(obj) {
      let that = this;
      this.$refs[obj].validate(valid => {
        if (valid) {
          projectApi.updateProject(
            {
              id: this.obj.id,
              projectName: this.obj.projectName
            },
            data => {
              this.$refs[obj].resetFields();
              this.$Message.success({
                content: "修改成功！",
                onClose: () => {
                  this.$emit("editModalClose", true);
                }
              });
            },
            err => {
              this.$Message.error("修改失败");
            }
          );
        } else {
          this.$Message.error("提交失败!");
        }
      });
    },
    handleReset(obj) {
      this.$refs[obj].resetFields();
      this.$emit("editModalClose", true);
    }
  }
};
</script>
<style>
.user-item {
  padding: 5px 10px;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.user-item:hover {
  background-color: #efefef;
}
.display-flex-center-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.display-flex-center-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.border {
  /*border:1px solid #ccc;*/
  margin: -10px 0 0px;
}
.menber-row {
  padding: 10px 20px;
}
</style>