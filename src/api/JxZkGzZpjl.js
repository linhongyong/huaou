import axios from '@/libs/api.request'

/**
 * 添加
 */
export const addJxZkGzzPzjl = (data) => {
  return axios.request({
    url: 'jxZkGzzPzjl/add',
    method: 'post',
    data
  })
}

/**
 * 查询
 */
export const getJxZkGzzPzjlList = (data) => {
  return axios.request({
    url: 'jxZkGzzPzjl/list',
    method: 'post'
  })
}

export const getJxZkGzzPzjl = (id) => {
  return axios.request({
    url: `jxZkGzzPzjl/getJxZkGzzPzjl?id=${id}`,
    method: 'get'
  })
}
/**
 * 删除
 */
export const deleteJxZkGzzPzjl = (id) => {
  return axios.request({
    url: `jxZkGzzPzjl/delete?id=${id}`,
    method: 'post'
  })
}

/**
 * 改
 */
export const updateJxZkGzzPzjl = (data) => {
  return axios.request({
    url: 'jxZkGzzPzjl/update',
    method: 'post',
    data
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

/**
 * 下载
 */
export const downloadWord = (id) => {
  return axios.request({
    url: `/jxZkGzzPzjl/download?id=${id}`,
    method: 'post'
  })
}
