<template>
  <div>
    <Card>
      <Table width="100%" border :columns="columns2" :data="menuList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex" />
        <Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true"></Button>
      </div>
    </Card>
    <Modal v-model="editModal.show" title="修改菜单信息" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Edit :obj="menu" @editModalClose="editModalClose"></Edit>
      </div>
    </Modal>
    <Modal v-model="addModal.show" title="添加菜单" :footer-hide="true" width="60%" >
      <div id="" style="width:80%, margin:0 auto">
        <Add @addModalClose="addModalClose" :parentMenus="menu"></Add>
      </div>
    </Modal>
  </div>
</template>
<script>
import Tables from "_c/tables";
import Edit from "./menu-edit.vue";
import Add from "./menu-add.vue";
import menuApi from "@/api/menu-api";
import tableExpand from "./table-expand";

export default {
  components: {
    Tables,
    Edit,
    Add,
    tableExpand
  },
  data() {
    return {
      editModal: {
        show: false
      },
      addModal: {
        show: false,
        data: {}
      },
      menu: {},
      columns2: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(tableExpand, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "菜单名称",
          key: "menuName"
        },
        {
          title: "权限标识",
          key: "perms"
          //  width: 100,
          //  fixed: 'left'
        },
        {
          title: "资源url",
          key: "url"
          //  width: 100,
          //  fixed: 'left'
        },
        {
          title: "类型 0菜单 /1按钮",
          key: "type"
          //  width: 100,
          //  fixed: 'left'
        },
        {
          title: "排序",
          key: "orderNum"
          //  width: 100,
          //  fixed: 'left'
        },
        {
          title: "Action",
          key: "action",
          //  fixed: 'right',
          width: 200,
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
                      this.editModal.show = true;
                      this.menu = this.menuList[params.index];
                    }
                  },
                  style: {
                    marginRight: "5px"
                  }
                },
                "修改"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  on: {
                    click: e => {
                      this.addModal.show = true;
                      this.menu = this.menuList[params.index];
                    }
                  },
                  style: {
                    marginRight: "5px"
                  }
                },
                "新增"
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
                      menuApi.deleteMenu(
                        { id: this.menuList[params.index].id },
                        () => {
                          this.menuList.splice(params.index, 1);
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
      menuList: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0
    };
  },
  methods: {
    addModalClose() {
      this.addModal.show = false;
      this.getMenus();
    },
    editModalClose() {
      this.editModal.show = false;
      this.getMenus();
    },
    getMenus() {
      menuApi.getMenus(
        {
          pageIndex: this.pageSize * (this.pageIndex - 1) + 1,
          pageSize: this.pageSize
        },
        data => {
          this.menuList = data.result;
          this.total = data.result.total;
        }
      );
    },
    pageChange(pageIndex) {
      this.pageIndex = pageIndex;
      this.getMenus();
    },
    pageSizeChange(pageSize) {
      this.pageSize = parseInt(pageSize);
      this.getMenus();
    }
  },
  mounted() {
    this.getMenus();
  }
};
</script>
<style>
.float-l {
  float: left;
}
</style>
