<template>
  <Form :model="obj" ref="obj" :rules="ruleCustom">
    <Row  type="flex"  justify="space-around">
      <Col span="7">
        <FormItem label="菜单名称" prop="menuName">
          <Input v-model="obj.menuName" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span="7">
        <FormItem label="权限标识" prop="perms">
          <Input v-model="obj.perms" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span="7">
        <FormItem label="资源url" prop="url">
          <Input v-model="obj.url" placeholder=""></Input>
        </FormItem>
      </Col>
    </Row>
    <Row  type="flex"  justify="space-around">
      <Col span="7">
        <FormItem label="类型 0菜单 /1按钮" prop="type">
          <Input v-model="obj.type" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span="7">
        <FormItem label="排序" prop="orderNum">
          <Input v-model="obj.orderNum" placeholder=""></Input>
        </FormItem>
      </Col>
      <Col span="7">
        <FormItem label="权限图标" prop="icon">
          <Input v-model="obj.icon" placeholder=""></Input>
        </FormItem>
      </Col>
    </Row>
    <FormItem style="text-align: right;">
      <Button type="primary" @click="handleSubmit('obj')">保存</Button>
      <Button style="margin-left: 8px"  @click="handleReset('obj')">取消</Button>
    </FormItem>
  </Form>
  
</template>
<script>
import menuApi from '@/api/menu-api'
export default {
  data () {
    const validateMenuName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填！'));
      } 
      callback();
    };
    const validatePerms = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填！'));
      } 
      callback();
    };
    const validateType = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填！'));
      } 
      callback();
    };
    const validateOrderNum = (rule, value, callback) => {
      if (value !== '' && parseInt(value-0) > 0) {
        callback();
      }else{
        callback(new Error('请输入整数！'));
      }
      callback();
    };
    return {
      ruleCustom: {
        menuName: [
          { validator: validateMenuName, trigger: 'blur' }
        ],
        perms: [
            { validator: validatePerms, trigger: 'blur' }
        ],
        type: [
            { validator: validateType, trigger: 'blur' }
        ],
        orderNum: [
            { validator: validateOrderNum, trigger: 'blur' }
        ]
      },
      templateList: [],
      obj: {
        menuName: '',
        perms: '',
        url: '',
        type: '',
        orderNum: ''
      },
      menuTree:{}
    }
  },
  props: {
  },
  methods: {
    handleSubmit (obj) {
      let that = this
      this.$refs[obj].validate((valid) => {
        if (valid) {
          menuApi.addMenu(this.obj, (data) => {
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
    menuApi.getMenusLevel1({}, (data)=> {
      console.log(data);
      this.menuTree.result
    })
  }
}
</script>
