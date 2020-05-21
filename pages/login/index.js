const app = getApp()
import { User } from '../../apis/login.js'
const userApi = new User()

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		phone: '',
		password: ''
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

	// 获取手机号
	getPhone(e) {
		this.setData({
			phone: e.detail.value
		})
	},

	// 获取手机号
	getPassword(e) {
		this.setData({
			password: e.detail.value
		})
	},

	// 登录
	login() {
		if (!this.data.phone) {
			wx.showToast({
				title: '请输入手机号',
				icon: 'none',
				duration: 2000
			})
			return
		}
		if (!this.data.password) {
			wx.showToast({
				title: '请输入密码',
				icon: 'none',
				duration: 2000
			})
			return
		}
		userApi.login(this.data.phone, this.data.password).then(res => {
			if(res.code == 200) {
				wx.showToast({
					title: '登录成功',
					icon: 'success',
					duration: 2000
				})
				wx.setStorageSync('isLogin', true)
				wx.setStorageSync('userInfo', res.profile)
				wx.setStorageSync('loginToken', res.token)

				// 设置到globalData
				setTimeout(() => {
					wx.reLaunch({
						url: `/pages/home/index`
					})
				}, 1000)
			}
		})
	},
})