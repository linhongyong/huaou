<template>
  <div>
    <Table :columns="columns" :data="menuList"></Table>
  </div>
</template>
<script>
  import apiMenu from "@/api/menu-api";
  export default {
    props: {
      row: {
        type: Object,
        default: () => ({})
      },
      addButton: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        menuList: [],
        columns: [
          {
            title: "菜单名称",
            key: "menuName"
          },
          {
            title: "权限标识",
            key: "perms"
          },
          {
            title: "资源url",
            key: "url"
          },
          {
            title: "类型 0菜单 /1按钮",
            key: "type"
          },
          {
            title: "排序",
            key: "orderNum"
          },
          {
            title: "Action",
            key: "action",
            width: 180,
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
                        cthis.$emit('edit-menu', params.row)
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
                        this.$emit('add-menu', params.row)
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
                        this.$emit('delete-menu', params.row)
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
        menu: {},
      };
    },
    created() {
      this.menuList = this.row.childMenus;
    },
    methods: {

    }
  };
</script>
<style scoped>
</style>