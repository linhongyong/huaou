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
import { getMenuByRouter } from '@/libs/util'
import { machiningFromTwoTree, getTreeFromTreeByValue, getArrayFromTreeByValue } from '@/libs/mytools'
export default {
		components: {
				LoginForm
		},
		methods: {
				...mapActions(["handleLogin", "getUserInfo"]),
				...mapMutations(["setMenuList", "setButtonList"]),
				handleSubmit({ userName, password }) {
						this.handleLogin({ userName, password })
						.then(res => {
								this.$Message.success("登录成功");
								this.getUserInfo().then(ownerMenus => {
										console.log(ownerMenus);
										console.log(this.$router.options.routes);
										
										//获得用户拥有的按钮数组
										let buttonList = getArrayFromTreeByValue(JSON.parse(JSON.stringify(ownerMenus)), "type", 1);
										this.setButtonList(buttonList);//保存到全局
										localStorage.setItem("buttonList",JSON.stringify(buttonList))
										console.log(buttonList);
									
										// 把菜单中的按钮过滤掉
										let originMenutree = getTreeFromTreeByValue(JSON.parse(JSON.stringify(ownerMenus)), "type", 0);
										//用本地的路由配置和服务端菜单树生成菜单树
										originMenutree = machiningFromTwoTree(this.$router.options.routes, originMenutree)
										
										//最后生成可以显示的菜单
										let menutree = getMenuByRouter(originMenutree)
										localStorage.setItem("menuList",JSON.stringify(menutree))
										this.setMenuList(menutree);
										
										//显示首页
										this.$router.push({
											name: "home"
										});
									});
						})
						.catch(err => {
							this.$Message.error(err.message);
						});
				}
		}
};
</script>

<style>
</style>
