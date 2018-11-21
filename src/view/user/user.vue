<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="userList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <Button style="" type="primary" shape="circle" icon="md-person-add" v-on:click="addModal.show = true" :disabled="!isAccessForButton('0026')"></Button>
      </div>
    </Card>
    <Modal v-model="editModal.show" title="修改用户信息" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Edit :obj="user"  @editModalClose="editModalClose"></Edit>
      </div>
    </Modal>
    <Modal v-model="addModal.show" title="添加用户" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Add @addModalClose="addModalClose"></Add>
      </div>
    </Modal>
    <Modal v-model="isUserRoleSetModalShow" :title="'设置用户职务: '+user.userName" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <SetUserRole :obj="user"  @modalAction="onModalAction"></SetUserRole>
      </div>
    </Modal>
  </div>
</template>
<script>

import Tables from '_c/tables'
import Edit from './user-edit.vue'
import Add from './user-add.vue'
import SetUserRole from './user-setUserRole.vue'
import userApi from '@/api/user-api'
import roleApi from '@/api/role-api'
import tools from "_u/tools.js";
export default {
  components: {
    Tables, Edit, Add, SetUserRole
  },
  data () {
    return {
      isUserRoleSetModalShow:false,
      editModal: {
        show: false
      },
      addModal: {
        show: false
      },
      user:{roleSelectedList:[], roleList:[]},
      columns2: [
        {
          title: '姓名',
          key: 'userName'
          //  width: 100,
          //  fixed: 'left'
        },
        {
          title: '电话',
          key: 'mobile'
          //  width: 100
        },
        {
          title: '密码(加密后)',
          key: 'password'
          //  width: 100
        },
        {
          title: 'Action',
          key: 'action',
          //  fixed: 'right',
          //  width: 120,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'success',
                  size: 'small',
									disabled: !this.isAccessForButton("0026"),
                },
                on: {
                  'click': (e) => {
                    userApi.getUserById({id:this.userList[params.index].id}, (data) => {
                      this.user = Object.assign({}, this.user, data.result.user)
                      this.editModal.show = true;
                    })
                  }
                },
                style: {
                  marginRight: '5px'
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'success',
                  size: 'small',
									disabled: !this.isAccessForButton("0027"),
                },
                on: {
                  'click': (e) => {
                    userApi.getUserById({id:this.userList[params.index].id}, (data) => {
                      let user = data.result.user
                      user.roleSelectedList = data.result.userRoleDTOList
                      roleApi.getRolesByType({type: 0}, (data2) => {//获得所有非项目角色
                        user.roleList = tools.getRemainFromTwoArrayByProp(data2.result, data.result.userRoleDTOList, 'roleName');
                        this.isUserRoleSetModalShow = true;
                        this.user = Object.assign(this.user, user)
                      })
                    })
                  }
                },
                style: {
                  marginRight: '5px'
                }
              }, '设置用户职务'),
              h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    console.log(params.index);
                    userApi.deleteUser({id:this.userList[params.index].id}, (data) => {
                      this.userList.splice(params.index, 1)
                      this.total = this.total - 1
                      this.$Message.success("删除成功！");
                    })
                  }
                }
              }, [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small',
										disabled: !this.isAccessForButton("0028"),
                  }
                }, '删除')
              ])
            ])
          }
        }
      ],
      userList: [],
      pageIndex: 1,
      pageSize: 10,
      total:0
    }
  },
  methods: {
    onModalAction (e){
      console.log(e);
      if(e.type == "close"){
        this[e.name] = false;
      }else if(e.type == "show"){
        this[e.name] = true;
      }else{
        console.error("不存在这种模态框行为")
      }
      this.getUsers();
    },
    addModalClose () {
      this.addModal.show = false
      this.getUsers()
    },
    editModalClose () {
      this.editModal.show = false
      this.getUsers()
    },
    getUsers () {
      userApi.getUsers({pageNum : this.pageIndex, pageSize: this.pageSize}, (data) => {
        console.log(data)
        this.userList = data.result.list
        this.total =  data.result.total
      })
    },
    pageChange (pageIndex) {
      console.log(pageIndex)
      this.pageIndex = pageIndex
      this.getUsers()
    },
    pageSizeChange(pageSize){
      console.log(pageSize)
      this.pageSize = parseInt(pageSize);
      this.getUsers()
    }
  },
  mounted () {
    this.getUsers()
  }
}
</script>
<style>
  .float-l{
    float: left;
  }
</style>
