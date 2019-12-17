const app = getApp()

Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		current: {
			type: Number,
			value: 1
		},
		isOpacity: {
			type: Boolean,
			value: true
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		isX: false
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		isX() {
			let isX = app.globalData.isIphoneX
			this.setData({
				isX
			})
		},
		toHome() {
			if(this.data.current === 1) {
				return
			}
			wx.reLaunch({
				url: '/pages/home/index'
			})
		}
	},
	attached () {
		this.isX()
	}
})
