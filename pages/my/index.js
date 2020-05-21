const app = getApp()
console.log(app.globalData)
import area from '../../utils/area'
import common from '../../utils/common'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		province: app.globalData.userInfo.province,
		provinceName: '',
		city: app.globalData.userInfo.city,
		cityName: '',
		areaList: area.areaList,
		userInfo: app.globalData.userInfo,
		age: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this._init()
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

	// 初始化
	_init () {
		let areaList = this.data.areaList
		let provinceName = ''
		let cityName = ''
		let age = common.getAstro(this.data.userInfo.birthday)
		areaList.map(item => {
			if(this.data.province == item.area_id) {
				item.city.map(citem => {
					if(this.data.city == citem.area_id) {
						provinceName = item.area_name
						cityName = citem.area_name
					}
				})
			}
		})
		this.setData({
			provinceName,
			cityName,
			age
		})
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})