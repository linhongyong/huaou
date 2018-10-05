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
                <div class="">{{item.userName}}({{item.mobile}})</div>
                <span  style="color: #2d8cf0;cursor:pointer;" v-on:click="selectUser(index)">添加</span>
              </div>
            </div>
          </div>
          
        </FormItem>
      </Col>
    </Row>
    <div class="" style="min-height: 150px;">
      <Row class="menber-row"  type="flex"  v-for="item in obj.roleTypeList">
          <span class="" style="font-size: 18px;">{{ item }} : </span>
          <span>
            <span class=""  v-for="(itemU, index) in obj.hooks[item]" style="padding-left:20px; font-size: 18px;">
              {{ itemU.userName }}（{{ itemU.mobile }} ） 
              <div class="" style="display: inline; color: red; font-size: 12px;cursor: pointer;" :data-index="index" :data-roletype="item" :data-id="itemU.id" v-on:click="removeRoleUser">删除</div>;
            </span>
          </span>
      </Row>
    </div>
    <FormItem style="text-align: right;">
      <Button type="primary" @click="handleSubmit('obj')">确定</Button>
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
//    obj: {
//      projectName: '',
//      userName: '',
//      project:{
//        projectName: '',
//      },
//      userRoles: []
//    },
//    hooks: [],
//    roleTypeList:[], //已选角色
      roleList: [],
      userList: [],
      currentRoleIndex: -1,

      searchKey:""
    }
  },
  props: {
    obj: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    removeRoleUser: function(e){
      console.log(e);
      projectApi.deleteUserRole({id: e.target.dataset.id}, (data) => {
        this.obj.hooks[e.target.dataset.roletype].splice(e.target.dataset.index, 1)
        console.log(this.obj.hooks[e.target.dataset.roletype]);
        this.obj.hooks = Object.assign({}, this.obj.hooks)
        this.obj.roleTypeList = [];
        for(var prop in this.obj.hooks){
          if(this.obj.hooks[prop].length == 0){
            let temp =  this.obj
            delete temp.hooks[prop]
          }else{
            this.obj.roleTypeList.push(prop);
          }
          
        }
        console.log(this.obj.roleTypeList)
        this.$Message.success(data.message);
        console.log(this.obj.roleTypeList)
        console.log(this.obj.hooks[e.target.dataset.roletype])
        console.log(this.obj.hooks);
         
      })
      
    },
    selectUser: function(index) {
      console.log(index);


      if(this.currentRoleIndex == -1 ){
        this.$Message.error('请选择角色!');
        return
      }
      projectApi.addUserRole({roleId: this.roleList[this.currentRoleIndex].id, userId: this.userList[index].id, projectId: this.obj.project.id  }, (data)=> {
        this.hooks = tools.addhooks(this.obj.hooks, this.roleList[this.currentRoleIndex].roleName, this.userList[index]);
        this.obj.roleTypeList = [];
        for(var prop in this.obj.hooks){
          this.obj.roleTypeList.push(prop);
        }
        this.userList = []
        this.searchKey=""
        console.log(this.obj.hooks)
        console.log(this.obj.userRoles)
        this.$Message.success(data.message);
      }, (data)=>{
        this.$Message.error(data.message);
      })
      
    },
    onRoleChange: function(index) {
      console.log(index);
      this.currentRoleIndex = index
    },
    /**
     * 模糊查询用户
     * @param {Object} e
     */
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
    /**
     * 修改标题事件
     */
    handleSubmit (obj) {
      let that = this
      console.log(this.obj.userRoles)
      this.$refs[obj].validate((valid) => {
      if (valid) {
        projectApi.updateProject({id: this.obj.project.id, projectName: this.obj.projectName}, (data)=> {
          console.log(data); 
          this.$refs[obj].resetFields();
          this.obj.hooks = []
          this.obj.roleTypeList = []
          this.$Message.success({
            content: '修改成功！',
            onClose: () => {
               this.$emit('editModalClose', true)
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
    //重置
    handleReset (obj) {
      this.$refs[obj].resetFields();
      this.obj.hooks = []
      this.obj.roleTypeList = []
      this.$emit('editModalClose', true)
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