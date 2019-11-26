import {
	HTTP
} from '../utils/http.js'

class Api extends HTTP {
	// 获取banner数据
	getBanner () {
		return this.request({
			url: 'banner',
			data: {
				type: 2
			}
		})
	}
	// 获取推荐歌单
	getPersonalized () {
		return this.request({
			url: 'personalized',
			data: {
				limit: 6
			}
		})
	}
	// 获取推荐新歌
	getNewsong() {
		return this.request({
			url: 'personalized/newsong'
		})
	}
  // 获取全部MV
  getMv(area, limit, offset) {
    return this.request({
      url: 'top/mv',
      data: {
        area,
        limit,
        offset
      }
    })
  }
}

export {
	Api
}
