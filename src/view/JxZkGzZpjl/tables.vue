<template>
  <div>
    <Card>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" size="small" :columns="columns" @on-delete="handleDelete" @addModalShow="addModalShow"  @editModalShow="editModalShow"/>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
    </Card>
    <Modal v-model="addModal.show" title="新增旁站监理" ok-text="提交" footer-hide="true" width="60%">
    	<div id="" style="width:80%, margin:0 auto">
    		<Add  @addModalClose="addModalClose"></Add>

    	</div>
    </Modal>
    <Modal v-model="editModal.show" title="修改旁站监理" ok-text="提交" footer-hide="true" width="60%">
    	<div id="" style="width:80%, margin:0 auto">
    		<Edit  @editModalClose="editModalClose" :formItem="formItem"></Edit>
    	</div>
    </Modal>
  </div>
</template>

<script>
import Tables from '_c/tables'
import Add from './add.vue'
import Edit from './edit.vue'
import expandRow from './table-expand.vue';

import { getJxZkGzzPzjlList, deleteJxZkGzzPzjl, getJxZkGzzPzjl } from '@/api/JxZkGzZpjl'
export default {
  name: 'tables_page',
  components: {
    Tables, Add, Edit
  },
  data () {
    return {
      columns: [
        {
          type: 'expand',
          searchable: false,
          key: 'expand',
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            })
          }
        },
        {title: '天气', key: 'weather'},
        {title: '施工单位', key: 'buildCompany'},
        {title: '楼栋号', key: 'building'},
        {title: '桩号', key: 'pile'},
/*        {title: '监理开始时间', key: 'startTime'},
        {title: '监理结束时间', key: 'endTime'},
        {title: '钻机型号', key: 'drillModel'},
        {title: '钻机工作状态', key: 'workState'},
        {title: '主钢筋', key: 'mainBar'},
        {title: '箍钢筋', key: 'circularBar'},
        {title: '加强钢筋', key: 'strongBar'},
        {title: '钢筋笼数量（节）', key: 'barCageCount'},
        {title: '钢筋长度', key: 'length'},
        {title: '吊筋长度', key: 'suspensionBarLength'},
        {title: '焊接结论', key: 'weldingResult'},
        {title: '桩径', key: 'pileDiameter'},
        {title: '桩长', key: 'pileLength'},
        {title: '钻地面标高', key: 'groundLevel'},
        {title: '设计桩顶标高', key: 'pileTopHeight'},
        {title: '开孔时间', key: 'openTime'},
        {title: '终孔时间', key: 'stopTime'},
        {title: '实际孔深', key: 'actualDeep'},
        {title: '有效桩长', key: 'validPileLength'},
        {title: '下钢筋笼时间起', key: 'dropCageStartTime'},
        {title: '下钢筋笼时间止', key: 'dropCageEndTime'},
        {title: '二次清孔时间起', key: 'secondCleanStartTime'},
        {title: '二次清孔时间止', key: 'secondCleanEndTime'},
        {title: '沉渣厚度', key: 'sedimentHeight'},
        {title: '泥浆比重', key: 'slurryProp'},
        {title: '砼强度等级', key: 'concreteStrongLevel'},
        {title: '灌注时间起', key: 'perfusionStartTime'},
        {title: '灌注时间止', key: 'perfusionEndTime'},
        {title: '设计坍落度', key: 'designSlump'},
        {title: '实测坍落度', key: 'actualSlump'},
        {title: '砼理论方量', key: 'theoryVolume'},
        {title: '砼实灌方量', key: 'actualVolume'},
        {title: '充盈系数', key: 'fillingCoefficient'},
        {title: '试块制作组数', key: 'sampleMaking'},
        {title: '发现的问题及处理情况', key: 'problemContent'},
        {title: '站旁监理人员id', key: 'superId'},*/
        {
          title: '操作',
          key: 'handle',
          options: ['delete','add'],
          button: [
          	(h, params, vm) => {
				    return h('Button', {
				      	props:{
				          type: 'text',
				          ghost: true
				        },
				        on: {
				        'click': (e) => {
				        	console.log('modal click');
				        	vm.$emit('editModalShow', params);
				        }
				      }
				      }, [
				        h('Icon', {
				          props: {
				            type: 'ios-create',
				            size: 18,
				            color: '#000000'
				          }
				        })
				      ])
          	}
          ]
        }
      ],
      tableData: [],
      addModal: {
      	show: false,
      },
      editModal: {
      	show: false,
      },
      timeToSubmit: false,
      formItem:{
      	
      }
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
      let that = this;
      deleteJxZkGzzPzjl(params.row.id).then(res => {
      	
      	console.log(res);
      	if(res.data.code == "Success"){
    	 		that.tableData = params.tableData.filter((item, index) => index !== params.row.initRowIndex);
      	}
    	})
      
     
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    },
    addModalShow() {
     	this.addModal.show = true;
    },
    addModalClose(){
    	console.log('handleModalClose')
    	this.addModal.show = false;
    	getJxZkGzzPzjlList().then(res => {
      this.tableData = res.data.result.list
    })
    },
    editModalShow(params) {
    	console.log("--+++++++++++++paramsparamsparams+++++++++++++++++++++++++++++++++");
    	console.log(params)
    	getJxZkGzzPzjl(params.row.id).then(res => {
	    	console.log("-------------------------");
	    	console.log(res.data);
	      this.formItem = res.data.result
	    })
     	this.editModal.show = true;
    },
    editModalClose(){
    	console.log('editModalClose')
    	this.editModal.show = false;
    	getJxZkGzzPzjlList().then(res => {
      this.tableData = res.data.result.list
    })
    }
  },
  mounted () {
    getJxZkGzzPzjlList().then(res => {
      this.tableData = res.data.result.list
    })
  }
}
</script>

<style>

</style>
