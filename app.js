const wxApiPromiseFunc = require('./utils/wxApiPromiseFun');

App({
  onLaunch: function () {
		let that = this
		let isLogin = wx.getStorageSync('isLogin')
		let userInfo = wx.getStorageSync('userInfo')
		if (isLogin) {
			that.globalData.userInfo = userInfo
			that.globalData.isLogin = isLogin
		} else {
			wx.reLaunch({
				url: `/pages/login/index`
			})
			that.globalData.userInfo = {}
			that.globalData.isLogin = false
		}
  },
	onShow: function () {
		let that = this
		wx.getSystemInfo({
			success: (res) => {
				let model = res.model;
				if (model.search('iPhone X') != -1) {
					that.globalData.isIphoneX = true
				}
			}
		})
	},
	promiseFunc: wxApiPromiseFunc.wxApiPromiseFunc,
  globalData: {
		isIphoneX: false,
		isLogin: false,
		userInfo: {}
  }
})