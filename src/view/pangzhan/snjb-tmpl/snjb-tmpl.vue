<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="tmplList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true" :disabled="!isAccessForButton('0012')"></Button>
      </div>
    </Card>
    <Modal v-model="editModal.show" title="修改模板" :footer-hide="true" width="60%"  :scrollable="true"  :styles="{top:'0px'}">
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
import Edit from './snjb-tmpl-edit.vue'
import Add from './snjb-tmpl-add.vue'
import snjbTmplApi from '@/api/snjb-tmpl-api'
import MIXIN_ROLE from "@/mixin/ROLE";
export default {
	mixins: [MIXIN_ROLE],
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
        // {title: '模板备注', key: 'remark'},
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
                  size: 'small',
									disabled: !this.isAccessForButton("0012"),
                },
                on: {
                  'click': (e) => {
                    this.editModal.show = true
                    this.role = this.tmplList[params.index]
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
                    snjbTmplApi.deleteSnjbTmpl({id:this.tmplList[params.index].id}, () => {
                      this.tmplList.splice(params.index, 1)
                      this.$Message.success("删除成功！");
                      this.total = this.total - 1
                    })
                  }
                }
              }, [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small',
										disabled: !this.isAccessForButton("0011"),
                  }
                }, '删除')
              ])
            ])
          }
        }
      ],
      tmplList: [],
      pageIndex: 1,
      pageSize: 10,
      total:0
    }
  },
  methods: {
    addModalClose () {
      this.addModal.show = false
      this.getList()
    },
    editModalClose () {
      this.editModal.show = false
      this.getList()
    },

		getList () {
			let data = {
				pageNum: this.pageIndex, 
				pageSize: this.pageSize,
				data: this.PROJECT.id
			}
			snjbTmplApi.getTmplList(data)
			.then( data =>{
				console.log(data);
				this.tmplList = data.list
				this.total =  data.total
			})
		},
		buildingChange (){},//引入minx引起
    pageChange (pageIndex) {
      console.log(pageIndex)
      this.pageIndex = pageIndex
      this.getList()
    },
    pageSizeChange(pageSize){
      console.log(pageSize)
      this.pageSize = parseInt(pageSize);
      this.getList()
    }
  },
  mounted () {
  }
}
</script>
<style>
  .float-l{
    float: left;
  }
</style>
