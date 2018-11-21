<template>
  <div>
    <Card>
      <Table width="100%" border :columns="columns" :data="tableData"></Table>
      <div style="padding: 18px 10px 40px;text-align: right;clear: both;">
      	<Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
      	<!--<Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true"></Button>-->
      </div>
    </Card>

    <!-- <Modal v-model="editModal.show" title="修改预应力管桩旁站" ok-text="提交" :footer-hide="true" width="60%" :scrollable="true" :styles="{top:'0px'}">
      <div id="" style="width:80%, margin:0 auto">
        <Edit @editModalClose="editModalClose" :obj="formItem"></Edit>
      </div>
    </Modal> -->
    <Modal v-model="detailModal.show" :title="'台账详情 编号:'+formItem.id" ok-text="确认" width="60%" :scrollable="true">
      <div id="">
        <Detail :obj="formItem"></Detail>
      </div>
    </Modal>
		<OperationLog v-model="isOperationLogShow" :operationLogList="operationLogList" :obj="obj"></OperationLog>
  </div>
</template>

<script>
  import Tables from "_c/tables";

  import Edit from "./edit.vue";
  import Detail from "./detail.vue";
	import OperationLog from "../operation-record.vue"
  import taizhangApi from "@/api/taizhang-api";
	import pangzhanApi from "@/api/pangzhan-api";
  import MIXIN_ROLE from "@/mixin/ROLE";
  import math from "_u/math.js";
  export default {
    name: "tables_page",
    mixins: [MIXIN_ROLE],
    components: {
      Tables,
      Edit,
      Detail,
			OperationLog
      // modalExport,
			// OperationLog
    },
    data() {
      return {
        columns: [
          { title: "编号", key: "id" },
          { title: "进程日期", key: "enterDate" },
					{ title: "生产厂家", key: "manufacturer" },
					{ title: "规格", key: "specifications" },
          {
            title: "操作",
            key: "handle",
            render: (h, params) => {
              return h("div", [
                h(
                  "Button",
                  {
                    props: {
                      type: "success",
                      size: "small",
											disabled: !this.isAccessForButton("0032"),
                    },
                    on: {
                      click: e => {
                        console.log(params.row);
                        this.getDetail(params.row.id);
                      }
                    },
										style: {
											marginRight: "5px"
										}
                  },
                  "查看"
                ),
                h(
                  "Button",
                  {
                    props: {
                      type: "warning",
                      size: "small",
											disabled: !this.isAccessForButton("0033"),
                    },
                    on: {
                      click: e => {
                        this.getDetai(this.tableData[params.index].id, () => {
                          this.editModal.show = true;
                        });
                      }
                    },
                    style: {
                      marginRight: "5px"
                    }
                  },
                  "修改"
                ),
              ]);
            }
          }
        ],

        tableData: [],
        addModal: {
          show: false
        },
        editModal: {
          show: false
        },
        detailModal: {
          show: false
        },
        timeToSubmit: false,
        formItem: {
          actualDeepImg: []
        },
        total: 0,
        pageSize: 10,
        pageIndex: 1,
        modal_export: {
          show: false,
          roleData: {}
        },
				isOperationLogShow: false,
				operationLogList:[],
				obj:{
					
				}
      };
    },
    computed: {
    },
    methods: {
      exportExcel() {
        this.$refs.tables.exportCsv({
          filename: `table-${new Date().valueOf()}.csv`
        });
      },
      addModalShow() {
        this.addModal.show = true;
      },
      addModalClose() {
        console.log("handleModalClose");
        this.addModal.show = false;
        this.getList();
      },
      editModalClose() {
        console.log("editModalClose");
        this.editModal.show = false;
        this.getList();
      },
      getDetail(id, okfn) {
        taizhangApi.getDetail({ id, type: "0001" })
          .then(data => {
           this.formItem = data
					 this.detailModal.show = true
          })
      },
      getList() {
				if(!this.PROJECT || !this.PROJECT.id){
					return;
				}
				let data = { 
					type: "0001",
					projectId: this.PROJECT.id, 
					pageIndex:(this.pageIndex - 1)*this.pageSize,
					pageSize:this.pageSize ,
					}
        taizhangApi.getTZList(data).then(data => {
          console.log(data);
          this.tableData = data.list;
          this.total = data.total;
        });
      },
			buildingChange (){},
      pageChange(pageIndex) {
        console.log(pageIndex);
        this.pageIndex = pageIndex;
        this.getList();
      },
      pageSizeChange(pageSize) {
        console.log(pageSize);
        this.pageSize = parseInt(pageSize);
        this.getList();
      },
      getOperationLogList(id){
				pangzhanApi
					.getOperationLogListByIdType({
						pangzhanId: id,
						type: "0003"
					})
					.then(data => {
						this.operationLogList = data;
					})
					.catch(() => {
					});
			},
    },
    mounted() { }
  };
</script>

<style>
  .small-with {
    width: 80px;
  }
</style>
