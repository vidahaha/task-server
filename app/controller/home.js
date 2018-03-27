const Controller = require('egg').Controller;

class HomeController extends Controller {
	async login() {
		const login = this.ctx.service.login;
		const body =  this.ctx.request.body;
		const userInfo = await login.checkLogin( body );		
		// 调用 rotateCsrfSecret 刷新用户的 CSRF token
		this.ctx.rotateCsrfSecret();
		this.ctx.body = {
			success: true,
			userInfo,
		}
	}
}

module.exports = HomeController;