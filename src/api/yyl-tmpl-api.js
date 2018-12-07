
import axios from '@/libs/api.request'
import httpClient from './httpClient';


/**
 * 添加
 */
let obj = new Object();

obj.getTmplList = (data) => httpClient.post({ url: `/yylGzTemplate/listByProjectId?pageNum=${data.pageNum}&pageSize=${data.pageSize}`, data });
		
obj.addYylTmpl = (data, fnOk, fnError) => {
  return axios.request({
    url: '/yylGzTemplate/addTemplate',
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

obj.getYylTemplate = (data, fnOk, fnError) => {
  return axios.request({
    url: `yyljPzjlTemplate/getTemplate?id=${data.id}`,
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
obj.deleteYylTmpl = (data, fnOk, fnError) => {
  return axios.request({
    url: `/yylGzTemplate/delete?id=${data.id}`,
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
obj.updateYylTmpl = (data, fnOk, fnError) => {
  return axios.request({
    url: '/yylGzTemplate/update',
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