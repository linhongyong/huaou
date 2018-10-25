import Main from '@/view/main';
import parentView from '@/components/parent-view';

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  //--------------------------------------------hong----------------------------------------start
  {
    //旁站记录
    path: '/pangzhan',
    name: 'pangzhan',
		redirect: '/jxgz',
    meta: {
      icon: 'ios-folder-open',
      title: '旁站',
			hideInMenu: true,
    },
    component: Main,
    children: [
      {
        path: 'jxgz',
        name: 'jxgz',
        meta: {
					hideInMenu: true,
          icon: 'md-folder',
          title: '机械灌注桩'
        },
        component: parentView,
        children: [
          {
            path: 'list',
            name: 'list',
            meta: {
              icon: 'ios-list-box',
              title: '机械灌注旁站管理',
							hideInMenu: true,
            },
            component: () => import('@/view/pangzhan/jxgz/jxgz.vue')
          },
          {
            path: 'jxgztmpl',
            name: 'jxgztmpl',
            meta: {
              icon: 'ios-list-box',
              title: '机械灌注模板管理',
							hideInMenu: true,
            },
             component: () => import('@/view/pangzhan/jxgz-tmpl/jxgz-tmpl.vue')

          }
        ]
      },
      {
        //水泥搅拌
        path: 'snjb',
        name: 'snjb',
        meta: {
					hideInMenu: true,
          icon: 'md-folder',
          title: '水泥搅拌'
        },
        component: parentView,
        children: [
          {
            path: 'snjblist',
            name: 'snjblist',
            meta: {
              icon: 'ios-list-box',
              title: '水泥搅拌旁站管理',
							hideInMenu: true,
            },
            component: () => import('@/view/pangzhan/snjb/snjb.vue')
          },
          {
            path: 'snjbtmpl',
            name: 'snjbtmpl',
            meta: {
              icon: 'ios-list-box',
              title: '水泥搅拌模板管理',
							hideInMenu: true,
            },
             component: () => import('@/view/pangzhan/snjb-tmpl/snjb-tmpl.vue')

          }
        ]
      },
      {

        path: 'commom',
        name: 'commom',
        meta: {
					hideInMenu: true,
          icon: 'md-folder',
          title: '通用旁站'
        },
        component: parentView,
        children: [
         {
            path: 'commomlist',
            name: 'commomlist',
            meta: {
              icon: 'ios-list-box',
              title: '通用旁站',
							hideInMenu: true,
            },
             component: () => import('@/view/pangzhan/common/common.vue')
      
          }
        ]
      }
      
    ]
  },
  {
    path: '/project',
    name: 'project',
		redirect: '/project_list',
    meta: {
			hideInMenu: true,
      icon: 'ios-podium',
      title: '项目管理'
    },
    component: Main,
    children: [
      {
        path: '/project_list',
        name: 'project_list',
        meta: {
          icon: 'ios-list-box',
          title: '项目管理',
					hideInMenu: true,
        },
        component: () => import('@/view/project/project.vue')
      }
    ]
  },
  {
    path: '/sys',
    name: 'sys',
    meta: {
      icon: 'md-person',
      title: '系统管理',
			hideInMenu: true,
    },
    component: Main,
    children: [
      {
        path: '/user_list',
        name: 'user_list',
        meta: {
          icon: 'ios-podium',
          title: '用户管理',
					hideInMenu: true,
        },
        component: () => import('@/view/user/user.vue')
      },
      {
        path: '/role_list',
        name: 'role_list',
        meta: {
          icon: 'ios-list-box',
          title: '职务管理',
					hideInMenu: true,
        },
        component: () => import('@/view/role/role.vue')
      },
      {
        path: '/menu_list',
        name: 'menu_list',
        meta: {
          icon: 'ios-list-box',
          title: '资源管理',
					hideInMenu: true,
        },
        component: () => import('@/view/menu/menu.vue')
      },
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
  
];
