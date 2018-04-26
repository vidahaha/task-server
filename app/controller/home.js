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
    
    async reg () {
        const reg = this.ctx.service.reg;
		const body =  this.ctx.request.body;
		const res = await reg.checkReg( body );		

		this.ctx.body = {
            status: res.status,
            msg: res.msg
		}
    }

    async task () {
        const task = this.ctx.service.task;
		const res = await task.getTask();		

		this.ctx.body = {
            status: res.status,
            data: res.data
		}
    }
}

module.exports = HomeController;