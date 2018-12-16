import {axios} from '@/libs/api.request'
import httpClient from '@/api/httpClient';

let obj = new Object();
/**
 * 添加
 */
obj.addJxZkGzzPzjl = (data) => {
  return axios.request({
    url: 'jxZkGzzPzjl/add',
    method: 'post',
    data
  })
}

/**
 * 查询
 */
obj.getDetail = (data) => httpClient.get({ url: '/taizhang/getDetailByIdAndType', data})
obj.getTZList = (data) => httpClient.post({ url: '/taizhang/getListByProjectIdAndType', data}),
obj.deleteById = (data) => httpClient.post({ url: `/yylgzpz/deleteById?id=${data.id}`, data})
obj.getJxZkGzzPzjl = (data) => httpClient.get({ url: `jxZkGzzPzjl/getJxZkGzzPzjl?id=${data.id}`, data})

obj.getJxgzByCondition = (data) => {
  return axios.request({
    url: `/jxZkGzzPzjl/getGzzByCondition`,
    method: 'post',
    data
  })
}
obj.getListByCondition = (data) => httpClient.post({ url: `/jxZkGzzPzjl/getListByCondition`, data})
/**
 * 删除
 */
obj.deleteJxZkGzzPzjl = (id) => {
  return axios.request({
    url: `jxZkGzzPzjl/delete?id=${id}`,
    method: 'post'
  })
}

/**
 * 改
 */
obj.updateJxZkGzzPzjl = (data) => {
  return axios.request({
    url: 'jxZkGzzPzjl/update',
    method: 'post',
    data
  })
}

obj.getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

/**
 * 下载
 */
obj.downloadWord = (id) => {
  return axios.request({
    url: `/jxZkGzzPzjl/download?id=${id}`,
    method: 'post'
  })
}

obj.export = (data) => httpClient.post({
  url: '/jxZkGzzPzjl/exportExcel',
  data
})


export default obj
