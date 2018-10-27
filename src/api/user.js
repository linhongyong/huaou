import axios from '@/libs/api.request'

export const login = ({
  userName,
  password
}) => {
  const data = {
    mobile: userName,
    password
  }

  return axios.request({
    url: '/login',
    data,
    method: 'post'
  }).then((res) => {
    if (res.data.code === 'Success') {
      return Promise.resolve(res.data)
    } else {
      throw new Error('账号或密码错误')
    }
  })
}

export const getUserInfo = (token) => {
  //return axios.request({
  //  url: 'get_info',
  //  params: {
  //    token
  //  },
  //  method: 'get'
  //})
  return Promise.resolve({
    data: {
      avator: '',
      user_name: 'admin',
      user_id: 1,
      access: ['super_admin']
    }
  })
}

export const logout = () => {
  return new Promise((resolve, reject)=>{
		resolve();
	})
}
