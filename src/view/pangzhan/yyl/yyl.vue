<template>
  <div>
		<Card>
			<div class="display-flex-center">
				<div class="" style="margin-right: 20px;">
					<span style="font-size: 12px;margin-right: 10px;">旁站状态 :</span>	
					<Select v-model="currentStatus" style="width:200px" @on-change="selectOption">
						<Option v-for="item in OptionList" :value="item.value" :key="item.value">{{ item.lable }}</Option>
					</Select>
				</div>
				<Input class="" search enter-button="搜索桩号" placeholder="不限" @on-search="searchByPileCode"  style="width: 200px;"/>
			</div>
		</Card>		
    <Card>
      <Table width="100%" border :columns="columns" :data="tableData"></Table>
			<div style="padding: 18px 10px 40px;text-align: right;clear: both;">
				<Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
				<!--<Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true"></Button>-->
			</div>
    </Card>
		<Card>
			<div class="display-flex-center" style="padding: 10px;">
				<div style="display: inline-block; margin-right: 50px;">
					<Input v-model="ranges" clearable :maxlength="200"  style="width: 300px;"  placeholder="输入桩号范围(如:1,2,3 或 1-3)">
						<Button type="primary" slot="append" @click="batchExportWords">批量导出word</Button>
					</Input>
				</div>
				<Button type="primary" @click="batchExportImages">{{'导出'+BUILDING.buildingName+'预应力管桩旁站相关图片'}}</Button>
			</div>
		</Card>
    <!--<Modal v-model="addModal.show" title="新增旁站灌注" ok-text="提交" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Add  @addModalClose="<addModalClose></addModalClose>"></Add>
      </div>
    </Modal>-->
    <Modal v-model="editModal.show" title="修改预应力管桩旁站" ok-text="提交" :footer-hide="true" width="60%" :scrollable="true" :styles="{top:'0px'}">
      <div id="" style="width:80%, margin:0 auto">
        <Edit @editModalClose="editModalClose" :obj="formItem"></Edit>
      </div>
    </Modal>
    <Modal v-model="detailModal.show" title="预应力管桩旁站详情" ok-text="确认" width="60%" :scrollable="true" :styles="{top:'0px'}">
      <div id="">
        <Detail :obj="formItem"></Detail>
      </div>
    </Modal>
    <!-- <modalExport v-model="modal_export.show" :roleData="this.modal_export.roleData"></modalExport> -->
		<OperationLog v-model="isOperationLogShow" :operationLogList="operationLogList" :obj="obj"></OperationLog>
  </div>
</template>

<script>
  import Tables from "_c/tables";

  //import Add from './add.vue'
  import Edit from "./edit.vue";
  import Detail from "./detail.vue";
  // import modalExport from "./modal-export";
	import OperationLog from "../operation-record.vue"
  //import expandRow from './table-expand.vue'
  import yylApi from "@/api/yyl-api";
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
          { title: "桩号", key: "pileCode" },
//           { title: "设计坍落度", key: "designSlump" },
//           { title: "砼理论方量", key: "theoryVolume" },
//           { title: "砼实灌方量", key: "actualVolume" },
          { 
						title: "状态", 
						key: "perfusionStartTime",
						render: (h, params) => {
							return h("div", (() => {
								// console.log(params);
								let str = "";
								if(params.row.status == 0){
									str = "未开始"
								}else if(params.row.status == 1){
									str = "进行中"
								}else if(params.row.status == 2){
									str = "待审核"
								}else if(params.row.status == 3){
									str = "已完成"
								}
								else if(params.row.status == 4){
									str = "待审核"
								}else if(params.row.status == 5){
									str = "已完成"
								}
								return str
							})())
						}
					},
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
												if(params.row.status != 3 && params.row.status != 5){//未完成的旁站
													if(this.isAccessForButton("39")){
														this.$Message.error("未完成旁站，暂不允许查看");
														return;
													}
												}
                        console.log(params.row);
                        // this.getDetailById(params.row.id);
												yylApi.getDetailById({ id:params.row.id })
													.then(data => {
													this.formItem = data
													this.detailModal.show = true
													})
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
												yylApi.getDetailById({ id:params.row.id })
													.then(data => {
													this.formItem = data
													this.editModal.show = true
													})
