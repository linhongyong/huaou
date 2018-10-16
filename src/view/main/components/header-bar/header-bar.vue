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
            this.projectId = this.projectList[0].projectId;
            this.$store.commit("setRole", this.projectList[0]);
          }
        })
        .catch(err => {
          this.$Message.error("获取项目列表失败");
        });
    },
    getBuildList(projectId) {
      apiProject.getBuildList({ projectId }).then(data => {
        this.buildList = data.map(({ buildingName, id }) => ({
          label: buildingName,
          value: id,
          buildingId: id,
          buildingName
        }));
        if (this.buildList.length > 0) {
          this.buildingId = this.buildList[0].value;
          this.$store.commit("setRole", this.buildList[0]);
        }
      });
    },
    handleSelectChange(id) {
      this.$store.commit(
        "setRole",
        this.projectList.find(item => item.id === id)
      );
    },
    handleBuildingIdChange(id) {
      this.$store.commit("setRole");
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

