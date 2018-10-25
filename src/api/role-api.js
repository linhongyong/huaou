import axios from '@/libs/api.request'
import httpClient from './httpClient';
let role = new Object();

role.addRole = (data, fnOk, fnError) => {
  axios.request({
    url: '/role/add',
    method: 'post',
    data
  }).then(res => {
    console.log(res)
    if(res.data.code != "Success"){
      fnError(res.data)
    }else{
      fnOk(res.data)
    }
  })
}
role.deleteRole = (data) => httpClient.post({ url: `/role/delete?id=${data.id}`, data });
// role.deleteRole = (data, fnOk, fnError) => {
//   axios.request({
//     url: `/role/delete?id=${data.id}`,
//     method: 'post',
//   }).then(res => {
//     console.log(res)
//     if(res.data.code != "Success"){
//       fnError(res.data)
//     }else{
//       fnOk(res.data)
//     }
//   })
// }
role.updateRole = (data, fnOk, fnError) => {
  axios.request({
    url: '/role/update',
    method: 'post',
    data
  }).then(res => {
    console.log(res)
    if(res.data.code != "Success"){
      fnError(res.data)
    }else{
      fnOk(res.data)
    }
  })
}
role.getRoles = (data, fnOk, fnError) => {
  axios.request({
    url: `/role/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`,
    method: 'post',
  }).then(res => {
    console.log(res)
    if(res.data.code != "Success"){
      fnError(res.data)
    }else{
      fnOk(res.data)
    }
  })
}
role.getRolesByType = (data, fnOk, fnError) => {
  axios.request({
    url: `/role/getRolesByType?type=${data.type}`,
    method: 'get',
  }).then(res => {
    console.log(res)
    if(res.data.code != "Success"){
      fnError(res.data)
    }else{
      fnOk(res.data)
    }
  })
}

role.setRoleMenu = (data) => httpClient.post({ url: `/roleMenu/add`, data });

export default role