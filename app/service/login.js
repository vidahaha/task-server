const Service = require('egg').Service;

class LoginService extends Service {
  	async find(uid) {
    	const user = await this.app.mysql.get('member', {id: uid});
    	return user;
  	}
}

module.exports = LoginService;