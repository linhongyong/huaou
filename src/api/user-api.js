import axios from '@/libs/api.request'

let user = new Object();
user.login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

user.getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

user.logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

user.addUser = (data, fnOk, fnError) => {
  axios.request({
    url: '/user/add',
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
user.deleteUser = (data, fnOk, fnError) => {
  axios.request({
    url: `/user/delete?id=${data.id}`,
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
user.updateUser = (data, fnOk, fnError) => {
  axios.request({
    url: '/user/update',
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
user.getUsers = (data, fnOk, fnError) => {
  axios.request({
    url: `/user/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`,
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
user.searchUsers = (data, fnOk, fnError) => {
  axios.request({
    url: `/user/searchUser?searchStr=${data.searchStr}`,
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
export default user