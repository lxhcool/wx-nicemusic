// pages/player/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		bg: 'http://p1.music.126.net/678XIIRmFk1IGuv9RB43HQ==/109951163131639447.jpg',
		title: '芙蓉雨',
		isLyric: false,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	tabLyric () {
		this.setData({
			isLyric: !this.data.isLyric
		})
	}
})