<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from "_c/login-form";
import { mapActions, mapMutations } from "vuex";
import userApi from '@/api/user-api'
import projectApi from '@/api/project-api'
import { getMenuByRouter } from '@/libs/util'
import MIXIN_project_building from "@/mixin/mixin-project-building";
import { machiningFromTwoTree, getTreeFromTreeByValue, getArrayFromTreeByValue } from '@/libs/mytools'
export default {
		mixins: [MIXIN_project_building],
		components: {
				LoginForm
		},
		methods: {
				...mapActions(["handleLogin", "getUserInfo"]),
				...mapMutations(["setMenuList", "setButtonList","setBuildings",
				 "setRoles", "setProjects", "setProject", "setBuilding", ]),
				handleSubmit({ userName, password }) {
						this.handleLogin({ userName, password })
						.then(res => {
								this.$Message.success("登录成功");
								this.getUserInfo().then(ownerMenus => {
										// console.log(ownerMenus);
										console.log(this.$router.options.routes);
										
										//获得用户拥有的按钮数组
										let buttonList = getArrayFromTreeByValue(JSON.parse(JSON.stringify(ownerMenus)), "type", 1);
										this.setButtonList(buttonList);//保存到全局
										localStorage.setItem("buttonList",JSON.stringify(buttonList))
										// console.log(buttonList);
									
										// 把菜单中的按钮过滤掉
										let originMenutree = getTreeFromTreeByValue(JSON.parse(JSON.stringify(ownerMenus)), "type", 0);
										//用本地的路由配置和服务端菜单树生成菜单树
										originMenutree = machiningFromTwoTree(this.$router.options.routes, originMenutree)
										
										//最后生成可以显示的菜单
										let menutree = getMenuByRouter(originMenutree)
										localStorage.setItem("menuList",JSON.stringify(menutree))
										this.setMenuList(menutree);
										//获得用户拥有的角色根据角色判断使用哪个获取项目列表的接口
										//并将角色、项目列表，当前项目，楼栋列表当前楼栋保存到本地防止刷新时丢失
										this.getRoles();
										//显示首页
										this.$router.push({
											name: "home"
										});
										
									});
						})
						.catch(err => {
							this.$Message.error(err.message);
						});
				},
// 				getRoles() {
// 					userApi
// 						.getRoles()
// 						.then(roles => {
// 							this.setRoles(roles);//1.保存到全局
// 							let isCanSeeAllProject = false;
// 							localStorage.setItem("roles",JSON.stringify(roles))
// 							roles.forEach(function (item) {
// 								if (item.roleName == '老板' || item.roleName == '贵宾') {
// 									isCanSeeAllProject = true
// 								}
// 							})
// 							if (isCanSeeAllProject) {
// 								console.log("获得所有项目");
// 								this.getProjectList();
// 							} else{
// 								console.log("获得参与项目");
// 								this.getJoinedList();
// 							}
// 							
// 						})
// 						.catch(err => {
// 							this.$Message.error("获取职务列表失败");
// 						});
// 				},
// 				getProjectList() {
// 					projectApi
// 						.getProjectList()
// 						.then(data => {
// 							this.setProjects(data);
// 							localStorage.setItem("projects",JSON.stringify(data))
// 							if (data.length > 0) {
// 								localStorage.setItem("project",JSON.stringify(data[0]))
// 								this.setProject(data[0]);
// 								this.getBuildList(data[0].id);
// 							}
// 						})
// 						.catch(err => {
// 							this.$Message.error("获取项目列表失败");
// 						});
// 				},
// 				getJoinedList() {
// 					projectApi
// 						.getJoinedList()
// 						.then(data => {
// 							this.setProjects(data);
// 							localStorage.setItem("projects",JSON.stringify(data))
// 							if (data.length > 0) {
// 								localStorage.setItem("project",JSON.stringify(data[0]))
// 								this.setProject(data[0]);
// 								this.getBuildList(data[0].id);
// 							}
// 						})
// 						.catch(err => {
// 							this.$Message.error("获取项目列表失败");
// 						});
// 				},
// 				getBuildList(projectId) {
// 					projectApi.getBuildList({ projectId }).then(data => {
// 						localStorage.setItem("buildings",JSON.stringify(data))
// 						this.setBuildings(data);
// 						if (data.length > 0) {
// 							localStorage.setItem("building",JSON.stringify(data[0]))
// 							this.setBuilding(data[0]);
// 						}
// 					});
// 				},
		}
};
</script>

<style>
</style>
