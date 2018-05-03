const Service = require('egg').Service;

class ApproveService extends Service {
    async do( body ) {
        let {id, action} = body;
        if ( action == 0 ) {
            let result = await this.app.mysql.update('task', {id,
                reward_state: 2 
            });
            if ( result ) {
                return {
                    status: true,
                    msg: '拒绝成功',
                }
            } else {
                return {
                    status: false,
                    msg: '拒绝失败',
                }
            }
        } else {
            let result = await this.app.mysql.update('task', {
                id,
                reward_state: 1
            });  
            if ( result ) {
                return {
                    status: true,
                    msg: '审批成功',
                }
            } else {
                return {
                    status: false,
                    msg: '审批失败',
                }
            }          
        } 
    }
}

module.exports = ApproveService;