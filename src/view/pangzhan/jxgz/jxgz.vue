<template>
  <div>
    <Card>
      <Table width="100%" border :columns="columns" :data="tableData"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <!--<Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true"></Button>-->
      </div>
    </Card>
    <!--<Modal v-model="addModal.show" title="新增旁站灌注" ok-text="提交" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Add  @addModalClose="addModalClose"></Add>

      </div>
    </Modal>-->
    <Modal v-model="editModal.show" title="修改旁站灌注" ok-text="提交" :footer-hide="true" width="60%" :scrollable="true"  :styles="{top:'0px'}">
      <div id="" style="width:80%, margin:0 auto">
        <Edit  @editModalClose="editModalClose" :obj="formItem"></Edit>
      </div>
    </Modal>
    <Modal v-model="detailModal.show" title="旁站灌注详情" ok-text="确认" :footer-hide="true" width="60%" :scrollable="true" :styles="{top:'0px'}">
      <div id="">
        <Detail  :obj="formItem"></Detail>
      </div>
    </Modal>
  </div>
</template>

<script>
import Tables from "_c/tables";
//import Add from './add.vue'
import Edit from "./edit.vue";
import Detail from "./detail.vue";
//import expandRow from './table-expand.vue'

import jxgzApi from "@/api/jxgz-api";
export default {
  name: "tables_page",
  components: {
    Tables,
    Edit,
    Detail
  },
  data() {
    return {
      columns: [
        //      {
        //        type: 'expand',
        //        searchable: false,
        //        key: 'expand',
        //        width: 50,
        //        render: (h, params) => {
        //          return h(expandRow, {
        //            props: {
        //              row: params.row
        //            }
        //          })
        //        }
        //      },
        { title: "天气", key: "weather" },
        { title: "施工单位", key: "buildCompany" },
        { title: "楼栋号", key: "building" },
        { title: "桩号", key: "pile" },
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
        {title: '站旁监理人员id', key: 'superId'}, */
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

                      this.getDetai(this.tableData[params.index], () => {
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
                      this.getDetai(this.tableData[params.index], () => {
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
                      //                  roleApi.deleteRole({id:this.roleList[params.index].id}, () => {
                      //                      this.roleList.splice(params.index, 1)
                      //                      this.$Message.success("删除成功！");
                      //                      this.total = this.total - 1
                      //                  })
                      jxgzApi
                        .deleteJxZkGzzPzjl(this.tableData[params.index].id)
                        .then(res => {
                          this.tableData.splice(params.index, 1);
                          this.$Message.success("删除成功！");
                          //                      this.total = this.total - 1
                          //                    console.log(res)
                          //                    if (res.data.code === 'Success') {
                          //                      that.tableData = this.tableData.filter((item, index) => index !== params.row.initRowIndex)
                          //                    }
                        });
                      //                  console.warn(params.index);
                      //                  jxgzApi.deleteRole({id:this.roleList[params.index].id}, () => {
                      //                    this.roleList.splice(params.index, 1)
                      //                    this.$Message.success("删除成功！");
                      //                    this.total = this.total - 1
                      //                  })
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
      pageIndex: 1
    };
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
    getDetai(obj, okfn) {
      let tempobj = {
        projectId: 35,
        buildingNum: obj.building,
        pileNum: obj.pile
      };
      jxgzApi.getJxgzByCondition(tempobj).then(res => {
        console.log(
          "--------------------------------------------------------------"
        );
        console.log(res.data);
        if (res.data.result.actualDeepImg === "") {
          res.data.result.actualDeepImg = [];
        } else {
          res.data.result.actualDeepImg = JSON.parse(
            res.data.result.actualDeepImg
          );
        }
        if (res.data.result.barCageCountImg === "") {
          res.data.result.barCageCountImg = [];
        } else {
          res.data.result.barCageCountImg = JSON.parse(
            res.data.result.barCageCountImg
          );
        }
        this.formItem = res.data.result;
        //                    this.formItem.barCageCountImg = imgs2 && imgs2.length ? imgs2 : []

        okfn && okfn();
      });
    },
    getJxgzs() {
      //    jxgzApi.getJxZkGzzPzjlList({pageIndex: this.pageSize*(this.pageIndex - 1)+1, pageSize: this.pageSize, data:35}).then(res => {
      jxgzApi.getJxZkGzzPzjlList({ data: 35 }).then(res => {
        console.log(res);
        this.tableData = res.data.result;
        this.total = res.result.total;
      });
    },
    pageChange(pageIndex) {
      console.log(pageIndex);
      this.pageIndex = pageIndex;
      this.getJxgzs();
    },
    pageSizeChange(pageSize) {
      console.log(pageSize);
      this.pageSize = parseInt(pageSize);
      this.getJxgzs();
    }
  },
  mounted() {
    this.getJxgzs();
  }
};
</script>

<style>
</style>
