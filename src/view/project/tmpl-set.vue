<template>
  <Form :model="obj" ref="obj" :rules="ruleCustom">
    <Row  type="flex"  justify="center">
      <Col span="12">
        <FormItem label="楼号" prop="buildingNum">
          <Input v-model="obj.buildingNum" placeholder=""></Input>
        </FormItem>
      </Col>
    </Row>
    <Row  type="flex"  justify="space-around" class="border">
      <Col span="11">
         <FormItem label="选择模板" prop="currentIndex">
            <Select @on-change="onRoleChange">
              <Option v-bind:value="index" v-for="(item, index) in firstList" :key="index">{{ item.templateName }}</Option>
            </Select>
        </FormItem>
      </Col>
      <Col span="11">
        <FormItem label="搜输入模板范围（如：1-100，102,103）">
          <Input @on-change="searchUser"  v-model="obj.pileRange"></Input>
        </FormItem>
      </Col>
    </Row>
    <div class="" style="min-height: 150px;">
      <Row class="menber-row"  type="flex"  v-for="(item,index) in roleTypeList" :key="index">
        	<span class="" style="font-size: 18px;">{{ item }} : </span>
          <span>
            <span class=""  v-for="(itemU, index) in hooks[item]" style="padding-left:20px; font-size: 18px;" :key="index">
              {{ itemU.userName }}（{{ itemU.mobile }} ） 
              <div class="" style="display: inline; color: red; font-size: 12px;cursor: pointer;" :data-index="index" :data-roletype="item" v-on:click="removeRoleUser">删除</div>;
            </span>
          </span>
      </Row>
    </div>
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
import jxgzTmplApi from '@/api/jxgz-tmpl-api'


export default {
  data() {
    const validateProjectName = (rule, value, callback) => {
//    if (value === "") {
//      callback(new Error("必填"));
//    }
      callback();
    };
    const validateCurrentRoleIndex = (rule, value, callback) => {
//    if (value === -1) {
//      callback(new Error("必填"));
//    }
      callback();
    };
    return {
      ruleCustom: {
        projectName: [{ validator: validateProjectName, trigger: "blur" }],
        currentIndex: [
          { validator: validateCurrentRoleIndex, trigger: "blur" }
        ]
      },
      obj: {
        buildingNum: null,
        templateId: null,
        pileRange: null
      },
      hooks: [],
      roleTypeList: [], //已选角色
      firstList: [],
      userList: [],
      currentIndex: -1,
      searchKey: ""
    };
  },
  props: {
    propsObj: {
      type: Object,
      default () {
        return {
          
        }
      }
    }
  },
  methods: {
    removeRoleUser: function(e) {
      console.log(e);
      this.hooks[e.target.dataset.roletype].splice(e.target.dataset.index, 1);
      console.log(this.hooks[e.target.dataset.roletype]);
      //    this.$set(this.hooks, e.target.dataset.roletype, this.hooks[e.target.dataset.roletype])
      this.hooks = Object.assign({}, this.hooks);
      this.roleTypeList = [];
      for (var prop in this.hooks) {
        if (this.hooks[prop].length == 0) {
          delete this.hooks[prop];
        } else {
          this.roleTypeList.push(prop);
        }
      }
      console.log(this.roleTypeList);
      console.log(this.hooks[e.target.dataset.roletype]);
      console.log(this.hooks);
    },
    selectUser: function(index) {
      console.log(index);

      if (this.currentIndex == -1) {
        this.$Message.error("请选择角色!");
        return;
      }
      this.obj.userRoles.push({
        userId: this.userList[index].id,
        roleId: this.firstList[this.currentIndex].id
      });

      console.log(
        this.firstList[this.currentIndex].roleName,
        this.userList[index].userName
      );
      this.hooks = tools.addhooks(
        this.hooks,
        this.firstList[this.currentIndex].roleName,
        this.userList[index]
      );
      this.roleTypeList = [];
      for (var prop in this.hooks) {
        this.roleTypeList.push(prop);
      }
      this.userList = [];
      this.searchKey = "";
      console.log(this.hooks);
      console.log(this.obj.userRoles);
    },
    onRoleChange: function(index) {
      console.log(index);
      this.obj.templateId = this.firstList[index].id;
    },
    searchUser: function(e) {
      console.log(e.data);
      userApi.searchUsers({ searchStr: e.data }, data => {
        console.log(data.result);
        if (data.result.length > 3) {
          data.result.length = 3;
        }
        this.userList = data.result;
      });
    },
    handleSubmit(obj) {
      this.obj.projectId = this.propsObj.projectId;
      console.log(this.obj);
      let that = this;
      projectApi.setTmplOrange(this.obj, (data) => {
        this.$Message.success({
          content: '修改成功！',
          onClose: () => {
             this.$emit('setModalClose', true)
          }
        });
      })

    },
    handleReset(obj) {
      this.$refs[obj].resetFields();
      this.hooks = [];
      this.roleTypeList = [];
      this.$emit("setModalClose", true);
    },
    getList(role) {
      jxgzTmplApi.getJxgzTmplList({pageIndex: 1, pageSize: 100}, (data) => {
        console.log(data)
        this.firstList = data.result.list
        this.total =  data.result.total
      })
    }
  },
  mounted() {
    this.getList();
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