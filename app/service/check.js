const Service = require('egg').Service;

class CheckService extends Service {
    async do( body ) {
        let {id, action} = body;
        if ( action == 0 ) {
            let result = await this.app.mysql.delete('task', {id});
            if ( result ) {
                return {
                    status: true,
                    msg: '删除成功',
                }
            } else {
                return {
                    status: false,
                    msg: '删除失败',
                }
            }
        } else {
            let result = await this.app.mysql.update('task', {
                id,
                task_state: 1
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

module.exports = CheckService;