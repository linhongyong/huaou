<template>
  <Form :model="obj" ref="obj" :rules="ruleCustom">
    <Row  type="flex"  justify="space-around">
      <Col span="7">
        <FormItem label="姓名" prop="userName">
          <Input v-model="obj.userName" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span="7">
        <FormItem label="电话" prop="mobile">
          <Input v-model="obj.mobile" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span="7">
        <FormItem label="密码" prop="password">
          <Input v-model="obj.password" placeholder=""></Input>
        </FormItem>
      </Col>
      <!--<Col span="7">
        <FormItem label="部门" prop="">
          <Select v-model="obj.department">
            <Option v-bind:value="item" v-for="item in departments" v-bind:key="item">{{ item }}</Option>
          </Select>
        </FormItem>
      </Col>-->
    </Row>
    <div class="" style="min-height: 200px;">
    	<div class=""  style="min-height: 100px; clear: both;padding: 0 20px; font-size: 18px;">
        <div class="" style="float: left;"  v-if="roleSelectedList.length > 0"> 已选角色 ：</div>
        <div class="" v-for="(item, index) in roleSelectedList" style="float: left; padding-right: 20px;" v-on:click="reduceRole(index)" :key="item">
          <span class="">{{ item.roleName }}</span><Icon class="add-icon" type="md-remove" />
        </div>
      </div>
      
      <div class=""  style="min-height: 100px; clear: both;padding: 0 20px; font-size: 18px;">
        <div class="" style="float: left;" v-if="roleList.length > 0">可选角色 ：</div>
        <div class="" v-for="(item, index) in roleList" style="float: left; padding-right: 20px;" v-on:click="addRole(index)" :key="item">
          <span class="">{{ item.roleName }}</span><Icon class="add-icon" type="md-add"/>
        </div>
      </div>
    </div>
    
    
      
      
    <FormItem style="text-align: right;">
      <Button type="primary" @click="handleSubmit('obj')">保存</Button>
      <Button style="margin-left: 8px"  @click="handleReset('obj')">取消</Button>
    </FormItem>
  </Form>
  
</template>
<script>
import userApi from '@/api/user-api'
import roleApi from '@/api/role-api'
export default {
  data () {
    const validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填'));
      } 
      callback();
    };
    const validateMobile = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填'));
      } 
      callback();
    };
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填'));
      } 
      callback();
    };
    return {
      ruleCustom: {
        userName: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        mobile: [
            { validator: validateMobile, trigger: 'blur' }
        ],
        password: [
            { validator: validatePassword, trigger: 'blur' }
        ]
      },
      templateList: [],
      obj: {
        userName: '',
        mobile: '',
        password: '',
        job: 'job',
        department: '人事部'
      },

      roleList: [],
      roleSelectedList: []
    }
  },
  props: {
  },
  methods: {
    addRole (index){
      this.roleSelectedList.push(this.roleList[index])
      this.roleList.splice(index, 1)
      console.log(this.roleSelectedList);
    },
    reduceRole (index){
      this.roleList.push(this.roleSelectedList[index])
      this.roleSelectedList.splice(index, 1)
      console.log(this.roleSelectedList);
    },
    handleSubmit (obj) {
      let that = this
      let userRoles = []
      for(let i=0; i<this.roleSelectedList.length; i++ ){
        userRoles.push({ roleId:this.roleSelectedList[i].id})
      }
      this.$refs[obj].validate((valid) => {
        if (valid) {
          userApi.addUser({user:this.obj, userRoles:userRoles }, (data) => {
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
//    this.roleList = []
//    this.roleSelectedList = []
    }
  },
  mounted () {
    roleApi.getRolesByType({type: 0}, (data) => {
      console.log(data)
      this.roleList = data.result
    })
  }
}
</script>
<style type="text/css">
	.add-icon{
	  padding: 5px 10px 5px 5px;
	  color: #2d8cf0;
	  cursor:pointer;
	}
</style>