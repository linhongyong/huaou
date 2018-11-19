<template>
  <div class="">
    <Card>
      <Table width="100%" border :columns="columns2" :data="joinedList"></Table>
      <div style="padding: 18px 10px 18px;text-align: right;clear: both;">
        <!-- <Page :total="total" show-total class="float-l" show-elevator show-sizer @on-change="pageChange" @on-page-size-change="pageSizeChange" :current="pageIndex"/> -->
        <Button style="" type="primary" shape="circle" icon="md-add" v-on:click="addModal.show = true" :disabled="!this.isAccessForButton('0013')"></Button>
      </div>
    </Card>
    <Modal v-model="editModal.show" :title="'修改工程信息: '+obj.projectName" :footer-hide="true" width="60%" @on-cancel="onCancelEditModal">
      <div id="" style="width:80%, margin:0 auto">
        <Edit :obj="project"  @editModalClose="editModalClose"></Edit>
      </div>
    </Modal>
    <Modal v-model="addModal.show" title="创建工程" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <Add @addModalClose="addModalClose"></Add>
      </div>
    </Modal>
    <Modal v-model="isPangzhanTmplSetShow" :title="'设置旁站模板：'+obj.projectName" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <TmplSet @modalAction="onModalAction" :obj="obj" :buildList="buildList"></TmplSet>
      </div>
    </Modal>
    <Modal v-model="isProjectStaffsRoleSetShow" :title="'设置项目人员和职务: '+obj.projectName" :footer-hide="true" width="60%">
      <div id="" style="width:80%, margin:0 auto">
        <setRole @modalAction="onModalAction" :obj="obj"></setRole>
      </div>
    </Modal>
    <buildingSet v-model="isBuildingSetShow"  :obj="obj" :buildList="buildList" @updateBuildList="getBuildList"></buildingSet>
  </div>
</template>

<script>
import Tables from "_c/tables";
import Edit from "./project-edit.vue";
import Add from "./project-add.vue";
import TmplSet from "./tmpl-set.vue";
import setRole from "./setProjectRole.vue";
import projectApi from "@/api/project-api";
import buildingSet from "./building-set.vue";
import userApi from '@/api/user-api'
import MIXIN_project_building from "@/mixin/mixin-project-building";
export default {
	mixins: [MIXIN_project_building],
  components: {
    Tables,
    Edit,
    Add,
    TmplSet,
    setRole,
    buildingSet
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
      isBuildingSetShow: false,
      project: {},
      hooks: {},
      roleTypeList: [],
      columns2: [
        {
          title: "工程名",
          key: "projectName",
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
                    size: "small",
										disabled: !this.isAccessForButton("0018"),
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
                    size: "small",
										disabled: !this.isAccessForButton("0014"),
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
                    size: "small",
										disabled: !this.isAccessForButton("0015"),
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
                "设置项目用户和职务"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small",
										disabled: !this.isAccessForButton("0016"),
                  },
                  on: {
                    click: e => {
											this.obj = Object.assign({}, this.obj, params.row) 
											this.getBuildList(this.obj.id);
                      this.isBuildingSetShow = true;
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
                        size: "small",
												disabled: !this.isAccessForButton("0017"),
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
      
      buildList: [],
      pageIndex: 1,
      pageSize: 10,
    };
  },
	computed:{
		joinedList() {
			let list = this.$store.state.user.projects;
			return list;
		},
		total(){
			return this.$store.state.user.projects.length;
		}
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
      this.getList();
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
      this.getList();
    },
    editModalClose() {
      this.hooks = [];
      this.roleTypeList = [];
      this.editModal.show = false;
      this.getList();
    },
    getList() {//获取用户参与的所有项目
// 			this.$Notice.success({
// 					title: '新建项目后请重新登录',
// 					desc: '右上角退出登录然后重新登录. '
// 			});
			if(this.$store.state.user.isCanSeeAllProject){
				this.getProjectList();
			}else{
				this.getJoinedList();
			}

    },
//     getList() {//获取用户参与的所有项目
//       projectApi.getList({}, data => {
//         console.log(data);
//         this.joinedList = data.result;
//         this.total = data.result.length;
//       });
//     },
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
//     pageChange(pageIndex) {
//       console.log(pageIndex);
//       this.pageIndex = pageIndex;
//       this.getList();
//     },
//     pageSizeChange(pageSize) {
//       console.log(pageSize);
//       this.pageSize = parseInt(pageSize);
//       this.getList();
//     },
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
    // this.getList();
  }
};
</script>
<style>
.float-l {
  float: left;
}
</style>
