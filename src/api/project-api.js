import {axios} from '@/libs/api.request';
import httpClient from './httpClient';

let project = new Object();

project.addProject = (data, fnOk, fnError) => {
  axios
    .request({
      url: '/project/add',
      method: 'post',
      data
    })
    .then((res) => {
      console.log(res);
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};
project.deleteProject = (data, fnOk, fnError) => {
  axios
    .request({
      url: `/project/delete?id=${data.id}`,
      method: 'post'
    })
    .then((res) => {
      console.log(res);
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};
project.updateProject = (data, fnOk, fnError) => {
  axios
    .request({
      url: '/project/update',
      method: 'post',
      data
    })
    .then((res) => {
      console.log(res);
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};
project.getList = (data, fnOk, fnError) => {
  axios
    .request({
      url: `/project/list`,
      method: 'post',
      data
    })
    .then((res) => {
      console.log(res);
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};
project.getJoinedList = (data, fnOk, fnError) => {
  axios
    .request({
      url: `/project/getJoinedList`,
      method: 'get',
      data
    })
    .then((res) => {
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};
project.setTmplOrange = (data, fnOk, fnError) => {
  axios
    .request({
      url: `/jxZkGzzPzjlTemplate/setGzzTplRange`,
      method: 'post',
      data
    })
    .then((res) => {
      console.log(res);
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};
project.getProjectDetail = (data, fnOk, fnError) => {
  axios
    .request({
      url: `/project/get?id=${data.id}`,
      method: 'get',
      data
    })
    .then((res) => {
      console.log(res);
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};

project.deleteUserRole = (data, fnOk, fnError) => {
  axios
    .request({
      url: `/userRole/delete?id=${data.id}`,
      method: 'post'
    })
    .then((res) => {
      console.log(res);
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};

project.addUserRole = (data, fnOk, fnError) => {
  axios
    .request({
      url: '/userRole/add',
      method: 'post',
      data
    })
    .then((res) => {
      console.log(res);
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};

project.getProjectList = (data) => httpClient.get({
  url: '/project/list',
  data
});
project.getJoinedList = (data) => httpClient.get({
  url: '/project/getJoinedList',
  data
});
project.getOwnList = (data) => httpClient.get({
  url: '/project/listOwn',
  data
});
project.addProjectByName = (data) => httpClient.post({
  url: '/project/addByName',
  data
})

project.addBuild = (data) => httpClient.post({
  url: '/building/add',
  data
})

project.getBuildList = (data) => httpClient.get({
  url: '/project/getBuildingList',
  data
})

project.updateBuild = (data) => httpClient.post({
  url: '/building/setBuildingData',
  data
})
export default project;
