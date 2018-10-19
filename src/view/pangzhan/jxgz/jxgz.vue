<template>
  <div>
    <Card>
      <Table width="100%" border :columns="columns" :data="tableData"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <p>{{word}}</p>
        <Button type="primary" @click="modal_export.show = true">导出Excel</Button>
      </div>
    </Card>
    <!--<Modal v-model="addModal.show" title="新增旁站灌注" ok-text="提交" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Add  @addModalClose="addModalClose"></Add>

      </div>
    </Modal>-->
    <Modal v-model="editModal.show" title="修改机械灌注旁站" ok-text="提交" :footer-hide="true" width="60%" :scrollable="true"  :styles="{top:'0px'}">
      <div id="" style="width:80%, margin:0 auto">
        <Edit  @editModalClose="editModalClose" :obj="formItem"></Edit>
      </div>
    </Modal>
    <Modal v-model="detailModal.show" title="机械灌注旁站详情" ok-text="确认" :footer-hide="true" width="60%" :scrollable="true" :styles="{top:'0px'}">
      <div id="">
        <Detail  :obj="formItem"></Detail>
      </div>
    </Modal>
    <modalExport v-model="modal_export.show" :roleData="ROLE"></modalExport>
  </div>
</template>

<script>
import Tables from "_c/tables";

//import Add from './add.vue'
import Edit from "./edit.vue";
import Detail from "./detail.vue";
import modalExport from "./modal-export";
//import expandRow from './table-expand.vue'

import jxgzApi from "@/api/jxgz-api";
import MIXIN_ROLE from "@/mixin/ROLE";
export default {
  name: "tables_page",
  mixins: [MIXIN_ROLE],
  components: {
    Tables,
    Edit,
    Detail,
    modalExport
  },
  data() {
    return {
      columns: [
//      { title: "楼栋号", key: "pileCode" },
        { title: "桩号", key: "pileCode" },
        { title: "设计坍落度", key: "designSlump" },
        { title: "砼理论方量", key: "theoryVolume" },
        { title: "砼实灌方量", key: "actualVolume" },
        { title: "使用模板", key: "perfusionStartTime" },
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
                    size: "small"
                  },
                  on: {
                    click: e => {
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
                    size: "small"
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
                    title: "你确定要删除吗?"
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
        show: false
      },
      SoilVolume: 0
    };
  },
  computed: {
    word() {
      return `当前项目：${this.ROLE.projectName}，当前楼栋：${this.ROLE.buildingName}，当前水泥总量：${this.SoilVolume}`;
    }
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
      jxgzApi.getJxZkGzzPzjlList().then(res => {
        this.tableData = res.data.result.list;
      });
    },
    editModalClose() {
      console.log("editModalClose");
      this.editModal.show = false;
      jxgzApi.getJxZkGzzPzjlList().then(res => {
        this.tableData = res.data.result.list;
      });
    },
    getDetai(id, okfn) {
      jxgzApi.getDetailById({id}) 
      .then( data => {
        console.log(data);
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
        this.formItem.mainBarNum = data.mainBar && data.mainBar.split("φ")[0]
        this.formItem.mainBarType= data.mainBar && data.mainBar.split("φ")[1]
        this.formItem = data;
        okfn && okfn()
      })
//    jxgzApi.getJxgzByCondition(tempobj).then(res => {
//      console.log(res.data);

//      okfn && okfn();
//    });
    },
    getList() {
      jxgzApi.getListByCondition({ projectId: this.ROLE.projectId, buildingNum: this.ROLE.buildingId}).then(data => {
        console.log(data);
        this.tableData = data;
        this.total = data.length;
      });
    },
    buildingChange() {
      this.getSoilVolume();
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
    getSoilVolume() {
      jxgzApi
        .getSoilVolume({
          projectId: Number(this.ROLE.projectId),
          buildingId: this.ROLE.buildingId
        })
        .then(data => {
          this.SoilVolume = data || 0;
        })
        .catch(() => {
          this.$Message.error("获得水泥总数失败");
        });
    }
  },
  mounted() {}
};
</script>

<style>
.small-with {
  width: 80px;
}
</style>
