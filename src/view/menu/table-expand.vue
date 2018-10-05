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
                      console.log("update");
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
                      console.log("delete confirm");
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
      ]
    };
  },
  created() {
    this.menuList = [
      {
        createTime: 1538540226000,
        icon: "",
        id: 1,
        menuName: "子菜单1",
        modifyTime: null,
        orderNum: null,
        parentId: 0,
        perms: "test",
        type: "0",
        url: "/test"
      },
      {
        createTime: 1538540226000,
        icon: "",
        id: 1,
        menuName: "子菜单2",
        modifyTime: null,
        orderNum: null,
        parentId: 0,
        perms: "test",
        type: "0",
        url: "/test"
      }
    ];
  },

  methods: {}
};
</script>
<style scoped>
</style>