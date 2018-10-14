<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="snjbList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
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
  </div>
</template>
<script>
import Tables from "_c/tables";
import Edit from "./snjb-edit.vue";
import Add from "./snjb-add.vue";
import Detail from "./snjb-detail.vue";
import snjbApi from "@/api/snjb-api";
import MIXIN_ROLE from "@/mixin/ROLE";

export default {
  mixins: [MIXIN_ROLE], // 引入mixin之后，即可通过this.ROLE获取到权限信息
  components: {
    Tables,
    Edit,
    Add,
    Detail
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
        { title: "成桩开始时间", key: "finishPileStartTime" },
        { title: "成桩结束时间", key: "finishPileEndTime" },
        { title: "日完成桩数", key: "dayFinishCount" },
        { title: "日完成量", key: "dayFinishVolume" },
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
                    size: "small"
                  },
                  on: {
                    click: e => {
                      this.getDetail(this.snjbList[params.index], () => {
                        this.detailModal.show = true;
                      });
//                    this.detailModal.show = true;
//                    this.detail = this.snjbList[params.index];
//                    console.log(this.detail);
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
                    size: "small"
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
                        size: "small"
                      }
                    },
                    "删除"
                  )
                ]
              )
            ]);
          }
        }
      ],
      snjbList: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0
    };
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
      console.log(this.ROLE);
      snjbApi.getSnjbListByProjectId(
        {
//        pageIndex: this.pageSize * (this.pageIndex - 1) + 1,
//        pageSize: this.pageSize,
          data: this.ROLE.projectId-0
        },
        data => {
          console.log(data);
          
          this.total = data.result.length;
          if (!data.result.tryDataUrl) {
            data.result.tryDataUrl = [];
          } else {
              data.result.tryDataUrl = JSON.parse(
              data.result.tryDataUrl
            );
          }

          this.snjbList = data.result;
        }
      );
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
