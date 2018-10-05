<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="userList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <Button style="" type="primary" shape="circle" icon="md-person-add" v-on:click="addModal.show = true"></Button>
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
  </div>
</template>
<script>

import Tables from '_c/tables'
import Edit from './user-edit.vue'
import Add from './user-add.vue'
import userApi from '@/api/user-api'
import roleApi from '@/api/role-api'

export default {
  components: {
    Tables, Edit, Add
  },
  data () {
    return {
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
          title: '密码',
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
                  size: 'small'
                },
                on: {
                  'click': (e) => {
                    userApi.getUserById({id:this.userList[params.index].id}, (data) => {
                      data.result.user.roleSelectedList = []
                      data.result.user.roleList = []
                      this.user = data.result.user
                      this.user.roleSelectedList = data.result.userRoleDTOList
                      let tempSelectedRoleList = data.result.userRoleDTOList
                      roleApi.getRolesByType({type: 0}, (data2) => {
                        console.log(data2)
                        let tempList = []
                        for(let i=0; i<data2.result.length; i++){
                          let count = 0;
                          for(let j=0; j<tempSelectedRoleList.length; j++){
                            if(data2.result[i].roleName != tempSelectedRoleList[j].roleName){
                               count ++
                            }
                          }
                          if(count == tempSelectedRoleList.length){
                            tempList.push(data2.result[i])
                          }
                        }
                        this.user.roleList = tempList
                        console.log(this.user)   
                        this.editModal.show = true
                      })                      
                    })
                  }
                },
                style: {
                  marginRight: '5px'
                }
              }, '修改'),
              h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    console.warn(params.index);
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
                    size: 'small'
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
    addModalClose () {
      this.addModal.show = false
      this.getUsers()
    },
    editModalClose () {
      this.editModal.show = false
      this.getUsers()
    },
    getUsers () {
      userApi.getUsers({pageIndex: this.pageSize*(this.pageIndex - 1)+1, pageSize: this.pageSize}, (data) => {
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
