<template>
  <Row>
    <i-col span="8">
      <Card>
        <Tree :data="menuList"></Tree>
      </Card>
    </i-col>

  </Row>
</template>

<script>
  import apiMenu from "@/api/menu-api"
  export default {
    name: 'menuManage',
    components: {

    },
    watch: {

    },
    data() {
      return {
        menuList: [],
        data1: [
          {
            title: 'parent 1',
            expand: true,
            children: [
              {
                title: 'parent 1-1',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-1-1'
                  },
                  {
                    title: 'leaf 1-1-2'
                  }
                ]
              },
              {
                title: 'parent 1-2',
                expand: true,
                children: [
                  {
                    title: 'leaf 1-2-1'
                  },
                  {
                    title: 'leaf 1-2-1'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    watch: {
      menuList(list) {
        list.map((item) => {
          if (item.childMenus.length > 0) {
            item.children = item.childMenus;
          }

          return item;
        })
      }
    },
    created() {
      this.getMenuList();
    },
    methods: {
      getMenuList() {
        apiMenu.getMenuList()
          .then((data) => {
            this.menuList = data.list;
          })
          .catch(() => {
            this.$Message.error('获取菜单列表失败')
          })
      },
    },

  }
</script>

