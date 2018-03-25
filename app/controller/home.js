const Controller = require('egg').Controller;

class HomeController extends Controller {
	async login() {
		const userInfo = await this.ctx.service.login.find(0);
		this.ctx.body = userInfo;
	}
}

module.exports = HomeController;