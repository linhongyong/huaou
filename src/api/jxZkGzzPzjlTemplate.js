import axios from '@/libs/api.request'

/**
 * 添加
 */
export const addJxZkGzzPzjlTemplate = (data) => {
  return axios.request({
    url: 'jxZkGzzPzjlTemplate/addTemplate',
    method: 'post',
    data
  })
}

/**
 * 查询
 */
export const getJxZkGzzPzjlTemplateList = () => {
  return axios.request({
    url: 'jxZkGzzPzjlTemplate/list',
    method: 'post'
  })
}

export const getJxZkGzzPzjlTemplate = (id) => {
  return axios.request({
    url: `jxZkGzzPzjlTemplate/getTemplate?id=${id}`,
    method: 'get',
  })
}
/**
 * 删除
 */
export const deleteJxZkGzzPzjlTemplate = (id) => {
  return axios.request({
    url: `jxZkGzzPzjlTemplate/delete?id=${id}`,
    method: 'post',
  })
}

/**
 * 改
 */
export const updateJxZkGzzPzjlTemplate = (data) => {
  return axios.request({
    url: 'jxZkGzzPzjlTemplate/update',
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
