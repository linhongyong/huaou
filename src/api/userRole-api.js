import axios from '@/libs/api.request'

let userRole = new Object();


userRole.deleteUserRole = (data, fnOk, fnError) => {
  axios.request({
    url: `/userRole/delete?id=${data.id}`,
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

userRole.addUserRole = (data, fnOk, fnError) => {
  axios.request({
    url: '/userRole/add',
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
export default userRole