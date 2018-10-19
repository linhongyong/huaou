<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="joinedList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/>
        <Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true"></Button>
      </div>
    </Card>
    <Modal v-model="editModal.show" title="修改工程信息" :footer-hide="true" width="60%" @on-cancel="onCancelEditModal">
      <div id="" style="width:80%, margin:0 auto">
        <Edit :obj="project"  @editModalClose="editModalClose"></Edit>
      </div>
    </Modal>
    <Modal v-model="addModal.show" title="创建工程" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Add @addModalClose="addModalClose"></Add>
      </div>
    </Modal>
    <Modal v-model="isPangzhanTmplSetShow" :title="'设置'+'旁站模板'" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <TmplSet @modalAction="onModalAction" :obj="obj" :buildList="buildList"></TmplSet>
      </div>
    </Modal>
    <Modal v-model="isProjectStaffsRoleSetShow" title="设置项目人员和角色" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <setRole @modalAction="onModalAction" :obj="obj"></setRole>
      </div>
    </Modal>
    <modalBuilding v-model="modal_building.show" :data="project"></modalBuilding>
  </div>
</template>

<script>
import Tables from "_c/tables";
import Edit from "./project-edit.vue";
import Add from "./project-add.vue";
import TmplSet from "./tmpl-set.vue";
import setRole from "./setProjectRole.vue";
import projectApi from "@/api/project-api";
import modalBuilding from "./modal-building";
import userApi from '@/api/user-api'
export default {
  components: {
    Tables,
    Edit,
    Add,
    TmplSet,
    setRole,
    modalBuilding
  },
  data() {
    return {
      isPangzhanTmplSetShow: false,
      isProjectStaffsRoleSetShow: false,
      obj: {},
      editModal: {
        show: false
      },
      addModal: {
        show: false
      },
      setModal: {
        show: false
      },
      setRoleModal: {
        show: false
      },
      modal_building: {
        show: false
      },
      project: {},
      hooks: {},
      roleTypeList: [],
      columns2: [
        {
          title: "工程名",
          key: "projectName"
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
                      this.project = params.row;
                      this.editModal.show = true;
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
                      this.obj = Object.assign({}, this.obj, this.joinedList[params.index]) 
                      this.getBuildList(this.obj.id);
                      this.isPangzhanTmplSetShow = true;
                    }
                  },
                  style: {
                    marginRight: "5px"
                  }
                },
                "设置旁站模板"
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
                      projectApi.getProjectDetail( { id: this.joinedList[params.index].id },
                        data => {
                          this.hooks = {};
                          this.roleTypeList = [];
                          console.log(data);
                          for (let i = 0; i < data.result.userRoleDTOS.length; i++) {
                            // userRoleDTOS 保存着项目人员信息
                            this.addhooks(
                              data.result.userRoleDTOS[i].roleName,
                              data.result.userRoleDTOS[i]
                            );
                          }
                          for (var prop in this.hooks) {//获得角色类别数组
                            this.roleTypeList.push(prop);
                          }
                          data.result.hooks = this.hooks;
                          data.result.roleTypeList = this.roleTypeList;
                          data.result.projectName = data.result.project.projectName;
                          this.obj = data.result;
                          this.isProjectStaffsRoleSetShow = true;
                          console.log(this.obj);
                        },
                        data => {
                          this.$Message.error(data.message);
                        }
                      );
                    }
                  },
                  style: {
                    marginRight: "5px"
                  }
                },
                "设置项目用户和角色"
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
                      params.row.isModalBuildingShow = true;
                      this.project = params.row;
                      this.modal_building.show = true;
                    }
                  },
                  style: {
                    marginRight: "5px"
                  }
                },
                "设置楼栋信息"
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
                      projectApi.deleteProject(
                        { id: this.joinedList[params.index].id },
                        () => {
                          this.joinedList.splice(params.index, 1);
                          this.total = this.total - 1;
                          this.$Message.success("删除成功！");
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
      joinedList: [],
      buildList: [],
      pageIndex: 1,
      pageSize: 10,
      total: 0
    };
  },
  methods: {
    onModalAction (e){
      console.log(e);
      if(e.type == "close"){
        this[e.name] = false;
      }else if(e.type == "show"){
        this[e.name] = true;
      }else{
        console.error("不存在这种模态框行为")
      }
      this.getJoinedList();
    },
    addhooks: function(type, hook) {
      var hooks = this.hooks[type];
      if (!hooks) {
        hooks = [];
      }
      hooks.push(hook);
      this.hooks[type] = hooks;
    },
    addModalClose() {
      this.addModal.show = false;
      this.getJoinedList();
    },
    editModalClose() {
      this.hooks = [];
      this.roleTypeList = [];
      this.editModal.show = false;
      this.getJoinedList();
    },
    getJoinedList() {//获取用户参与的所有项目
      projectApi.getList({}, data => {
        console.log(data);
        this.joinedList = data.result;
        this.total = data.result.length;
      });
    },
    getList() {//获取用户参与的所有项目
      projectApi.getList({}, data => {
        console.log(data);
        this.joinedList = data.result;
        this.total = data.result.length;
      });
    },
    getBuildList(id) { //通过ProjectId获得楼栋信息
      projectApi
        .getBuildList({ projectId: id })
        .then(data => {
          this.buildList = data;
        })
        .catch(err => {
          this.$Message.error("获取楼栋数据失败");
        });
    },
    pageChange(pageIndex) {
      console.log(pageIndex);
      this.pageIndex = pageIndex;
      this.getJoinedList();
    },
    pageSizeChange(pageSize) {
      console.log(pageSize);
      this.pageSize = parseInt(pageSize);
      this.getJoinedList();
    },
    onCancelEditModal() {
      this.hooks = [];
      this.roleTypeList = [];
    },
    setRoleModalClose() {
      this.setRoleModal.show = false;
      this.obj = {};
    }
  },
  mounted() {
    this.getJoinedList();
    userApi.getMenusOwn()
    .then( data => {
      console.log(data);
      console.log(this.$router.options.routes);
      this.$router.options.routes[2].meta.hideInMenu = true;
      console.log(this.$router.options.routes);
    })
  }
};
</script>
<style>
.float-l {
  float: left;
}
</style>
