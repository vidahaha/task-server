const Service = require('egg').Service;

class TaskService extends Service {
  	async getTask () {
        let result = await this.app.mysql.select('task', {
            columns: ['id', 'type', 'team_name', 'task_full_name', 'task_num', 'task_time', 'task_place', 'task_state', 'reward_state']
        });

        result.forEach(ele => {
            ele['id'] = '000' + ele['id'];
            ele['task_state'] == 0 ? ele['task_state'] = '待审批' : ele['task_state'] = '已审批';
            ele['reward_state'] == null ? ele['reward_state'] = '未申请' 
            : ele['reward_state'] == 0 ? ele['reward_state'] = '待审批' 
            : ele['reward_state'] = '已审批';
            
        });

        return {
            status: !!result,
            data: result 
        }
  	}
}

module.exports = TaskService;