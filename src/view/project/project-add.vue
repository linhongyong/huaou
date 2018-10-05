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
        <FormItem label="搜索 - 添加对应角色用户">
          <Input @on-change="searchUser"  v-model="searchKey"></Input>
          <div id=""  style="z-index: 9999; width: 100%;position: absolute; background-color: #fff;">
          	<div v-for="(item, index) in userList" v-if="item.userName != '' || item.mobile != ''">
              <div class="user-item display-flex-center-between" style="" >
                <div class="">{{item.userName}} ({{item.mobile}}) </div>
                <span  style="color: #2d8cf0;cursor:pointer;" v-on:click="selectUser(index)">添加</span>
              </div>
            </div>
          </div>
          
        </FormItem>
      </Col>
    </Row>
    <div class="" style="min-height: 150px;">
      <Row class="menber-row"  type="flex"  v-for="item in roleTypeList">
        	<span class="" style="font-size: 18px;">{{ item }} : </span>
          <span>
            <span class=""  v-for="(itemU, index) in hooks[item]" style="padding-left:20px; font-size: 18px;">
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
import tools from '_u/tools.js'
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
        userRoles: []
      },
      hooks: [],
      roleTypeList:[], //已选角色
      roleList: [],
      userList: [],
      currentRoleIndex: -1,
      searchKey:""
    }
  },
  props: {
  },
  methods: {
    removeRoleUser: function(e){
      console.log(e);
      this.hooks[e.target.dataset.roletype].splice(e.target.dataset.index, 1)
      console.log(this.hooks[e.target.dataset.roletype]);
//    this.$set(this.hooks, e.target.dataset.roletype, this.hooks[e.target.dataset.roletype])
      this.hooks = Object.assign({}, this.hooks)
      this.roleTypeList = [];
      for(var prop in this.hooks){
        if(this.hooks[prop].length == 0){
          delete this.hooks[prop]
        }else{
          this.roleTypeList.push(prop);
        }
        
      }
      console.log(this.roleTypeList)
      console.log(this.hooks[e.target.dataset.roletype])
      console.log(this.hooks);
    },
    selectUser: function(index) {
      console.log(index);


      if(this.currentRoleIndex == -1 ){
        this.$Message.error('请选择角色!');
        return
      }
      this.obj.userRoles.push({userId: this.userList[index].id, roleId: this.roleList[this.currentRoleIndex].id})

      console.log(this.roleList[this.currentRoleIndex].roleName, this.userList[index].userName)
      this.hooks = tools.addhooks(this.hooks, this.roleList[this.currentRoleIndex].roleName, this.userList[index]);
      this.roleTypeList = [];
      for(var prop in this.hooks){
        this.roleTypeList.push(prop);
      }
      this.userList = []
      this.searchKey=""
      console.log(this.hooks)
      console.log(this.obj.userRoles)
    },
    onRoleChange: function(index) {
      console.log(index);
      this.currentRoleIndex = index
    },
    searchUser: function(e){
      console.log(e.data);
      userApi.searchUsers({searchStr:e.data}, (data) => {
        console.log(data.result);
        if(data.result.length > 3){
          data.result.length = 3
        }
        this.userList = data.result
      })
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
                 this.hooks = []
                  this.roleTypeList = []
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
      this.hooks = []
      this.roleTypeList = []
      this.$emit('addModalClose', true)
    }
  },
  mounted () {
      roleApi.getRolesByType({type: 1}, (data) => {
        console.log(data)
        this.roleList = data.result
      })
  }
}
</script>
<style>
  .user-item{
    padding: 5px 10px;
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