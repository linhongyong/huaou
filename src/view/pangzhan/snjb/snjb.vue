<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="snjbList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <!--<Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true"></Button>-->
      </div>
    </Card>
    <Modal v-model="editModal.show" title="修改旁站数据" :footer-hide="true" width="60%"  :scrollable="true">
      <div id="" style="width:80%, margin:0 auto">
        <Edit :obj="role"  @editModalClose="editModalClose"></Edit>
      </div>
    </Modal>
    <Modal v-model="addModal.show" title="添加模板" :footer-hide="true" width="60%"  :scrollable="true">
      <div id="" style="width:80%, margin:0 auto">
        <Add @addModalClose="addModalClose"></Add>
      </div>
    </Modal>
  </div>
</template>
<script>

import Tables from '_c/tables'
import Edit from './snjb-edit.vue'
import Add from './snjb-add.vue'
import snjbApi from '@/api/snjb-api'

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
      role:{},
      columns2: [
        {title: '模板名称', key: 'templateName'},
        {title: '模板备注', key: 'remark'},
        {title: '供应单位', key: 'supplier'},
        {title: '搅拌机型号', key: 'blenderModel'},
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
                  size: 'small'
                },
                on: {
                  'click': (e) => {
                    this.editModal.show = true
                    this.role = this.snjbList[params.index]
                    console.log(this.role)
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
                    snjbApi.deleteSnjb({id:this.snjbList[params.index].id}, () => {
                      this.snjbList.splice(params.index, 1)
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
      snjbList: [],
      pageIndex: 1,
      pageSize: 10,
      total:0
    }
  },
  methods: {
    addModalClose () {
      this.addModal.show = false
      this.getSnjbs()
    },
    editModalClose () {
      this.editModal.show = false
      this.getSnjbs()
    },
    getSnjbs () {
      snjbApi.getSnjbList({pageIndex: this.pageSize*(this.pageIndex - 1)+1, pageSize: this.pageSize}, (data) => {
        console.log(data)
        this.snjbList = data.result.list
        this.total =  data.result.total
      })
    },
    pageChange (pageIndex) {
      console.log(pageIndex)
      this.pageIndex = pageIndex
      this.getSnjbs()
    },
    pageSizeChange(pageSize){
      console.log(pageSize)
      this.pageSize = parseInt(pageSize);
      this.getSnjbs()
    }
  },
  mounted () {
    this.getSnjbs()
  }
}
</script>
<style>
  .float-l{
    float: left;
  }
</style>
