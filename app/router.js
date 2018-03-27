module.exports = app => {
	const { router, controller } = app;
	router.get('/login', controller.home.login);
	router.post('/login', controller.home.login);		
}