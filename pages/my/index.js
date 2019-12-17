import area from '../../utils/area'
import common from '../../utils/common'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		province: "330000",
		provinceName: '',
		city: "330100",
		cityName: '',
		areaList: area.areaList
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let that = this
		this.data.areaList.map((item, index) => {
			if(this.data.province === item.area_id) {
				item.city.map((citem, cindex) => {
					if(this.data.city === citem.area_id) {
						this.setData({
							provinceName: item.area_name,
							cityName: citem.area_name
						})
					}
				})
			}
		})
		console.log(common.getAstro(9, 29))
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

	getFooterHeight (e) {
		this.setData({
			footerHeight: e.detail
		})
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})