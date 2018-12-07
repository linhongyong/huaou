<template>
  <div>
    <Card>
			<div style="padding: 10px;">
			<!-- 	<Input v-model="wordRange" placeholder="输入桩号范围(如:1,2,3 或 1-3)" style="width: 300px" />
				<Button type="primary" @click="showExportWord" style="margin-left: 10px;">批量导出Word</Button> -->
				<form class="" :action="'https://www.therethey.com//pangzhan//exportWords'" method="post" style="display: inline-block;">
					<input placeholder="输入桩号范围(如:1,2,3 或 1-3)" style="width: 300px; padding: 3px 5px;" name="ranges"/>
					<input name="type" type="text" value="0001" hidden/>
					<input name="projectId" type="text" :value="projectId" hidden />
					<input name="buildingId" type="text" :value="buildingId" hidden />
					<input style="margin-left: 20px;" class="btn" type="submit" value="批量导出word"/>
				</form>
			</div>
      <Table width="100%" border :columns="columns" :data="tableData"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex" />
        <div>
					<span style="padding-right: 20px;">{{word}} m³</span>
					<Button type="primary" @click="showExportModal">导出Excel</Button>
				</div>
      </div>
    </Card>
    <!--<Modal v-model="addModal.show" title="新增旁站灌注" ok-text="提交" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Add  @addModalClose="addModalClose"></Add>
      </div>
    </Modal>-->
    <Modal v-model="editModal.show" title="修改机械灌注旁站" ok-text="提交" :footer-hide="true" width="60%" :scrollable="true" :styles="{top:'0px'}">
      <div id="" style="width:80%, margin:0 auto">
        <Edit @editModalClose="editModalClose" :obj="formItem"></Edit>
      </div>
    </Modal>
    <Modal v-model="detailModal.show" title="机械灌注旁站详情" ok-text="确认" :footer-hide="true" width="60%" :scrollable="true" :styles="{top:'0px'}">
      <div id="">
        <Detail :obj="formItem"></Detail>
      </div>
    </Modal>
    <modalExport v-model="modal_export.show" :roleData="this.modal_export.roleData"></modalExport>
		<OperationLog v-model="isOperationLogShow" :operationLogList="operationLogList" :obj="obj"></OperationLog>
  </div>
</template>

<script>
  import Tables from "_c/tables";

  //import Add from './add.vue'
  import Edit from "./edit.vue";
  import Detail from "./detail.vue";
  import modalExport from "./modal-export";
	import OperationLog from "../operation-record.vue"
  //import expandRow from './table-expand.vue'
  import jxgzApi from "@/api/jxgz-api";
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
      modalExport,
			OperationLog
    },
    data() {
      return {
				wordRange: null,//批量导出的桩号范围
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
									str = "已开始"
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
											disabled: !this.isAccessForButton("0001"),
                    },
                    on: {
                      click: e => {
												if(params.row.status != 3 && params.row.status != 5){//未完成的旁站
													if(this.isAccessForButton("39")){
														this.$Message.error("未完成旁站，暂不允许查看");
														return;
													}
												}
                        console.log(this.tableData[params.index]);
                        this.getDetai(this.tableData[params.index].id, () => {
                          this.detailModal.show = true;
                        });
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
											disabled: !this.isAccessForButton("0002"),
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
                        jxgzApi.deleteJxZkGzzPzjl(this.tableData[params.index].id).then(res => {
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
													disabled: !this.isAccessForButton("0003"),

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
											disabled: !this.isAccessForButton("0029"),
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
				obj:{
					
				}
      };
    },
    computed: {
      word() {
        return `${this.PROJECT.projectName}项目${this.BUILDING.buildingName}楼砼实灌总方量：${this.SoilVolume}`;
      },
			projectId(){
				return this.PROJECT.id
			},
			buildingId(){
				return this.BUILDING.id
			}
    },
    methods: {
      exportExcel() {
        this.$refs.tables.exportCsv({
          filename: `table-${new Date().valueOf()}.csv`
        });
      },
			showExportWord(){
				console.log(this.wordRange);
				let data={
					type:"0001",
					ranges: this.wordRange,
					projectId: this.PROJECT.id, 
					buildingId: this.BUILDING.id,
				}
				pangzhanApi.exportWords(data)
				.then(data => {
					console.log(data)
				})
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
      getDetai(id, okfn) {
        jxgzApi.getDetailById({ id })
          .then(data => {

            if (!data.actualDeepImg) {
              data.actualDeepImg = [];
            } else {
              data.actualDeepImg = JSON.parse(data.actualDeepImg);
            }
            if (!data.barCageCountImg) {
              data.barCageCountImg = [];
            } else {
              data.barCageCountImg = JSON.parse(data.barCageCountImg);
            }
            if (!data.deptRockUrl) {
              data.deptRockUrl = [];
            } else {
              data.deptRockUrl = JSON.parse(data.deptRockUrl);
            }
            this.formItem = Object.assign({}, this.formItem, data);
            // this.formItem.mainBarNum = data.mainBar && data.mainBar.split("φ")[0]
            // this.formItem.mainBarType = data.mainBar && data.mainBar.split("φ")[1]
            this.formItem.fillingCoefficient = math.accDiv(data.actualVolume, data.theoryVolume, 2)

            console.log(this.formItem);
            okfn && okfn()
          })
      },
      getList() {
				console.log('getList---')
				if(!this.PROJECT || !this.PROJECT.id || !this.BUILDING || !this.BUILDING.id){
					return;
				}
				let data = { 
					projectId: this.PROJECT.id, 
					buildingNum: this.BUILDING.id,
					pageIndex:(this.pageIndex - 1)*this.pageSize,
					pageSize:this.pageSize ,
					}
        jxgzApi.getListByCondition(data).then(data => {
          console.log(data);
          this.tableData = data.list;
          this.total = data.total;
        });
      },
      buildingChange() {
				console.log("buildingChange")
        this.getSoilVolume();
        this.getList();
      },
      pageChange(pageIndex) {
        console.log(pageIndex,"---");
        this.pageIndex = pageIndex;
        this.getList();
      },
      pageSizeChange(pageSize) {
        console.log(pageSize,"---");
        this.pageSize = parseInt(pageSize);
        this.getList();
      },
      getSoilVolume() {
				if(!this.PROJECT || !this.PROJECT.id || !this.BUILDING || !this.BUILDING.id){
					return;
				}
				// console.log(this.PROJECT);console.log(this.BUILDING);
        jxgzApi
          .getSoilVolume({
            projectId: Number(this.PROJECT.id),
            buildingId: this.BUILDING.id
          })
          .then(data => {
            this.SoilVolume = data || 0;
          })
          .catch(() => {
            this.$Message.error("获得水泥总数失败");
          });
      },
      getOperationLogList(id){
				pangzhanApi
					.getOperationLogListByIdType({
						pangzhanId: id,
						type: "0001"
					})
					.then(data => {
						this.operationLogList = data;
					})
					.catch(() => {
					});
			},
			showExportModal() {
        this.modal_export.show = true;
        // this.modal_export.roleData = deepCopy(this.ROLE);
				this.modal_export.roleData = this.$store.state.user.project
      }
    },
    mounted() { }
  };
</script>

<style>
  .small-with {
    width: 80px;
  }
</style>
