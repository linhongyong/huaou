<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="userList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true"></Button>
      </div>
    </Card>
    <Modal v-model="editModal.show" title="修改工程信息" :footer-hide="true" width="60%" @on-cancel="onCancelEditModal">
      <div id="" style="width:80%, margin:0 auto">
        <Edit :obj="project"  @editModalClose="editModalClose"></Edit>
      </div>
    </Modal>
    <Modal v-model="addModal.show" title="创建工程" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Add @addModalClose="addModalClose"></Add>
      </div>
    </Modal>
  </div>
</template>
<script>

import Tables from '_c/tables'
import Edit from './project-edit.vue'
import Add from './project-add.vue'
import projectApi from '@/api/project-api'

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
      project:{},
      hooks: [],
      roleTypeList:[],
      columns2: [
        {
          title: '工程名',
          key: 'projectName'
          //  width: 100,
          //  fixed: 'left'
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
                    
                    projectApi.getProjectDetail({id:this.userList[params.index].id}, (data) => {
                      console.log(data);
                      for(let i=0; i<data.result.userRoleDTOS.length; i++){
                        this.addhooks(data.result.userRoleDTOS[i].roleName, data.result.userRoleDTOS[i]);
                      }
                      for(var prop in this.hooks){
                        this.roleTypeList.push(prop);
                      }
                      data.result.hooks = this.hooks
                      data.result.roleTypeList = this.roleTypeList
                      data.result.projectName = data.result.project.projectName
                      this.project = data.result
                      this.editModal.show = true
                      console.log(this.project)
                    }, (data) => {
                      this.$Message.error(data.message);
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
                    projectApi.deleteProject({id:this.userList[params.index].id}, () => {
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
    addhooks: function(type, hook) {//
      var hooks = this.hooks[type];
      if (!hooks) {
        hooks = [];
      }
      hooks.push(hook);
      this.hooks[type] = hooks;
    },
    addModalClose () {
      
      this.addModal.show = false
      this.getProjects()
    },
    editModalClose () {
      this.hooks = []
      this.roleTypeList = []
      this.editModal.show = false
      this.getProjects()
    },
    getProjects () {
      projectApi.getProjects({pageIndex: this.pageSize*(this.pageIndex - 1)+1, pageSize: this.pageSize}, (data) => {
        console.log(data)
        this.userList = data.result.list
        this.total =  data.result.total
      })
    },
    pageChange (pageIndex) {
      console.log(pageIndex)
      this.pageIndex = pageIndex
      this.getProjects()
    },
    pageSizeChange(pageSize){
      console.log(pageSize)
      this.pageSize = parseInt(pageSize);
      this.getProjects()
    },
    onCancelEditModal(){
      this.hooks = []
      this.roleTypeList = []
    }
  },
  mounted () {
    this.getProjects()
  }
}
</script>
<style>
  .float-l{
    float: left;
  }
</style>
