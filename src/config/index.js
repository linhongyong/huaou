export default {
	/**
	* @description 配置显示在浏览器标签的title
	*/
	title: '华瓯监理资料管理系统',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'https://www.believeyou.top',
		// dev: 'https://www.therethey.com',
		// dev: 'http://192.168.126.1:18088',
		// pro: 'https://www.believeyou.top',
		pro: 'https://www.therethey.com'
  }
}
