<template>
  <div class="header-bar">
    <sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange"></sider-trigger>
    <custom-bread-crumb show-icon style="margin-left: 30px;" :list="breadCrumbList"></custom-bread-crumb>

    <div class="custom-content-con">
      <Select :value="projectId" style="width:200px" class="i-select" @on-change="handleProjectIdChange">
        <Option v-for="item in projectList" :value="item.id" :key="item.id">{{ item.projectName }}</Option>
      </Select>
      <Select :value="buildingId" style="width:200px" class="i-select" @on-change="handleBuildingIdChange">
        <Option v-for="item in buildList" :value="item.id" :key="item.id">{{ item.buildingName }}</Option>
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
import userApi from "@/api/user-api";
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
    },
		projectId(){
			let project = this.$store.state.user.project;
			console.log("project----",project);
			if(!project.id){
				console.log(localStorage.getItem("project"));
				let obj = JSON.parse(localStorage.getItem("project"))
				if(obj && obj.id){
					this.setProject(obj);
					project = obj;
				}
			}
			return project.id;
		},
		buildingId(){
			let building = this.$store.state.user.building;
			if(!building.id){
				let obj = JSON.parse(localStorage.getItem("building"))
				if(obj && obj.id){
					this.setProject(obj);
					building = obj;
				}
			}
			return building.id;
		},
		projectList() {
			let list = this.$store.state.user.projects;
			if(!list.length){
				list = JSON.parse(localStorage.getItem("projects"))
				if(list){
					this.setProjects(list);
					return list;
				}
			}
			return this.$store.state.user.projects;
		},
		
		buildList() {
			let list = this.$store.state.user.buildings;
			if(!list.length){
				list = JSON.parse(localStorage.getItem("buildings"))
				if(list){
					this.setBuildings(list);
					return list;
				}
			}
			return this.$store.state.user.buildings;
		},
		
  },
  watch: {
    projectId(id) {
      this.getBuildList(id);
    },
  },
  data() {
    return {
			projectIndex: 0,
			buildingIndex: 0,
    };
  },
  created() {
  },
  methods: {
    ...mapMutations(["setProjects","setProject", "setBuilding", "setRoles", "setBuildings"]),
    handleCollpasedChange(state) {
      this.$emit("on-coll-change", state);
    },
		getRoles() {
			userApi
				.getRoles()
				.then(roles => {
					this.roles = roles;
					this.setRoles(roles);//1.保存到全局
					let isCanSeeAllProject = false;
					roles.forEach(function (item) {
						if (item.roleName == '老板' || item.roleName == '贵宾') {
							isCanSeeAllProject = true
						}
					})
					if (isCanSeeAllProject) {
						console.log("获得所有项目");
						this.getProjectList();
					} else{
						console.log("获得参与项目");
						this.getJoinedList();
					}
					
				})
				.catch(err => {
					this.$Message.error("获取职务列表失败");
				});
		},
    getBuildList(projectId) {
      apiProject.getBuildList({ projectId }).then(data => {
				if(!data || !data.length){
					data = []
				}
				this.setBuildings(data);
				localStorage.setItem("buildings",JSON.stringify(data))
        if (data.length > 0) {
          this.setBuilding(data[0]);
					localStorage.setItem("building",JSON.stringify(data[0]))
        }else{
					this.setBuilding({});
					localStorage.setItem("building",JSON.stringify({}))
				}
      });
    },
    // 选择项目时触发
    handleProjectIdChange(id) {
			this.getBuildList(id);
			let project = this.projectList.find(item => item.id == id);
			if(project){
				this.setProject(project);
				localStorage.setItem("project",JSON.stringify(project))
			}
      
    },
    handleBuildingIdChange(id) {
			let building = this.buildList.find(item => item.id == id);
			if(building && building.id){
				this.setBuilding(building);
				localStorage.setItem("building",JSON.stringify(building))
			}else{
				this.setBuilding({});
				localStorage.setItem("building",JSON.stringify({}))
			}
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

