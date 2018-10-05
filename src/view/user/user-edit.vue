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
      
    </Row>
    <div class="" style="min-height: 200px;">
      <div class=""  style="min-height: 100px; clear: both;padding: 0 20px; font-size: 18px;">
        <div class="" style="float: left;"  v-if="obj.roleSelectedList.length > 0"> 已选角色 ：</div>
        <div class="" v-for="(item, index) in obj.roleSelectedList" style="float: left; padding-right: 20px;" v-on:click="reduceRole(index)">
          <span class="">{{ item.roleName }}{{ item.projectName ? "（"+item.projectName+"项目）" : ""}}</span><Icon class="add-icon" type="md-remove" />
        </div>
      </div>
      
      <div class=""  style="min-height: 100px; clear: both;padding: 0 20px; font-size: 18px;">
        <div class="" style="float: left;" v-if="obj.roleList.length > 0">可选角色 ：</div>
        <div class="" v-for="(item, index) in obj.roleList" style="float: left; padding-right: 20px;" v-on:click="addRole(index)">
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
import userRoleApi from '@/api/userRole-api'

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
//    obj: {
//      userName: '',
//      mobile: '',
//      password: '',
//      job: 'job',
//      department: '人事部'
//    },
      departments: ['人事部', '造价部', '工程部']
      
    }
  },
  props: {
    obj: {
      type: Object,
      default () {
        return {
          roleSelectedList:[],
          roleList:[]
        }
      }
    }
  },
  methods: {
    addRole (index){
      
      
      userRoleApi.addUserRole({roleId: this.obj.roleList[index].id, userId: this.obj.id  }, (data)=> {
        
        this.obj.roleSelectedList.push(this.obj.roleList[index])
        this.obj.roleList.splice(index, 1)
        console.log(this.obj.roleSelectedList);
        
        this.$Message.success(data.message);
      }, (data)=>{
        this.$Message.error(data.message);
      })
      
    },
    reduceRole (index){
      if(this.obj.roleSelectedList[index].projectName && this.obj.roleSelectedList[index].projectName != ""){
        this.$Message.error("暂无相应权限");
        return;
      }
      userRoleApi.deleteUserRole({id: this.obj.roleSelectedList[index].id}, (data) => {
        this.obj.roleList.push(this.obj.roleSelectedList[index])
        this.obj.roleSelectedList.splice(index, 1)
        console.log(this.obj.roleSelectedList);
        this.$Message.success(data.message);
      })
    },
    handleSubmit (obj) {
      let that = this
      this.$refs[obj].validate((valid) => {
        if (valid) {
          userApi.updateUser(this.obj, (data) => {
            console.log(data); 
            this.$refs[obj].resetFields();
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
    handleReset (obj) {
      this.$refs[obj].resetFields();
      this.$emit('editModalClose', true)
    }
  },
  mounted () {
    

  }
}
</script>
