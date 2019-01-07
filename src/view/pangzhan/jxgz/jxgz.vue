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
				<Input class="" search enter-button="搜索桩机号" placeholder="不限" @on-search="searchByDrillModel"  style="width: 250px;margin-left: 20px;"/>
				<div class="" style="margin-left: 20px;">
					<span style="font-size: 12px;margin-right: 10px;">打印次数 :</span>	
					<Select v-model="currentPrintNum" style="width:200px" @on-change="selectOption2">
						<Option value="null">不限</Option>
						<Option value="0" >0次</Option>
						<Option value="1" >一次或多次</Option>
					</Select>
				</div>
			</div>
		</Card>
    <Card>
      <Table width="100%" border :columns="columns" :data="tableData"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex" />
        <div><span style="padding-right: 20px;">{{word}} m³</span></div>
      </div>
    </Card>
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
		<Card>
			<div class="display-flex-center" style="padding: 10px;">
				<div style="display: inline-block; margin-right: 50px;">
					<Input v-model="ranges" clearable :maxlength="200"  style="width: 300px;"  placeholder="输入桩号范围(如:1,2,3 或 1-3)">
						<Button type="primary" slot="append" @click="batchExportWords">批量导出word</Button>
					</Input>
				</div>
				<Button type="primary" @click="batchExportImages">{{'导出'+BUILDING.buildingName+'机械灌注桩旁站相关图片'}}</Button>
				<Button type="primary" @click="exportExcel" style="margin-left: 20px;">{{'导出'+BUILDING.buildingName+'旁站表格'}}</Button>
			</div>
		</Card>
		<OperationLog v-model="isOperationLogShow" :operationLogList="operationLogList" :obj="obj"></OperationLog>
  </div>
</template>

<script>
  import Tables from "_c/tables";

  import Edit from "./edit.vue";
  import Detail from "./detail.vue";
	import OperationLog from "../operation-record.vue"
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
			OperationLog
    },
    data() {
      return {
				wordRange: null,//批量导出的桩号范围
        columns: [
          { title: "桩号", width: 250,key: "pileCode" },
          { 
						title: "状态", 
						key: "status",
						width: 250,
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
						title: "打印次数", 
						key: "status",
						width: 250,
						render: (h, params) => {
							return h("div", (() => {
								// console.log(params);
								if(!params.row.printNum){
									return 0;
								}else{
									return params.row.printNum;
								}
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
											type: "success",
											size: "small",
										},
										on: {
											click: e => {
												
												const data = {
													id: params.row.id,
													type: "0001"
												};
												pangzhanApi.exportImagesForPZ(data);
											}
										},
										style: {
											marginRight: "5px"
										}
									},
									"导出图片"
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
				ranges:null,
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
				drillModel: null,	
				pileCode: null,
				printNum:null,
				currentPrintNum: "null",
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
			selectOption2(option){
				this.printNum = option;
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
			searchByDrillModel(value){
				if(value){
					this.drillModel = value;
					this.getList();	
				}else if(!value){
					this.drillModel = null;
					this.getList();	
				}else{
					this.$Message.error("桩机号不正确");
				}
			},
      exportExcel() {
        const data = {
        	projectId: this.projectId,
        	buildingId: this.buildingId,
        };
        pangzhanApi.exportExcelForJXGZPZ(data);
      },
			batchExportWords(){
				const data = {
					ranges: this.ranges,
					type: "0001",
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
            this.formItem.fillingCoefficientTemp = math.accDiv(data.actualVolume, data.theoryVolume, 2)
            console.log(this.formItem);
            okfn && okfn()
          })
      },
      getList() {
				if(!this.PROJECT || !this.PROJECT.id || !this.BUILDING || !this.BUILDING.id){
					return;
				}
				let data = { 
					projectId: this.PROJECT.id, 
					buildingId: this.BUILDING.id,
					type:"0001",
					statusList: this.statusList,
					drillModel: this.drillModel,	
					pileCode: this.pileCode,
					printNum:this.printNum ,
					pageNum:this.pageIndex,
					pageSize:this.pageSize ,
					}
					pangzhanApi.getListByCondition(data).then(data => {
						console.log(data);
						this.tableData = data.list;
						this.total = data.total;
					});
// 				let data = { 
// 					projectId: this.PROJECT.id, 
// 					buildingNum: this.BUILDING.id,
// 					pageNum:this.pageIndex,
// 					pageSize:this.pageSize ,
// 					}
//         jxgzApi.getListByCondition(data).then(data => {
//           console.log(data);
//           this.tableData = data.list;
//           this.total = data.total;
//         });
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
