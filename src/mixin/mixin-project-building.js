/**使用：
 * 1.登录时初始化项目楼栋数据
 * 2.新增项目时
 */
import { mapActions, mapMutations } from "vuex";
import userApi from '@/api/user-api'
import projectApi from '@/api/project-api'

export default {
  computed: {

  },
  watch: {

  },
  methods:{
	  ...mapMutations(["setMenuList", "setButtonList","setBuildings",
	  "setRoles", "setProjects", "setProject", "setBuilding", "setIsCanSeeAllProject" ]),
		/**
		* 
		* 获得用户拥有的角色
		* 并存入localStorage、更新vuex中的roles
		* 调用getProjectList或getJoinedList方法
		*/
	  getRoles() {
	  	userApi
	  		.getRoles()
	  		.then(roles => {
	  			this.setRoles(roles);//1.保存到全局
	  			let isCanSeeAllProject = false;
	  			localStorage.setItem("roles",JSON.stringify(roles))
	  			roles.forEach(function (item) {
	  				if (item.roleName == '老板' || item.roleName == '管理员' || item.roleName == '系统管理员' || item.roleName == '超级系统管理员') {
							this.setIsCanSeeAllProject(true)
	  					isCanSeeAllProject = true
							localStorage.setItem("isCanSeeAllProject", true)
	  				}
	  			}, this)
	  			if (isCanSeeAllProject) {
	  				console.log("获得所有项目");
	  				this.getProjectList();
	  			} else{
	  				console.log("获得参与项目");
	  				this.getJoinedList();
	  			}
	  			
	  		})
// 	  		.catch(err => {
// 	  			this.$Message.error("获取职务列表失败");
// 	  		});
	  },
		/**
		* 
		* 获得所有项目
		* 并存入localStorage、更新vuex中的projects和project
		* 调用getBuildList方法
		*/
	  getProjectList() {
	  	projectApi
			.getProjectList()
			.then(data => {
				if(!data || !data.length){
					data = []
				}
				this.setProjects(data);
				localStorage.setItem("projects",JSON.stringify(data))
				if (data.length > 0) {
					localStorage.setItem("project",JSON.stringify(data[0]))
					this.setProject(data[0]);
					// this.getBuildList(data[0].id);
				}else{
					localStorage.setItem("project",'{}')
					this.setProject({});
				}
			})
			.catch(err => {
				this.$Message.error("获取项目列表失败");
			});
	  },
		/**
		* 
		* 获得参与的项目（包括自己创建的）
		* 并存入localStorage、更新vuex中的projects和project
		* 调用getBuildList方法
		*/
	  getJoinedList() {
	  	projectApi
	  		.getJoinedList()
	  		.then(data => {
	  			this.setProjects(data);
	  			localStorage.setItem("projects",JSON.stringify(data))
	  			if (data.length > 0) {
	  				localStorage.setItem("project",JSON.stringify(data[0]))
	  				this.setProject(data[0]);
	  				// this.getBuildList(data[0].id);
	  			}
	  		})
	  		.catch(err => {
	  			this.$Message.error("获取项目列表失败");
	  		});
	  },
		/**
		 * 传入项目id
		 * 获得项目楼栋信息
		 * 并存入localStorage、更新vuex中的buildings和builidng
		 */
	  getBuildList(projectId) {
			console.log("getBuildList------")
	  	projectApi.getBuildList({ projectId }).then(data => {
				console.log("---------getBuildList")
				if(!data || !data.length){
					data = []
				}
	  		localStorage.setItem("buildings",JSON.stringify(data))
				this.setBuildings(data);
				if(data.length > 0){
					localStorage.setItem("building",JSON.stringify(data[0]))
					this.setBuilding(data[0]);
				}else{
					localStorage.setItem("building",'{}')
					this.setBuilding({});
				}
	  	});
	  },
  },
  created() {
		if(localStorage.getItem("isCanSeeAllProject")){
			this.setIsCanSeeAllProject(true)
		}
  }
};
