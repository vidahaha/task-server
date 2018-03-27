const Service = require('egg').Service;

class LoginService extends Service {
  	async checkLogin( body ) {
		let {name, password} = body;
    	const user = await this.app.mysql.get('member', {name: name});
    	return user;
  	}
}

module.exports = LoginService;