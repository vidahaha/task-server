const Service = require('egg').Service;

class LoginService extends Service {
  	async checkLogin( body ) {
        let {type, name, id, password} = body;
        let result = {};
        if ( type == 0 ) {
            result = await this.app.mysql.get('student', {
                name,
                studentId: id,
                password
            });
        } else {
            result = await this.app.mysql.get('teacher', {
                name,                
                teacherId: id,
                password
            });
        }
    	return result;
  	}
}

module.exports = LoginService;