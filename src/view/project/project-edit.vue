<template>
  <Form :model="obj" ref="obj" :rules="ruleCustom">
        <Row  type="flex"  justify="center">
      <Col span="12">
        <FormItem label="项目名称" prop="projectName">
          <Input v-model="obj.projectName" placeholder=""></Input>
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
import projectApi from '@/api/project-api'
export default {
  data () {
    const validateProjectName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填'));
      } 
      callback();
    };
    return {
      ruleCustom: {
        projectName: [
          { validator: validateProjectName, trigger: 'blur' }
        ]
      },
      templateList: [],
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
          projectApi.updateProject(this.obj, (data) => {
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
      this.$emit('addModalClose', true)
    }
  },
  mounted () {
    
  }
}
</script>
