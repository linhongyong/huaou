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
        password: ''
      },
    }
  },
  props: {
  },
  methods: {
    handleSubmit (obj) {
      let that = this
      this.$refs[obj].validate((valid) => {
        if (valid) {
          userApi.addUser({user:this.obj, userRoles:null }, (data) => {
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