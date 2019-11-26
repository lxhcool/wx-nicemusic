/**
 * 异步操作方法
 */
function wxApiPromiseFunc(fn) {
	return function (obj = {}) {
		return new Promise((resolve, reject) => {
			obj.success = function (res) {
				resolve(res)
			}

			obj.fail = function (res) {
				reject(res)
			}

			fn(obj)
		})
	}
}

module.exports = {
	wxApiPromiseFunc
}