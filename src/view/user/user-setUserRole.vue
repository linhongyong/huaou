<template>
  <Form>
    <div class="" style="min-height: 200px;">
      <div class=""  style="min-height: 100px; clear: both;padding: 0 20px; font-size: 18px;margin-top: 40px;">
        <Tag color="success" v-if="obj.roleSelectedList.length > 0"> 已选职务:</Tag>
				<span class=""  v-for="(item, index) in obj.roleSelectedList" style="padding-left:20px; font-size: 18px;" :key="index">
					<Button type="success" @click="reduceRole(index)"><span style="padding-right: 5px;">{{ item.roleName }}{{ item.projectName ? "（"+item.projectName+"项目）" : ""}}</span><Icon type="ios-trash-outline" size="18"/></Button>
				</span>
      </div>
      <div class=""  style="min-height: 60px; clear: both;padding: 0 20px; font-size: 18px;">
        <Tag color="warning" v-if="obj.roleList.length > 0">可选职务:</Tag>
				<span class=""  v-for="(item, index) in obj.roleList" style="padding-left:20px; font-size: 18px;" :key="index">
					<Button type="warning" @click="addRole(index)"><span style="padding-right: 5px;">{{ item.roleName }}</span><Icon type="md-add" size="18"/></Button>
				</span>
	
      </div>
    </div>
    <FormItem style="text-align: right;">
      <Button type="primary" @click="handleSubmit()">确定</Button>
      <Button style="margin-left: 8px"  @click="handleReset()">取消</Button>
    </FormItem>
  </Form>
  
</template>
<script>
import userApi from '@/api/user-api'
import roleApi from '@/api/role-api'
import userRoleApi from '@/api/userRole-api'

export default {
  data () {
    return {
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
    handleSubmit () {
     this.$emit('modalAction', {type:"close", name:"isUserRoleSetModalShow"})
    },
    handleReset () {
      this.$emit('modalAction', {type:"close", name:"isUserRoleSetModalShow"})
    }
  },
  mounted () {
    

  }
}
</script>
<style>
  .md-add{
    color: red;
  }
  .add-icon{
    
  }
</style>
