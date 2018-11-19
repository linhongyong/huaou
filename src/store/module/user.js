import {login, logout, getUserInfo } from '@/api/user';
import { setToken, getToken } from '@/libs/util';

import userApi from '@/api/user-api'

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    access: '',
		buttonList: [],//用户拥有的按钮
		roles: [],//用户拥有的角色
		projects:[],
		buildings:[],
    project: {},
    building: {},
		projectRoleName: "",
		isCanSeeAllProject: false,

  },
  getters: {
//     role: (state) => ({
//       projectName: state.project.name,
//       projectId: state.project.id,
//       buildingName: state.building.name,
//       buildingId: state.building.id,
//     })
  },
  mutations: {
		setIsCanSeeAllProject(state, isCanSeeAllProject) {
			state.isCanSeeAllProject = isCanSeeAllProject;
		},
		setBuildings(state, buildings) {
			state.buildings = buildings;
		},
		setBuilding(state, building) {
			state.building = building;
		},
		setProjects(state, projects) {
			state.projects = projects;
		},
		setRoles(state, roles) {
			state.roles = roles;
		},
		setIsCanSeeAllProjectr(state, isCanSeeAllProject) {
			state.isCanSeeAllProject = isCanSeeAllProject;
		},
		setButtonList(state, buttonList) {
			state.buttonList = buttonList;
		},
    setAvator(state, avatorPath) {
      state.avatorImgPath = avatorPath;
    },
    setUserId(state, id) {
      state.userId = id;
    },
    setUserName(state, name) {
      state.userName = name;
    },
    setAccess(state, access) {
      state.access = access;
    },
    setToken(state, token) {
      state.token = token;
      setToken(token);
    },
		setProject(state, project) {
			state.project = project;
		},
//     setProject(state, {
//       projectId,
//       projectName
//     }) {
//       state.project.id = Number(projectId);
//       state.project.name = projectName;
//     },
//     setBuilding(state, {
//       buildingId,
//       buildingName,
//       buildingCode
//     }) {
//       state.building.id = Number(buildingId);
//       state.building.name = buildingName;
//       state.building.buildingCode = buildingCode;
//     },
  },
  actions: {
    // 登录
    handleLogin({
      commit
    }, {
      userName,
      password
    }) {
      userName = userName.trim();
      let that = this;
      return new Promise((resolve, reject) => {
        login({userName, password})
        .then((data) => {
          commit('setToken', data.result);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
      });
    },
    // 退出登录
    handleLogOut({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit('setToken', '');
            commit('setAccess', []);
						commit('setButtonList', []);
						localStorage.clear();
            resolve();
          })
          .catch((err) => {
            reject(err.message);
          });
      });
    },
    // 获取用户相关信息
    getUserInfo({ state, commit}) {
      return new Promise((resolve, reject) => {
        userApi.getMenusOwn()
        .then( data => {
					userApi.getUserInfo({})
					.then( data2 => {
						// console.log(data2);
						commit('setAvator', data2.avatar	)
						commit('setUserName', data2.userName	)
					})
// 					userApi.getRoles({})
// 					.then( data3 => {
// 						// console.log(data3);
// 						data3.forEach(function(elem){
// 							if (elem.roleName == '老板' || elem.roleName == '贵宾') {
// 								console.log(elem.roleName)
// 								commit('setIsCanSeeAllProjectr', true)
// 							}
// 						})
// 					})
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
      });
    }
  }
};
//      getUserInfo(state.token).then(res => {
//        const data = res.data
//        commit('setAvator', data.avator)
//        commit('setUserName', data.user_name)
//        commit('setUserId', data.user_id)
//        commit('setAccess', data.access)
//        resolve(data)
//      })