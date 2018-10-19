<template>
  <div class="header-bar">
    <sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange"></sider-trigger>
    <custom-bread-crumb show-icon style="margin-left: 30px;" :list="breadCrumbList"></custom-bread-crumb>

    <div class="custom-content-con">
      <Select v-model="projectId" style="width:200px" class="i-select" @on-change="handleSelectChange">
        <Option v-for="item in projectList" :value="item.value" :key="item.value">{{ item.projectName }}</Option>
      </Select>
      <Select v-model="buildingId" style="width:200px" class="i-select" @on-change="handleBuildingIdChange">
        <Option v-for="item in buildList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import siderTrigger from "./sider-trigger";
import customBreadCrumb from "./custom-bread-crumb";
import "./header-bar.less";
import apiProject from "@/api/project-api";
import { mapMutations, mapState } from "vuex";

export default {
  name: "HeaderBar",
  components: {
    siderTrigger,
    customBreadCrumb
  },
  props: {
    collapsed: Boolean
  },
  computed: {
    ...mapState({
      ROLE: state => state.user.role
    }),
    breadCrumbList() {
      return this.$store.state.app.breadCrumbList;
    }
  },
  watch: {
    ROLE(val) {},
    projectId(id) {
      console.log("监听到项目Id变化----------")
      this.getBuildList(id);
    }
  },
  data() {
    return {
      projectId: "",
      projectList: [],
      buildingId: "",
      buildList: []
    };
  },
  created() {
    this.getProjectList();
  },
  methods: {
    ...mapMutations(["setProject", "setBuilding"]),
    handleCollpasedChange(state) {
      this.$emit("on-coll-change", state);
    },
    getProjectList() {
      apiProject
        .getOwnList()
        .then(data => {
          this.projectList = data.map(item =>
            Object.assign(item, {
              label: item.projectName,
              value: item.projectId
            })
          );
          // 默认选择第一个项目
          if (this.projectList.length > 0) {
            const { projectId, projectName } = this.projectList[0];
            this.projectId = projectId;
            // 提交mutation
            this.setProject({ projectId, projectName });
          }
        })
        .catch(err => {
          this.$Message.error("获取项目列表失败");
        });
    },
    getBuildList(projectId) {
      apiProject.getBuildList({ projectId }).then(data => {
        this.buildList = data.map(({ buildingName, id, buildingCode }) => ({
          label: buildingName,
          value: id,
          buildingId: id,
          buildingName,
          buildingCode
        }));
        if (this.buildList.length > 0) {
          const { buildingId, buildingName, buildingCode } = this.buildList[0];
          this.buildingId = buildingId;
          // 提交mutation
          this.setBuilding({ buildingId, buildingName, buildingCode });
        }
      });
    },
    // 选择项目时触发
    handleSelectChange(id) {
      this.setProject(this.projectList.find(item => item.projectId === id));
    },
    handleBuildingIdChange(id) {
      this.setBuilding(this.buildList.find(item => item.buildingId === id));
    }
  }
};
</script>
<style scoped>
.i-select {
  vertical-align: top;
  margin-right: 20px;
  float: left;
  margin-top: 16px;
}
</style>

