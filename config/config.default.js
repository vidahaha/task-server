'use strict';

module.exports = appInfo => {
	const config = {};
	config.keys = '12345646';

	config.security = {
		csrf: {
			enable: false,
		},
		domainWhiteList: [ 'http://localhost:8080', 'http://www.vidahaha.top' ]
	};

	config.cors = {
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
        //password: '123456',
		password: 'qq937634115',
		// database
		database: 'social_practice_management',    
		},
		// load into app, default is open
		app: true,
		// load into agent, default is close
		agent: false,
	}

	return config;
}