import {
	HTTP
} from '../utils/http.js'

class User extends HTTP {
  login (phone, password) {
		return this.request({
			url: 'login/cellphone',
			data: {
        phone,
        password
			}
		})
	}
}

export {
	User
}