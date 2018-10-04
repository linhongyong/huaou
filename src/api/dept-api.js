import axios from '@/libs/api.request'

let dept = new Object();

dept.addDept= (data, fnOk, fnError) => {
  axios.request({
    url: '/dept/add',
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
dept.deleteDept= (data, fnOk, fnError) => {
  axios.request({
    url: `/dept/delete?id=${data.id}`,
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
dept.updateDept= (data, fnOk, fnError) => {
  axios.request({
    url: '/dept/update',
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
dept.getDepts = (data, fnOk, fnError) => {
  axios.request({
    url: `/dept/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`,
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
export default dept