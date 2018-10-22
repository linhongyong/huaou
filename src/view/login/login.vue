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
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions(["handleLogin", "getUserInfo"]),
		...mapMutations(["setMenuList"]),
    handleSubmit({ userName, password }) {
      this.handleLogin({ userName, password })
        .then(res => {
          this.$Message.success("登录成功");
          this.getUserInfo().then(ownerMenus => {

            console.log(ownerMenus);
            console.log(this.$router.options.routes);
            
            let nodes = this.$router.options.routes.map(item => item)//路由文件数据
            let result = [];
            (function traverse(nodes, ownerMenus, result) {
              nodes.forEach((node, index) => {
                console.log(`-------------------${index}--------------------`);
                for(let j=0; j<ownerMenus.length; j++){
                  console.log("------", node.meta.title, ownerMenus[j].menuName)
                  if(node.meta.title == ownerMenus[j].menuName){
                    console.log(node)
                    console.log(ownerMenus[j])
                    node.meta.hideInMenu = false
                    if(node.children){
                      let children = node.children;																																																																																																																																																																																																																																																																																
                      node.children = []
                      traverse(children, ownerMenus[j].childMenus, node.children)
                    }
                    break
                  }
                }
                result.push(node);
                
              })//遍历结束
            })(nodes, ownerMenus, result);//菜单加工结束
            console.log(result);
						this.setMenuList(getMenuByRouter(this.$router.options.routes));
            this.$router.push({
              name: "home"
            });
          });
        })
        .catch(err => {
          this.$Message.error(err.message);
        });
    },
    machiningMenus: function(menuList){
      var result = [];
      let ownerMenus = this.obj.ownerMenus;
      (function traverse(node, result) {//???
        node.forEach(i => {
          let count = 0
          for(let j=0; j<ownerMenus.length; j++){
            if(ownerMenus[j].id == i.id){
              break
            }
            count++
          }
          let n = {
            title: i.menuName,
            id: i.id,
            checked: count == ownerMenus.length ? false : true
          }
          if(i.childMenus){
            n.children = []
            traverse(i.childMenus, n.children)
          }
          result.push(n);
        })
      })(menuList, result);
      console.log(result)
      this.menutree = result;
    },
  }
};
</script>

<style>
</style>