//                         this.getDetailById(this.tableData[params.index].id, () => {
//                           this.editModal.show = true;
//                         });
                      }
                    },
                    style: {
                      marginRight: "5px"
                    }
                  },
                  "修改"
                ),
                h(
                  "Poptip",
                  {
                    props: {
                      confirm: true,
                      title: "你确定要删除吗?",
                    },
                    on: {
                      "on-ok": () => {
                        console.log(params);
												let data = {
													id: params.row.id
												}
                        yylApi.deleteById(data).then(data => {
                          this.tableData.splice(params.index, 1);
                          this.$Message.success("删除成功！");
                        });
                      }	
                    }
                  },
                  [
                    h(
                      "Button",
                      {
                        props: {
                          type: "error",
                          size: "small",
													disabled: !this.isAccessForButton("0034"),

                        },
												style: {
													marginRight: "5px"
												}
                      },
                      "删除"
                    )
                  ]
                ),
								h(
									"Button",
									{
										props: {
											type: "success",
											size: "small",
											disabled: !this.isAccessForButton("0031"),
										},
										on: {
											click: e => {
												this.obj = Object.assign({}, this.obj, params.row) 
												this.getOperationLogList(this.obj.id);
												this.isOperationLogShow = true;
											}
										},
										style: {
											marginRight: "5px"
										}
									},
									"查看操作记录"
								),
              ]);
            }
          }
        ],
				ranges: null,
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
        SoilVolume: 0,
				isOperationLogShow: false,
				operationLogList:[],
				obj:{},
				statusList: [1,2,3,4,5],
				pileCode: null,
				currentStatus: 1,
				OptionList:[
					{lable:"不限", value:1},
					{lable:"进行中", value:2},
					{lable:"待审核", value:3},
					{lable:"已完成", value:4},
					{lable:"未开始", value:5},
				]
      };
    },
	computed: {
		projectId(){
			return this.PROJECT.id
		},
		buildingId(){
			return this.BUILDING.id
		}
	},
    methods: {
			selectOption(option){
				if(option == 1){//不限
					this.statusList = [1,2,3,4,5];
				}else if(option == 2){//进行中
					this.statusList = [1];
				}else if(option == 3){//待审核
					this.statusList = [2];
				}else if(option == 4){//已完成
					this.statusList = [3,5];
				}else if(option == 5){//未开始
					this.statusList = [0];
				}
				this.getList();
			},
			searchByPileCode(value){
				let pileCode = parseInt(value);
				if(pileCode >= 0 ){
					this.pileCode = pileCode;
					this.getList();	
				}else if(!value){
					this.pileCode = null;
					this.getList();	
				}else{
					this.$Message.error("桩号不正确");
				}
			},
			batchExportWords(){
				const data = {
					ranges: this.ranges,
					type: "0003",
					projectId: this.projectId,
					buildingId: this.buildingId,
				};
				pangzhanApi.exportWordsBatchPZ(data);
			},
			batchExportImages(){
				const data = {
					projectId: this.projectId,
					buildingId: this.buildingId,
				};
				pangzhanApi.exportImagesBatchPZ(data);
			},
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
      getDetailById(id, okfn) {
        yylApi.getDetailById({ id })
          .then(data => {
           this.formItem = data
					 this.detailModal.show = true
          })
      },
      getList() {
				if(!this.PROJECT || !this.PROJECT.id || !this.BUILDING || !this.BUILDING.id){
					return;
				}
// 				let data = { 
// 					projectId: this.PROJECT.id, 
// 					buildingId: this.BUILDING.id,
// 					pageIndex:(this.pageIndex - 1)*this.pageSize,
// 					pageSize:this.pageSize ,
// 					}
//         yylApi.getYylgzpzList(data).then(data => {
//           console.log(data);
//           this.tableData = data.list;
//           this.total = data.total;
//         });
				let data = { 
					projectId: this.PROJECT.id, 
					buildingId: this.BUILDING.id,
					type:"0003",
					statusList: this.statusList,
					pileCode: this.pileCode,
					pageNum:this.pageIndex,
					pageSize:this.pageSize ,
				}
				pangzhanApi.getListByCondition(data).then(data => {
					console.log(data);
					this.tableData = data.list;
					this.total = data.total;
				});
      },
      buildingChange() {
        this.getList();
      },
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
// 			showExportModal() {
//         this.modal_export.show = true;
//         this.modal_export.roleData = deepCopy(this.ROLE)
//       }
    },
    mounted() { }
  };
</script>

<style>
  .small-with {
    width: 80px;
  }
</style>
