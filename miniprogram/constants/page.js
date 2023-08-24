
// 页面管理工具类
const page = {
	// 用户模块
	user: {
		login: '',
		bind: ''
	},

	// 首页模块
	home: {
    index: '/pages/home/index/index'			// 首页tab
	},
	// 我的模块
	mine: {
		index: "/pages/mine/index/index",//我的tab
	}
}

// export必须要放在最下面，否则其他页面引用不到
export default page
