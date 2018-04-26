module.exports = app => {
	const { router, controller } = app;
    router.post('/login', controller.home.login);
    router.post('/reg', controller.home.reg);
	router.get('/task', controller.home.task);		    		    		    		
}