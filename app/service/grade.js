const Service = require('egg').Service;

class GradeService extends Service {
    async do( body ) {
        let {id, grade} = body;
        let result = await this.app.mysql.update('task', {
            id,
            grade
        });
        if ( result ) {
            return {
                status: true,
                msg: '打分成功',
            }
        } else {
            return {
                status: false,
                msg: '打分失败',
            }
        }
    }
}

module.exports = GradeService;