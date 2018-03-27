'use strict';

module.exports = appInfo => {
	const config = {};
	config.keys = '12345646';

	config.security = {
		csrf: {
			//enable: false,
		},
		domainWhiteList: [ 'http://localhost:3000' ]
	};

	config.cors = {
		origin:'http://localhost:3000',
		credentials: true,
	};

	config.mysql = {
		// database configuration
		client: {
		// host
		host: 'localhost',
		// port
		port: '3306',
		// username
		user: 'root',
		// password
		password: '',
		// database
		database: 'hzauca_task',    
		},
		// load into app, default is open
		app: true,
		// load into agent, default is close
		agent: false,
	}

	return config;
}