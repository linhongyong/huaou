import {axios} from '@/libs/api.request';
import httpClient from './httpClient';

let menu = new Object();

menu.addMenu = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .request({
        url: '/menu/add',
        method: 'post',
        data
      })
      .then((res) => {
        if (res.data.code == 'Success') {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      });
  });
};
menu.deleteMenu = (data, fnOk, fnError) => {
  axios
    .request({
      url: `/menu/delete?id=${data.id}`,
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
menu.updateMenu = (data, fnOk, fnError) => {
  axios
    .request({
      url: '/menu/update',
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
menu.getMenus = (data, fnOk, fnError) => {
  axios
    .request({
      url: `/menu/list`,
      method: 'get'
    })
    .then((res) => {
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};
// 封装一层axios 并返回Promise对象 实现链式调用
menu.addMenu = (data) => httpClient.post({ url: `/menu/add`, data });
menu.updateMenu = (data) => httpClient.post({ url: `/menu/update`, data });
menu.getMenuList = (data) => httpClient.post({ url: `/menu/list`, data });

menu.getMenusByRoleId = (data) => httpClient.get({ url: `/roleMenu/getMenusByRoleId`, data });

menu.getMenusByParentId = (data) => httpClient.get({ url: '/menu/getMenusByParentId', data });

menu.getMenuTreeByUserId = (data) => httpClient.get({ url: '/menuTree/getByUserId', data, defaultValue: 'menuList' });

//删除
menu.deleteById = (data) => httpClient.post({ url: `/menu/delete?id=${data.id}`, data });

menu.getMenusLevel1 = (data, fnOk, fnError) => {
  axios
    .request({
      url: `/menu/getMenusByParentId?parentId=0`,
      method: 'get'
    })
    .then((res) => {
      if (res.data.code != 'Success') {
        fnError(res.data);
      } else {
        fnOk(res.data);
      }
    });
};
export default menu;
