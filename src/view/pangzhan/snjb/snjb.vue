<template>
  <div class="">
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
      <Table width="100%" border :columns="columns2" :data="snjbList"></Table>
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
				<Button type="primary" @click="batchExportImages">{{'导出'+BUILDING.buildingName+'水泥搅拌桩旁站相关图片'}}</Button>
			</div>
		</Card>
    <Modal v-model="editModal.show" title="修改水泥旁站" :footer-hide="true" width="60%"  :scrollable="true">
      <div id="" style="width:80%, margin:0 auto">
        <Edit :obj="detail"  @editModalClose="editModalClose"></Edit>
      </div>
    </Modal>
    <Modal v-model="addModal.show" title="添加模板" :footer-hide="true" width="60%"  :scrollable="true">
      <div id="" style="width:80%, margin:0 auto">
        <Add @addModalClose="addModalClose"></Add>
      </div>
    </Modal>
    <Modal v-model="detailModal.show" title="水泥旁站详情" ok-text="确认" :footer-hide="true" width="60%" :scrollable="true" :styles="{top:'0px'}">
      <div id="">
        <Detail  :obj="detail"></Detail>
      </div>
    </Modal>
		<OperationLog v-model="isOperationLogShow" :operationLogList="operationLogList" :obj="obj"></OperationLog>
  </div>
</template>
<script>
import Tables from "_c/tables";
import Edit from "./snjb-edit.vue";
import Add from "./snjb-add.vue";
import Detail from "./snjb-detail.vue";
import snjbApi from "@/api/snjb-api";
import MIXIN_ROLE from "@/mixin/ROLE";
import pangzhanApi from "@/api/pangzhan-api";
import OperationLog from "../operation-record.vue"
export default {
  mixins: [MIXIN_ROLE], // 引入mixin之后，即可通过this.ROLE获取到权限信息
  components: {
    Tables,
    Edit,
    Add,
    Detail,
		OperationLog
  },
  data() {
    return {
      editModal: {
        show: false
      },
      addModal: {
        show: false
      },
      detailModal:{
        show: false
      },
      detail: {},
      columns2: [
//      { title: "模板名称", key: "templateName" },
        { title: "桩号", key: "pileStartNum" },
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
          key: "action",
          //  fixed: 'right',
          //  width: 120,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small",
										disabled: !this.isAccessForButton("0008"),
                  },
                  on: {
                    click: e => {
											if(params.row.status != 3 && params.row.status != 5){//未完成的旁站
												if(this.isAccessForButton("39")){
													this.$Message.error("未完成旁站，暂不允许查看");
													return;
												}
											}
                      this.getDetail(this.snjbList[params.index], () => {
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
										disabled: !this.isAccessForButton("0007"),
                  },
                  on: {
                    click: e => {
                      this.getDetail(this.snjbList[params.index], () => {
                        this.editModal.show = true;
                      });
//                    this.editModal.show = true;
//                    this.detail = this.snjbList[params.index];
//                    console.log(this.detail);
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
                    title: "你确定要删除吗?"
                  },
                  on: {
                    "on-ok": () => {
                      console.warn(params.index);
                      snjbApi.deleteSnjb(
                        { id: this.snjbList[params.index].id },
                        () => {
                          this.snjbList.splice(params.index, 1);
                          this.$Message.success("删除成功！");
                          this.total = this.total - 1;
                        }
                      );
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
												disabled: !this.isAccessForButton("0009"),
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
										disabled: !this.isAccessForButton("0030"),
									},
									on: {
										click: e => {
											console.log(params.row);
											this.obj = Object.assign({}, this.obj, params.row) 
											this.obj.pileCode = params.row.pileStartNum//兼容水泥
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
      snjbList: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0,
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
				type: "0002",
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
    addModalClose() {
      this.addModal.show = false;
      this.getList();
    },
    editModalClose() {
      this.editModal.show = false;
      this.getList();
    },
    detailModalClose() {
      this.detailModal.show = false;
      this.getList();
    },
    getDetail(obj, okfn) {
//    let tempobj = {
//      projectId: this.ROLE.projectId,
//      pileNum: obj.pile
//    };
      snjbApi.getSnjbById({id: obj.id, okfn}, data =>{
        console.log("--------------------------------------------------------------");
        if (!data.result.tryDataUrl) {
          data.result.tryDataUrl = [];
        } else {
          data.result.tryDataUrl = JSON.parse(
            data.result.tryDataUrl
          );
        }
        this.detail = data.result;
        okfn && okfn();
        //                    this.formItem.barCageCountImg = imgs2 && imgs2.length ? imgs2 : []
      })
    },
    // 获取列表的方法名统一改为getList，为了在选择工程的时候 刷新页面
    getList() {
// 			let data = { 
// 				projectId: this.PROJECT.id, 
// 				buildingId: this.BUILDING.id,
// 				pageIndex:(this.pageIndex - 1)*this.pageSize,
// 				pageSize:this.pageSize ,
// 				}
//       snjbApi.getListByCondition(data).then(data => {
//         console.log(data);
//         this.snjbList = data.list;
//         this.total = data.total;
//       });
				let data = { 
					projectId: this.PROJECT.id, 
					buildingId: this.BUILDING.id,
					type:"0002",
					statusList: this.statusList,
					pileCode: this.pileCode,
					pageNum:this.pageIndex,
					pageSize:this.pageSize ,
					}
					pangzhanApi.getListByCondition(data).then(data => {
						console.log(data);
						this.snjbList = data.list;
						this.total = data.total;
					});
    },
    buildingChange() {
      this.getList();
    },
		getOperationLogList(id){
			pangzhanApi
				.getOperationLogListByIdType({
					pangzhanId: id,
					type: "0002"
				})
				.then(data => {
					this.operationLogList = data;
				})
				.catch(() => {
				});
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
    }
  },
  mounted() {

  }
};
</script>
<style>
.float-l {
  float: left;
}
</style>
