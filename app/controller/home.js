const Controller = require('egg').Controller;

class HomeController extends Controller {
	async login() {
		const login = this.ctx.service.login;
		const body =  this.ctx.request.body;
		const res = await login.checkLogin( body );		

		this.ctx.body = {
			status: !!res
		}
    }
    
    async isLogin() {
        
    }
}

module.exports = HomeController;