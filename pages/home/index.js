const app = getApp()
import { Api } from '../../apis/index.js'
const api = new Api()

Page({
  data: {
    playing: false, // 是否执行播放动画
		cardCur: 0,
		currentDay: 0,
		swiperList: [],
		personalizedList: [],
		newSongList: []
  },
  onLoad: function () {
		this.getBanner()
		this.getPersonalized()
		this.getNewsong()
		this.getDay()
  },
	cardSwiper(e) {
		this.setData({
			cardCur: e.detail.current
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
	// 获取当天日期
	getDay () {
		let date = new Date()
		let currentDay = date.getDate()
		this.setData({
			currentDay
		})
	}
})
