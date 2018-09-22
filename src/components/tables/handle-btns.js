const btns = {
  delete: (h, params, vm) => {
    return h('Poptip', {
      props: {
        confirm: true,
        title: '你确定要删除吗?'
      },
      on: {
        'on-ok': () => {
        	console.warn(params);
          vm.$emit('on-delete', params)
//        vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
        }
      }
    }, [
      h('Button', {
        props: {
          type: 'text',
          ghost: true
        }
      }, [
        h('Icon', {
          props: {
            type: 'md-trash',
            size: 18,
            color: '#000000'
          }
        })
      ])
    ])
  },
//	add:(h, params, vm) => {
//  return h('Button', {
//    	props:{
//        type: 'text',
//        ghost: true
//      },
//      on: {
//      'click': () => {
//      	console.log('modal click');
//      	vm.$emit('modalClick', true);
//      }
//    }
//    }, [
//      h('Icon', {
//        props: {
//          type: 'ios-create',
//          size: 18,
//          color: '#000000'
//        }
//      })
//    ])
//add:(h, params, vm) => {
//  return h('Modal', {
//    props: {
//    	vModel : "true" ,
//    	fullscreenTitle : "Fullscreen Modal"
//    }
//    
//  }, [
//    h('Button', {
//      props: {
//        type: 'text',
//        ghost: true
//      }
//    }, [
//      h('Icon', {
//        props: {
//          type: 'md-trash',
//          size: 18,
//          color: '#000000'
//        }
//      })
//    ])
//  ])
//},
    
    
    /*h('Icon', {
      props: {
        type: 'md-trash',
        size: 18,
        color: '#000000'
      }
    })*/
//}
}

export default btns
