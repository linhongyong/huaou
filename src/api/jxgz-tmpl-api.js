import axios from '@/libs/api.request';
import httpClient from './httpClient';

/**
 * 添加
 */
let obj = new Object();
obj.addJxgzTmpl = (data, fnOk, fnError) => {
  return axios.request({
    url: 'jxZkGzzPzjlTemplate/addTemplate',
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
obj.getJxgzTmplList = (data, fnOk, fnError) => {
  return axios.request({
    url: `jxZkGzzPzjlTemplate/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`,
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

obj.getJxgzTmplListByProjectId = (data) => httpClient.post({ url: `/jxZkGzzPzjlTemplate/listByProjectId`, data });

obj.getJxZkGzzPzjlTemplate = (data, fnOk, fnError) => {
  return axios.request({
    url: `jxZkGzzPzjlTemplate/getTemplate?id=${data.id}`,
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
obj.deleteJxgzTmpl = (data, fnOk, fnError) => {
  return axios.request({
    url: `jxZkGzzPzjlTemplate/delete?id=${data.id}`,
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
obj.updateJxgzTmpl = (data, fnOk, fnError) => {
  return axios.request({
    url: 'jxZkGzzPzjlTemplate/update',
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