import axios from '@/libs/api.request'

let menu = new Object();

menu.addMenu = (data) => {
  console.log('addMenu');
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/menu/add',
      method: 'post',
      data
    }).then((res) => {
      if (res.data.code == "Success") {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    })
  })
  // axios.request({
  //   url: '/menu/add',
  //   method: 'post',
  //   data
  // }).then(res => {
  //   console.log(res)
  //   if (res.data.code != "Success") {
  //     fnError(res.data)
  //   } else {
  //     fnOk(res.data)
  //   }
  // })
}
menu.deleteMenu = (data, fnOk, fnError) => {
  axios.request({
    url: `/menu/delete?id=${data.id}`,
    method: 'post',
  }).then(res => {
    console.log(res)
    if (res.data.code != "Success") {
      fnError(res.data)
    } else {
      fnOk(res.data)
    }
  })
}
menu.updateMenu = (data, fnOk, fnError) => {
  axios.request({
    url: '/menu/update',
    method: 'post',
    data
  }).then(res => {
    console.log(res)
    if (res.data.code != "Success") {
      fnError(res.data)
    } else {
      fnOk(res.data)
    }
  })
}
menu.getMenus = (data, fnOk, fnError) => {
  axios.request({
    url: `/menu/getMenusOwn`,
    method: 'get',
  }).then(res => {
    if (res.data.code != "Success") {
      fnError(res.data)
    } else {
      fnOk(res.data)
    }
  })
}
menu.getMenusLevel1 = (data, fnOk, fnError) => {
  axios.request({
    url: `/menu/getMenusByParentId?parentId=0`,
    method: 'get',
  }).then(res => {
    if (res.data.code != "Success") {
      fnError(res.data)
    } else {
      fnOk(res.data)
    }
  })
}
export default menu
