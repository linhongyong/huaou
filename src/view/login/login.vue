<style lang="less">
@import "./login.less";
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
				<span style="font-size: 12px;">使用360、搜狗、谷歌等浏览器访问体验最佳</span>
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">厦门定风波科技有限公司提供技术支持</p>
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
						.then(res => {//只是获得了token
								this.$Message.success("登录成功");
								this.getUserInfo().then(ownerMenus => {
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
		}
};
</script>

<style>
</style>
