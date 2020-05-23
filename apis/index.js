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
	// 获取MV排行
	getTopMv (params) {
		return this.request({
			url: 'top/mv',
			data: {
				...params
			}
		})
	}
  // 获取全部MV
  getMv(params) {
    return this.request({
			url: 'mv/all',
      data: {
        ...params
      }
    })
  }
  
  // 获取用户播放记录
  getUserRecord(params) {
    return this.request({
      url: 'user/record',
      data: {
        ...params
      }
    })
  }
}

export {
	Api
}
