import axios from '@/libs/api.request'

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
role.deleteRole = (data, fnOk, fnError) => {
  axios.request({
    url: `/role/delete?id=${data.id}`,
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
export default role