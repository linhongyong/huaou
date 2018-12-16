<template>
  <div>
		<Card>
			<div style="padding: 5px 0 0px 0;">
				<div class="display-flex-center-between">
						<div>
								送检日期：<DatePicker type="daterange" @on-change="okInspectionDateRange" placement="bottom-start" confirm placeholder="不限" style="width: 200px"></DatePicker>
						</div>
						<div>
								使用部位：<Input   style="width: 200px" @on-change="okusePart" placeholder="不限" v-model="searchObj.usePart"></Input>
						</div>
						<div>
								检测结果：<Input   style="width: 200px" @on-change="okResult" placeholder="不限" v-model="searchObj.testResult"></Input>
						</div>
				</div>
			</div>
		</Card>
    <Card>
			<div id="myElementId" style="width: 100%;" v-if="tableData.length">
				<div>
					<div style="text-align: center;font-size: larger;">砼试块见证取样台账</div>
					<div class="display-flex-center-between" style="padding: 5px;">
						<div>工程名称： {{ PROJECT.projectName }}</div>
						<div>见证人： {{ tableData.length ? tableData[0].createrName : "" }}</div>
					</div>
				</div>
				<table  class=""  border="1" rules="all">
					<tr class="">
						<td class="">编号</td>
						<td class="" width="100">设计强度等级</td>
						<td class="" width="200">生产厂家</td>
						<td class="" width="80">数量</td>
						<td class="" width="100">龄期（天）</td>
						<td class="" width="100">制作日期</td>
						<td class="" width="100">送检日期</td>
						<td class="" width="200">使用部位</td>
						<td class="" width="150">检测报告编号</td>
						<td class="" width="100">抗压强度</td>
						<td class="" width="100">设计强度</td>
						<td class="" width="100">检测结果</td>
					</tr>
					<tr v-for="(item, index) in tableData"  :key="index">
						<td class="">{{ (pageIndex-1)*pageSize + index+1 }}</td>
						<td class="">{{ item.strengthGrade }}</td>
						<!-- <td class=""><DateTimeToDate :timedate="item.enterDate"></DateTimeToDate></td> -->
						<td class="">{{ item.manufacturer }}</td>
						<td class="">{{ item.amount }}</td>
						<td class="">{{ item.age }}</td>
						<td class=""><DateTimeToDate :timedate="item.manufactureDate"></DateTimeToDate></td>
						<td class=""><DateTimeToDate :timedate="item.inspectionDate"></DateTimeToDate></td>
						<td class="">{{ item.usePart }}</td>
						<td class="">{{ item.testReportNo }}</td>
						<td class="">{{ item.compressiveStrength }}</td>
						<td class="">{{ item.designStrength }}</td>
						<td class="">{{ item.testResult }}</td>
						
					</tr>
				</table>
			</div>
			<div style="padding: 5px 10px; text-align: center;" v-else>暂无相关记录</div>
			<!-- <div style="width: 60%;">
				<Table border :columns="columns" :data="tableData" size="small"></Table>
			</div> -->
      
      <div class="display-flex-center-between" style="padding: 18px 10px 0px;">
      	<Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
				<button class="btn" style="margin-left: 10px;"  @click="printTable">打印</button>
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
	
	import jQuery from "jquery"
	import {jQueryPrint} from '@/libs/jQuery.print'
	jQueryPrint(jQuery);
	import DateTimeToDate from "../../components/datetime-to-date/datetime-to-date.vue"
  export default {
    name: "tables_page",
    mixins: [MIXIN_ROLE],
    components: {
      Tables,
      Edit,
      Detail,
			OperationLog,
			DateTimeToDate
      // modalExport,
			// OperationLog
    },
    data() {
      return {
        columns: [
          { title: "编号", key: "id", width: 50 },
          { title: "进场日期", key: "enterDate", width: 80,
						render: (h, params) => {
							return h("span", (() => {
								return this.cutTime(params.row.enterDate)
							})())
						}
					},
					{ title: "生产厂家", key: "manufacturer" },
					{ title: "规格", key: "specifications" },
					{ title: "牌号", key: "steelGrade" },
					{ title: "数量（T）", key: "amount", width: 70 },
					{ title: "炉批号", key: "heatNo" },
				 { title: "出厂日期", key: "manufactureDate", width: 80,
					 	render: (h, params) => {
					 		return h("span", (() => {
					 			return this.cutTime(params.row.manufactureDate)
					 		})())
					 	}
					},
					{ title: "送检日期", key: "inspectionDate",
						render: (h, params) => {
							return h("span", (() => {
								return this.cutTime(params.row.inspectionDate)
							})())
						} 
					},
					{ title: "使用部位", key: "usePart" },
					{ title: "检测报告编号", key: "testReportNo" },
					{ title: "检测结果", key: "testResult", width: 60 },
//           {
//             title: "操作",
//             key: "handle",
//             render: (h, params) => {
              // return h("div", [
//                 h(
//                   "Button",
//                   {
//                     props: {
//                       type: "success",
//                       size: "small",
// 											disabled: !this.isAccessForButton("0032"),
//                     },
//                     on: {
//                       click: e => {
//                         console.log(params.row);
//                         this.getDetail(params.row.id);
//                       }
//                     },
// 										style: {
// 											marginRight: "5px"
// 										}
//                   },
//                   "查看"
//                 ),
//                 h(
//                   "Button",
//                   {
//                     props: {
//                       type: "warning",
//                       size: "small",
// 											disabled: !this.isAccessForButton("0033"),
//                     },
//                     on: {
//                       click: e => {
//                         this.getDetai(this.tableData[params.index].id, () => {
//                           this.editModal.show = true;
//                         });
//                       }
//                     },
//                     style: {
//                       marginRight: "5px"
//                     }
//                   },
//                   "修改"
//                 ),
//               ]);
//             }
          // }
        ],
				searchObj:{
					enterDate:null,
					inspectionDate:null,
					usePart:null
				},
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
			printTable: function(){
// 				let originList = this.columns.slice(0)
// 				this.columns = this.columns.slice(1,this.columns.length-2)
// 				console.log(this.columns)
// 				let that = this;
// 				setTimeout(function(){
// 					jQuery("#myElementId").print();
// 					that.columns = originList
// 					console.log(that.columns)
// 				},2000)
				
				jQuery("#myElementId").print();
				
			},
			cutTime(str){
				let date;
				if(str){
					date = str.split(" ")[0];
				}else{
					date = str
				}
				return date
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
      getDetail(id, okfn) {
        taizhangApi.getDetail({ id, type: "0003" })
          .then(data => {
           this.formItem = data
					 this.detailModal.show = true
          })
      },
      getList() {
				if(!this.PROJECT || !this.PROJECT.id){
					return;
				}
				this.searchObj.type = "0003";
				this.searchObj.projectId = this.PROJECT.id;
				this.searchObj.pageNum = this.pageIndex;
				this.searchObj.pageSize = this.pageSize;
// 				let data = { 
// 					type: "0001",
// 					projectId: this.PROJECT.id, 
// 					pageNum: this.pageIndex,
// 					pageSize: this.pageSize ,
// 					}
        taizhangApi.getTZList(this.searchObj).then(data => {
          console.log(data);
          this.tableData = data.list;
          this.total = data.total;
        });
      },
			buildingChange (){},
			okEnterDateRange(e){
				console.log(e)
				this.searchObj.enterDateStart = e[0]
				this.searchObj.enterDateEnd = e[1]
				this.getList();
			},
			okInspectionDateRange(e){
				// this.searchObj.inspectionDate = e;
				this.searchObj.inspectionDateStart = e[0]
				this.searchObj.inspectionDateEnd = e[1]
				this.getList();
			},
			okusePart(e){
				// this.searchObj.usePart = e.data;
				this.getList();
			},
			okResult(e){
				// this.searchObj.testResult = e.data;
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
    },
    mounted() { }
  };
</script>

<style>
	.ivu-table-cell{
		padding-left: 5px;
		padding-right: 5px;
		/* text-align: center; */
	}
  .small-with {
    width: 80px;
  }
	.flex{
	display: flex;
	}
	.flex-6{
	flex: 6;
	}
	.flex-3{
	flex: 3;
	}
	.flex-1{
		flex: 1;
	}
	.row{
	overflow: hidden;
	}
	.float-l{
	float: left;
	}
	.padding-v-5{
		padding-top: 5px;
		padding-bottom: 5px;;
	}
	.padding-left-40{
		padding-left: 40px;;
	}
	.btns{
		float: right;
	}
	.btn{
		background-color: #1890FF;
		outline: none;
		border: none;
		padding: 5px;
		color: white;
	}
	
	table td{
		padding: 2px 5px;
	}
</style>
