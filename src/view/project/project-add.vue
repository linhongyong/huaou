<template>
  <Form :model="obj" ref="obj" :rules="ruleCustom">
    <Row  type="flex"  justify="center">
      <Col span="12">
        <FormItem label="项目名称" prop="projectName">
          <Input v-model="obj.projectName" placeholder=""></Input>
        </FormItem>
      </Col>
    </Row>
    <Row  type="flex"  justify="space-around" class="border">
      <Col span="11">
         <FormItem label="选择角色类型" prop="currentRoleIndex">
            <Select @on-change="onRoleChange">
              <Option v-bind:value="index" v-for="(item, index) in roleList">{{ item.roleName }}</Option>
            </Select>
        </FormItem>
      </Col>
      <Col span="11">
        <FormItem label="添加对应角色用户">
          <Input v-model="obj.userName" @on-change="searchUser"></Input>
          <div id=""  style="z-index: 999; width: 100%;">
          	<div v-for="(item, index) in userList"  style="cursor:pointer;"   v-on:click="selectUser(index)">
              <div class="user-item display-flex-center-between" style="" >
                <div class="">{{item.userName}}</div>
                <span  style="color: green;">添加</span>
              </div>
            </div>
          </div>
          
        </FormItem>
      </Col>
      <!--<Col span="2" class="display-flex-center-center" >
        <FormItem label="点击添加">
        	<Button type="primary" shape="circle" icon="md-person-add" v-on:click="addProjectMenber"></Button>
        </FormItem>
      </Col>-->
    </Row>
    <Row class="menber-row"  type="flex"  v-for="item in roleTypeList">
      <span class="">{{ item }} : </span>
      <span>
        <span class=""  v-for="itemU in hooks[item]" style="padding-left:20px ;">
          {{ itemU }} ; 
          <div class="" style="display: inline">X</div>
        </span>
      </span>
    </Row>
    <FormItem style="text-align: right;">
      <Button type="primary" @click="handleSubmit('obj')">保存</Button>
      <Button style="margin-left: 8px"  @click="handleReset('obj')">取消</Button>
    </FormItem>
  </Form>
  
</template>
<script>
import projectApi from '@/api/project-api'
import roleApi from '@/api/role-api'
import userApi from '@/api/user-api'

export default {
  data () {
    const validateProjectName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填'));
      } 
      callback();
    };
    const validateCurrentRoleIndex = (rule, value, callback) => {
      if (value === -1) {
        callback(new Error('必填'));
      } 
      callback();
    };
    return {
      ruleCustom: {
        projectName: [
          { validator: validateProjectName, trigger: 'blur' }
        ],
        currentRoleIndex: [
          { validator: validateCurrentRoleIndex, trigger: 'blur' }
        ]
      },
      obj: {
        projectName: '',
        userName: '',
        project:{
          projectName: '',
        },
        userRoles: []
      },
      roleList: [],
      userList: [],
      currentUser: {},
      currentUserIndex: -1,
      currentRoleIndex: -1,
      hooks: [],
      roleTypeList:[], //已选角色
    }
  },
  props: {
  },
  methods: {
    addProjectMenber: function() {
      if(this.currentRoleIndex == -1 ){
        console.log("000")
        return
      }
      if(this.currentUserIndex == -1){
        console.log("-1-1-1")
        return
      }
      this.obj.userRoles.push({userId: this.currentUser.id, roleId: this.roleList[this.currentRoleIndex].id})

      console.log(this.roleList[this.currentRoleIndex].roleName, this.currentUser.userName)
      this.addhooks(this.roleList[this.currentRoleIndex].roleName, this.currentUser.userName);
      this.roleTypeList = [];
      for(var prop in this.hooks){
        this.roleTypeList.push(prop);
      }
      console.log(this.hooks)
      console.log(this.obj.userRoles)
    },
    addhooks: function(type, hook) {//添加历史记录
      var hooks = this.hooks[type];
      if (!hooks) {
        hooks = [];
      }
      hooks.push(hook);
      this.hooks[type] = hooks;
    },
    onRoleChange: function(index) {
      console.log(index);
      this.currentRoleIndex = index
    },
    searchUser: function(e){
      console.log(e.data);
      userApi.searchUsers({searchStr:e.data}, (data) => {
        console.log(data.result);
        this.userList = data.result
      })
    },
    selectUser: function(index){
      this.currentUserIndex = index
      console.log(index);
      this.obj.userName = this.userList[index].userName
      this.currentUser = this.userList[index]
      console.log(this.currentUser);
      this.userList = [];
    },
    handleSubmit (obj) {
      let that = this
      console.log(this.obj.userRoles)
      this.$refs[obj].validate((valid) => {
        if (valid) {
          projectApi.addProject({project:{projectName: this.obj.projectName}, userRoles: this.obj.userRoles}, (data) => {
            console.log(data); 
            this.$refs[obj].resetFields();
            this.$Message.success({
              content: '添加成功！',
              onClose: () => {
                 this.$emit('addModalClose', true)
              }
            });
          }, (data) => {
            this.$Message.error(data.message);
          })
        } else {
          this.$Message.error('提交失败!');
        }
      })

    },
    handleReset (obj) {
      this.$refs[obj].resetFields();
      this.$emit('addModalClose', true)
    }
  },
  mounted () {
      roleApi.getRoles({pageIndex: 1, pageSize: 80}, (data) => {
        console.log(data)
        this.roleList = data.result.list
      })
  }
}
</script>
<style>
  .user-item{
    padding: 0 10px 0 10px;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .user-item:hover{
    background-color: #efefef;
  }
  .display-flex-center-center{
        display: flex;
    align-items: center;
    justify-content: center;
  }
   .display-flex-center-between{
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .border{
     /*border:1px solid #ccc;*/
     margin: -10px 0 0px;

  }
  .menber-row{
    padding: 10px 20px;
  }
</style>