const Service = require('egg').Service;

class ApplyService extends Service {
  	async do( body ) {
        let {type, task_full_name, task_time, task_place, team_name, task_num} = body;
        let result = await this.app.mysql.insert('task', {
            type, 
            task_full_name, 
            task_time, 
            task_place, 
            team_name, 
            task_num,
            task_state: 0
        });
        if ( result ) {
            return {
                status: true,
                msg: '申请成功',
            }
        } else {
            return {
                status: false,
                msg: '申请失败',
            }
        }
  	}
}

module.exports = ApplyService;