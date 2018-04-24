module.exports = app => {
	const { router, controller } = app;
	router.get('/login', controller.home.isLogin);
	router.post('/login', controller.home.login);		
}