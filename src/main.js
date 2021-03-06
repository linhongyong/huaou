// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import 'iview/dist/styles/iview.css'
import './index.less'
import '@/assets/icons/iconfont.css'

import '@/assets/styles/display.css'

import tools from "_u/tools.js";
import math from "_u/math.js";

// import '@/mock'
// 实际打包时应该不引入mock
/* eslint-disable */
//if (process.env.NODE_ENV !== 'production') require('@/mock')
Vue.prototype.isAccessForButton  = (code)=> {
	let buttons = [];
	if(store.state.user && store.state.user.buttonList.length){
		buttons =   store.state.user.buttonList
	}
	else{
		let buttonList = JSON.parse(localStorage.getItem("buttonList"))
		if(buttonList && buttonList.length){
			buttons =  buttonList;
			store.commit("setButtonList", buttonList)
		}else{
			buttons =  [];
		}
	}
	for(let i=0; i<buttons.length; i++){
		if(buttons[i].url == code){
			return true;
		}
	}
	return false;
}

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})  
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
