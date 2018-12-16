<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="tmplList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true"  :disabled="!isAccessForButton('0004')"></Button>
      </div>
    </Card>
    <Modal v-model="editModal.show" title="修改模板" :footer-hide="true" width="60%"  :scrollable="true"  :styles="{top:'0px'}">
      <div id="" style="width:80%, margin:0 auto">
        <Edit :obj="obj"  @editModalClose="editModalClose"></Edit>
      </div>
    </Modal>
    <Modal v-model="addModal.show" title="添加模板" :footer-hide="true" width="60%"  :scrollable="true"  :styles="{top:'0px'}">
      <div id="" style="width:80%, margin:0 auto">
        <Add @addModalClose="addModalClose"></Add>
      </div>
    </Modal>
  </div>
</template>
<script>

import Tables from '_c/tables'
import Edit from './jxgz-tmpl-edit.vue'
import Add from './jxgz-tmpl-add.vue'
import jxgzTmplApi from '@/api/jxgz-tmpl-api'
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
      obj:{},
      columns2: [
        {title: '模板名称', key: 'templateName'},
        {title: '模板备注', key: 'remark'},
        {title: '施工单位', key: 'buildCompany'},
        {title: '工作状态', key: 'workState'},
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
									disabled: !this.isAccessForButton("0005"),
                },
                on: {
                  'click': (e) => {
                    this.editModal.show = true
                    this.obj = this.tmplList[params.index]
                      //处理特殊字段
                    // this.obj.mainBarNum = this.obj.mainBar && this.obj.mainBar.split("φ")[0]
                    // this.obj.mainBarType= this.obj.mainBar && this.obj.mainBar.split("φ")[1]
                    console.log(this.obj)
                  }
                },
                style: {
                  marginRight: '5px'
                }
              }, '修改'),
              h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?',						
                },
                on: {
                  'on-ok': () => {
                    console.warn(params.index);
                    jxgzTmplApi.deleteJxgzTmpl({id:this.tmplList[params.index].id}, () => {
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
										disabled: !this.isAccessForButton("0006"),
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
      this.getList ()
    },
    editModalClose () {
      this.editModal.show = false
      this.getList ()
    },
    getList  () {
			let data = {
				pageIndex: this.pageSize*(this.pageIndex - 1), 
				pageSize: this.pageSize,
				data: this.PROJECT.id
			}
			jxgzTmplApi.getTmplList(data)
			.then( data =>{
				console.log(data);
				this.tmplList = data.list
				this.total =  data.total
			})
//       jxgzTmplApi.getJxgzTmplList({pageIndex: this.pageSize*(this.pageIndex - 1)+1, pageSize: this.pageSize}, (data) => {
//         console.log(data)
//         this.tmplList = data.result.list
//         this.total =  data.result.total
//       })
    },
		buildingChange (){},//引入minx引起
    pageChange (pageIndex) {
      console.log(pageIndex)
      this.pageIndex = pageIndex
      this.getList ()
    },
    pageSizeChange(pageSize){
      console.log(pageSize)
      this.pageSize = parseInt(pageSize);
      this.getList ()
    },
		
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
