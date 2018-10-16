import axios from '@/libs/api.request'
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
obj.getJxZkGzzPzjlList = (data) => {
  return axios.request({
    url: '/jxZkGzzPzjl/listProject',
    method: 'post',
    data
  })
}

obj.getJxZkGzzPzjl = (id) => {
  return axios.request({
    url: `jxZkGzzPzjl/getJxZkGzzPzjl?id=${id}`,
    method: 'get'
  })
}
obj.getJxgzByCondition = (data) => {
  return axios.request({
    url: `/jxZkGzzPzjl/getGzzByCondition`,
    method: 'post',
    data
  })
}
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

// 根据项目id楼栋id获得混泥土量
obj.getSoilVolume = (data) => httpClient.get({
  url: '/building/getSoilVolume',
  data
})


export default obj
