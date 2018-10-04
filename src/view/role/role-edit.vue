<template>
  <Form :model="obj" ref="obj" :rules="ruleCustom">
        <Row  type="flex"  justify="space-around">
      <Col span="11">
        <FormItem label="角色" prop="roleName">
          <Input v-model="obj.roleName" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span="11">
        <FormItem label="说明" prop="remark">
          <Input v-model="obj.remark" placeholder=""></Input>
        </FormItem>
      </Col>
    </Row>
    <!--<Row  type="flex"  justify="space-around">
      <Col span="7">
         <FormItem label="添加总监">
          <Input v-model="value13">
            <Button slot="append" icon="ios-search"></Button>
          </Input>
        </FormItem>
        <div class="peoples">
          <div class="">
            
          </div>
        </div>
      </Col>
      <Col span="7">
        <FormItem label="添加专监">
          <Input v-model="obj.name" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span="7">
        <FormItem label="添加监理">
          <Select v-model="obj.department">
            <Option v-bind:value="item" v-for="item in departments" v-bind:key="item">{{ item }}</Option>
          </Select>
        </FormItem>
      </Col>
    </Row>-->
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
//    obj: {
//      roleName: '',
//      remark: ''
//    },

      
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
    handleSubmit (obj) {
      let that = this
      this.$refs[obj].validate((valid) => {
        if (valid) {
          roleApi.updateRole(this.obj, (data) => {
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
