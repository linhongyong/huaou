<template>
  <Form :model="obj" ref="obj" :rules="ruleCustom">
        <Row  type="flex"  justify="space-around">
      <Col span="11">
        <FormItem label="职务" prop="roleName">
          <Input v-model="obj.roleName" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span="11">
        <FormItem label="说明" prop="remark">
          <Input v-model="obj.remark" placeholder=""></Input>
        </FormItem>
      </Col>
    </Row>
    <Row  type="flex"  >
      <Col span="12">
        <div class="" style="padding-left: 20px;">
        	<FormItem label="是否项目职务 :">
            <RadioGroup v-model="obj.type">
              <Radio label="1">是</Radio>
              <Radio label="0">否</Radio>
            </RadioGroup>
          </FormItem>
        </div>
      </Col>
    </Row>
    <FormItem style="text-align: right;">
      <Button type="primary" @click="handleSubmit('obj')">保存</Button>
      <Button style="margin-left: 8px"  @click="handleReset('obj')">取消</Button>
    </FormItem>
  </Form>
  
</template>
<script>
import roleApi from '@/api/role-api'
export default {
  data () {
    const validateRoleName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填'));
      } 
      callback();
    };
    const validateRemark = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填'));
      } 
      callback();
    };
    return {
      ruleCustom: {
        roleName: [
          { validator: validateRoleName, trigger: 'blur' }
        ],
        remark: [
          { validator: validateRemark, trigger: 'blur' }
        ]
      },
      obj: {
        roleName: '',
        remark: '',
        type: "0"
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
          roleApi.addRole({role:this.obj, roleMenus:[]}, (data) => {
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

  }
}
</script>
