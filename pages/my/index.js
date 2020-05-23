import area from '../../utils/area'
import common from '../../utils/common'
import { Api } from '../../apis/index.js'
const api = new Api()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		provinceName: '',
		cityName: '',
		areaList: area.areaList,
		userInfo: '',
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
    let userInfo = wx.getStorageSync('userInfo')
		let areaList = this.data.areaList
		let provinceName = ''
		let cityName = ''
		let age = common.getAstro(this.data.userInfo.birthday)
		areaList.map(item => {
			if (userInfo.province == item.area_id) {
				item.city.map(citem => {
          if (userInfo.city == citem.area_id) {
						provinceName = item.area_name
						cityName = citem.area_name
					}
				})
			}
		})
		this.setData({
			provinceName,
			cityName,
			age,
      userInfo
		})
    this.getUserRecord()
	},

  // 获取用户播放记录
  getUserRecord () {
    console.log(this.data.userInfo)
    let params = {
      uid: this.data.userInfo.userId,
      type: 0
    }
    api.getUserRecord(params).then(res => {
      console.log(res)
    })
  },

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})