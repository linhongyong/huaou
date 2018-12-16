import {axios} from '@/libs/api.request'

/**
 * 添加
 */
let obj = new Object();
obj.addCommon = (data, fnOk, fnError) => {
  return axios.request({
    url: 'commonPzjl/addTemplate',
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
obj.getCommonList = (data, fnOk, fnError) => {
  return axios.request({
    url: `commonPzjl/list?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`,
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

obj.getCommonTemplate = (data, fnOk, fnError) => {
  return axios.request({
    url: `commonPzjl/getTemplate?id=${data.id}`,
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
obj.deleteCommon = (data, fnOk, fnError) => {
  return axios.request({
    url: `commonPzjl/delete?id=${data.id}`,
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
obj.updateCommon = (data, fnOk, fnError) => {
  return axios.request({
    url: 'commonPzjl/update',
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