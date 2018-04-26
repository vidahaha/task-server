const Service = require('egg').Service;

class RegService extends Service {
  	async checkReg( body ) {
        let {type, name, id, password} = body;
        let result = {};
        let table = '';
        type == 0 ? table = 'student' : table = "teacher";

        result = await this.app.mysql.get(table, {name});

    	if( result ) {
            return {
                status: false,
                msg: '用户名已存在'
            }
        } 
        
        
        if ( type == 0 ) {
            await this.app.mysql.insert(table, {
                name,
                studentId: id,
                password
            });
        } else {
            await this.app.mysql.insert(table, {
                name,
                teacherId: id,
                password
            });
        }
        return {
            status: true,
            msg: '注册成功'
        }
  	}
}

module.exports = RegService;