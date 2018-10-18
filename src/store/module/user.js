import {
  login,
  logout,
  getUserInfo
} from '@/api/user';
import {
  setToken,
  getToken
} from '@/libs/util';

export default {
  state: {
    userName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken(),
    access: '',

    project: {
      id: '',
      name: '',
    },
    building: {
      id: '',
      name: '',
    }

  },
  getters: {
    role: (state) => ({
      projectName: state.project.name,
      projectId: state.project.id,
      buildingName: state.building.name,
      buildingId: state.building.id,
    })
  },
  mutations: {
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
    setProject(state, {
      projectId,
      projectName
    }) {
      state.project.id = Number(projectId);
      state.project.name = projectName;
    },
    setBuilding(state, {
      buildingId,
      buildingName
    }) {
      state.building.id = Number(buildingId);
      state.building.name = buildingName;
    },
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
      return new Promise((resolve, reject) => {
        // commit('setToken', 'super_admin')
        // resolve()
        login({
            userName,
            password
          })
          .then((data) => {
            // const data = res.data
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
            resolve();
          })
          .catch((err) => {
            reject(err.message);
          });
        //         如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        //         commit('setToken', '')
        //         commit('setAccess', [])
        //         resolve()
      });
    },
    // 获取用户相关信息
    getUserInfo({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        let data = {
          avator: '',
          user_name: 'admin',
          user_id: 1,
          access: ['super_admin']
        };
        commit('setAvator', data.avator);
        commit('setUserName', data.user_name);
        commit('setUserId', data.user_id);
        commit('setAccess', data.access);
        resolve(data);
        //      getUserInfo(state.token).then(res => {
        //        const data = res.data
        //        commit('setAvator', data.avator)
        //        commit('setUserName', data.user_name)
        //        commit('setUserId', data.user_id)
        //        commit('setAccess', data.access)
        //        resolve(data)
        //      }).catch(err => {
        //        reject(err)
        //      })
      });
    }
  }
};
