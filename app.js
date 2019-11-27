const wxApiPromiseFunc = require('./utils/wxApiPromiseFun');

App({
  onLaunch: function () {
  },
	onShow: function () {
		let that = this;
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
		isIphoneX: false
  }
})