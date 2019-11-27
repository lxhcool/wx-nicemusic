// components/loading/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		isFixed: {
			type: Boolean,
			value: false
		},
		isShow: {
			type: Boolean,
			value: false,
		},
		finishedText: {
			type: String,
			value: '加载中...'
		},
		noData: {
			type: Boolean,
			value: false
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})
