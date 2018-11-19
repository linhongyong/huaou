<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="roleList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true" :disabled="!isAccessForButton('0021')"></Button>
      </div>
    </Card>
    <Modal v-model="editModal.show" title="修改职务信息" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Edit :obj="role"  @editModalClose="editModalClose"></Edit>
      </div>
    </Modal>
    <Modal v-model="addModal.show" title="添加职务" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Add @addModalClose="addModalClose"></Add>
      </div>
    </Modal>
    <Modal v-model="isRoleMenuSetShow" title="设置职务资源" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <SetRoleMenu @modalAction="onModalAction" :obj="role"></SetRoleMenu>
      </div>
    </Modal>
  </div>
</template>
<script>

import Tables from '_c/tables'
import Edit from './role-edit.vue'
import Add from './role-add.vue'
import SetRoleMenu from './role-setRoleMenu.vue'
import roleApi from '@/api/role-api'
import menuApi from "@/api/menu-api";

export default {
  components: {
    Tables, Edit, Add, SetRoleMenu
  },
  data () {
    return {
      isRoleMenuSetShow: false,
      editModal: {
        show: false
      },
      addModal: {
        show: false
      },
      role:{ownerMenus:[]},
      columns2: [
        {
          title: '职务',
          key: 'roleName'
          //  width: 100,
          //  fixed: 'left'
        },
        {
          title: '说明',
          key: 'remark'
          //  width: 100
        },
        {
          title: '是否项目职务',
          key: 'type',
          render: (h, params) => {
          	return h("div", (() => {
          		let str = "";
          		if(params.row.type == 0){
          			str = "否"
          		}else if(params.row.type == 1){
          			str = "是"
          		}else{
          			str = "未知"
          		}
          		return str
          	})())
          }
        },
        {
          title: '操作',
          key: 'action',
          //  fixed: 'right',
          //  width: 120,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'success',
                  size: 'small',
									disabled: !this.isAccessForButton("0022"),
                },
                on: {
                  'click': (e) => {
                    this.editModal.show = true
                    this.role = Object.assign({},this.role, this.roleList[params.index]) 
                    console.log(this.role)
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
									disabled: !this.isAccessForButton("0023"),
                },
                on: {
                  'click': (e) => {
                    this.isRoleMenuSetShow = true
                    this.role = Object.assign({},this.role, this.roleList[params.index]) 
                    this.getMenusByRoleId(this.role.id);
                    console.log(this.role)
                  }
                },
                style: {
                  marginRight: '5px'
                }
              }, '设置职务资源'),
              h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    console.log(params.index);
										roleApi.deleteRole({id:this.roleList[params.index].id})
										.then( data => {
											this.roleList.splice(params.index, 1)
											this.$Message.success("删除成功！");
											this.total = this.total - 1
										})
										.catch( err => {
											this.$Message.error(err.message);
										})
                  }
                }
              }, [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small',
										disabled: !this.isAccessForButton("0024"),
                  }
                }, '删除')
              ])
            ])
          }
        }
      ],
      roleList: [],
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
    },
    addModalClose () {
      this.addModal.show = false
      this.getRoles()
    },
    editModalClose () {
      this.editModal.show = false
      this.getRoles()
    },
    getRoles () {
      roleApi.getRoles({pageIndex: this.pageSize*(this.pageIndex - 1)+1, pageSize: this.pageSize}, (data) => {
        console.log(data)
        this.roleList = data.result.list
        this.total =  data.result.total
      })
    },
    getMenusByRoleId (id) {
      menuApi.getMenusByRoleId({roleId: id}).then( data => {
         this.role.ownerMenus = data;
        console.log(data);
      })
    },
    pageChange (pageIndex) {
      console.log(pageIndex)
      this.pageIndex = pageIndex
      this.getRoles()
    },
    pageSizeChange(pageSize){
      console.log(pageSize)
      this.pageSize = parseInt(pageSize);
      this.getRoles()
    }
  },
  mounted () {
    this.getRoles()
  }
}
</script>
<style>
  .float-l{
    float: left;
  }
</style>
