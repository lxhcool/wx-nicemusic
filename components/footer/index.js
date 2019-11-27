const app = getApp()

Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		current: {
			type: Number,
			value: 1
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
		}
	},
	attached () {
		this.isX()
	}
})
