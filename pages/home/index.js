const app = getApp()
const skeletonData = require('../../skeletonData/index.js');
import { Api } from '../../apis/index.js'
const api = new Api()

Page({
  data: {
		skeleton: {
			loadingTypes: ['spin', 'chiaroscuro', 'shine', 'null'],
			selectedLoadingType: 'shine',
			isDev: false,
			bgcolor: '#FFF',
			skeletonData
		},
		pageIsReady: false,
    playing: false, // 是否执行播放动画
		cardCur: 0,
		currentDay: 0,
		swiperList: [],
		personalizedList: [],
		newSongList: [],
		area: '',
		limit: 20, 
		offset: 0,
		mvList: [],
		isShow: false,
		isFixed: false,
		finishedText: '努力加载中...',
		loadStatus: true,
		floorstatus: false,
		isX: false
  },
  onLoad: function () {
		this.getBanner()
		this.getPersonalized()
		this.getNewsong()
		this.getTopMv(this.data.area, this.data.limit, this.data.offset)
		this.getDay()
		this.isX()
		setTimeout(() => {
			this.setData({
				pageIsReady: true
			});
		}, 1000);
  },
	cardSwiper(e) {
		this.setData({
			cardCur: e.detail.current
		})
	},
	isX () {
		let isX = app.globalData.isIphoneX;
		this.setData({
			isX
		})
	},
	// 获取banner
	getBanner () {
		api.getBanner().then(res => {
			this.setData({
				swiperList: res.banners
			})
		})
	},
	// 获取推荐歌单
	getPersonalized () {
		api.getPersonalized().then(res => {
			this.setData({
				personalizedList: res.result
			})
		})
	},
	// 获取推荐新歌
	getNewsong	() {
		api.getNewsong().then(res => {
			this.setData({
				newSongList: res.result
			})
		})
	},
	// 获取Mv
	getTopMv(area, limit, offset) {
		let params = {
			area, limit, offset
		}
		try {
			this.setData({
				loadStatus: false
			})
			api.getTopMv(params).then(res => {
				let mvList = this.data.mvList.concat(res.data)
				this.setData({
					mvList
				})
				if (res.hasMore) {
					let offset = this.data.offset + 20
					this.setData({
						finishedText: '努力加载中...',
						isShow: true,
						loadStatus: true,
						offset
					})
				} else {
					this.setData({
						finishedText: '厉害呀，到底了~',
						isShow: false
					})
				}
			})
		} catch (error) {
			console.log(error)
		}
		
	},
	// 获取当天日期
	getDay () {
		let date = new Date()
		let currentDay = date.getDate()
		this.setData({
			currentDay
		})
	},
	// 获取滚动条当前位置
	onPageScroll(e) {
		if (e.scrollTop > 100) {
			this.setData({
				floorstatus: true
			});
		} else {
			this.setData({
				floorstatus: false
			});
		}
	},
	/**
   * 页面上拉触底事件的处理函数
   */
	onReachBottom: function () {
		if (this.data.loadStatus) {
			setTimeout(() => {
				this.getTopMv(this.data.area, this.data.limit, this.data.offset)
			}, 1000)
		}
	} 
})
