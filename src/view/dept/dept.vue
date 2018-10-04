<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="deptList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true"></Button>
      </div>
    </Card>
    <Modal v-model="editModal.show" title="修改角色信息" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Edit :obj="dept"  @editModalClose="editModalClose"></Edit>
      </div>
    </Modal>
    <Modal v-model="addModal.show" title="添加角色" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Add @addModalClose="addModalClose"></Add>
      </div>
    </Modal>
  </div>
</template>
<script>

import Tables from '_c/tables'
import Edit from './dept-edit.vue'
import Add from './dept-add.vue'
import deptApi from '@/api/dept-api'

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
      dept:{},
      columns2: [
        {
          title: '部门',
          key: 'deptName'
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
                    this.editModal.show = true
                    this.dept = this.deptList[params.index]
                    console.log(this.dept)
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
                    deptApi.deleteDept({id:this.deptList[params.index].id}, () => {
                      this.deptList.splice(params.index, 1)
                      this.$Message.success("删除成功！");
                      this.total = this.total - 1
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
      deptList: [],
      pageIndex: 1,
      pageSize: 10,
      total:0
    }
  },
  methods: {
    addModalClose () {
      this.addModal.show = false
      this.getDepts()
    },
    editModalClose () {
      this.editModal.show = false
      this.getDepts()
    },
    getDepts () {
      deptApi.getDepts({pageIndex: this.pageSize*(this.pageIndex - 1)+1, pageSize: this.pageSize}, (data) => {
        console.log(data)
        this.deptList = data.result.list
        this.total =  data.result.total
      })
    },
    pageChange (pageIndex) {
      console.log(pageIndex)
      this.pageIndex = pageIndex
      this.getDepts()
    },
    pageSizeChange(pageSize){
      console.log(pageSize)
      this.pageSize = parseInt(pageSize);
      this.getDepts()
    }
  },
  mounted () {
    this.getDepts()
  }
}
</script>
<style>
  .float-l{
    float: left;
  }
</style>
