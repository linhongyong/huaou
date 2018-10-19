import axios from '@/libs/api.request'
import httpClient from './httpClient';


/**
 * 添加
 */
let obj = new Object();

obj.getTmplList = (data) => httpClient.post({ url: `/snJbjPzjlTemplate/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`, data });

obj.addSnjbTmpl = (data, fnOk, fnError) => {
  return axios.request({
    url: 'snJbjPzjlTemplate/addTemplate',
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
obj.getSnjbTmplList = (data, fnOk, fnError) => {
  return axios.request({
    url: `snJbjPzjlTemplate/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`,
    method: 'post'
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
    url: `snJbjPzjlTemplate/getTemplate?id=${data.id}`,
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
obj.deleteSnjbTmpl = (data, fnOk, fnError) => {
  return axios.request({
    url: `snJbjPzjlTemplate/delete?id=${data.id}`,
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
obj.updateSnjbTmpl = (data, fnOk, fnError) => {
  return axios.request({
    url: 'snJbjPzjlTemplate/update',
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