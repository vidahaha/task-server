const Controller = require('egg').Controller;

class AdminController extends Controller {

    async check () {
        const check = this.ctx.service.check;
        const body =  this.ctx.request.body;
        const res = await check.do( body );		
        
		this.ctx.body = {
            status: res.status,
            msg: res.msg
		}
    }

    async grade () {
        const grade = this.ctx.service.grade;
        const body =  this.ctx.request.body;
        const res = await grade.do( body );		
        
		this.ctx.body = {
            status: res.status,
            msg: res.msg
		}
    }

    async approve () {
        const approve = this.ctx.service.approve;
        const body =  this.ctx.request.body;
        const res = await approve.do( body );		
        
		this.ctx.body = {
            status: res.status,
            msg: res.msg
		}
    }
}

module.exports = AdminController;