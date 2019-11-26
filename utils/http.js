/**
 * api 调用封装
 */

// 可以使用config as 其他名称 改变名称， 导入多个用逗号隔开
import {
	config
} from '../config.js';

class HTTP {
	request({
		url,
		data,
		method = "GET"
	}) {
		return new Promise((resolve, reject) => {
			this._request(url, resolve, reject, data, method)
		})
	}

	_request(url, resolve, reject, data={}, method = "GET") {
		wx.request({
			url: config.api_base_url + url,
			method: method,
			data: data,
			header: {
				'content-type': 'application/x-www-form-urlencoded', // 默认值
			},
			success: (res) => {
				let response = res.data;
				if (response.code != 200) {
					// if (response.code != 40011 && response.code != 40012) {
					// 	wx.showToast({
					// 		title: response.error_msg,
					// 		icon: 'none',
					// 		duration: 2000
					// 	})
					// }
					// reject(new Error(response.error_msg));
				}
				resolve(response);
			},
			fail: (err) => {
				reject()
			}
		})
	}
}

export {
	HTTP
}