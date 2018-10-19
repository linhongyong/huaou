import axios from '@/libs/api.request'
import httpClient from '@/api/httpClient';
/**
 * 添加
 */
let obj = new Object();
obj.addSnjb = (data, fnOk, fnError) => {
  return axios.request({
    url: 'snJbjPzjl/addTemplate',
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

/**
 * 查询
 */
obj.getSnjbById = (data, fnOk, fnError) => {
  return axios.request({
    url: `/snJbjPzjl/getSnJbjPzjl?id=${data.id}`,
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
/**
 * 通过projectId、BuildingId获得旁站列表
 */
obj.getListByCondition = (data) => httpClient.post({ url: `/snJbjPzjl/getListByCondition`, data})
obj.getSnjbList = (data, fnOk, fnError) => {
  return axios.request({
    url: `snJbjPzjl/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`,
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
obj.getSnjbListByProjectId = (data, fnOk, fnError) => {
  return axios.request({
    url: `/snJbjPzjl/listProject`,
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
obj.getSnjbTemplate = (data, fnOk, fnError) => {
  return axios.request({
    url: `snJbjPzjl/getTemplate?id=${data.id}`,
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
/**
 * 删除
 */
obj.deleteSnjb = (data, fnOk, fnError) => {
  return axios.request({
    url: `snJbjPzjl/delete?id=${data.id}`,
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

/**
 * 改
 */
obj.updateSnjb = (data, fnOk, fnError) => {
  return axios.request({
    url: 'snJbjPzjl/update',
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


obj.getDragList = (data, fnOk, fnError) => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  }).then(res => {
    console.log(res)
    if(res.data.code != "Success"){
      fnError(res.data)
    }else{
      fnOk(res.data)
    }
  })
}

export default obj