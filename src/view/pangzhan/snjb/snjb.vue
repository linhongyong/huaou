<template>
  <div class="">
		
    <Card>
			<div style="padding: 10px;">
			<!-- 	<Input v-model="wordRange" placeholder="输入桩号范围(如:1,2,3 或 1-3)" style="width: 300px" />
				<Button type="primary" @click="showExportWord" style="margin-left: 10px;">批量导出Word</Button> -->
				<!-- <form class="" :action="'https://www.therethey.com//pangzhan//exportWords'" method="post" style="display: inline-block;">
					<input placeholder="输入桩号范围(如:1,2,3 或 1-3)" style="width: 300px" name="ranges"/>
					<input name="type" type="text" value="0002" hidden/>
					<input name="projectId" type="text" :value="projectId" hidden />
					<input name="buildingId" type="text" :value="buildingId" hidden />
					<input class="btn" type="submit" value="导出wosrd" style=""/>
				</form> -->
			</div>
      <Table width="100%" border :columns="columns2" :data="snjbList"></Table>
      <div style="padding: 18px 10px 40px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <!--<Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true"></Button>-->
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
    <Modal v-model="detailModal.show" title="水泥旁站详情" ok-text="确认" :footer-hide="true" width="60%" :scrollable="true">
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
      snjbList: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0,
			isOperationLogShow: false,
			operationLogList:[],
			obj:{
				
			}
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
			let data = { 
				projectId: this.PROJECT.id, 
				buildingId: this.BUILDING.id,
				pageIndex:(this.pageIndex - 1)*this.pageSize,
				pageSize:this.pageSize ,
				}
      snjbApi.getListByCondition(data).then(data => {
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
