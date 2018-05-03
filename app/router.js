module.exports = app => {
    const { router, controller } = app;
    
    router.post('/login', controller.home.login);
    router.post('/reg', controller.home.reg);
    router.get('/task', controller.home.task);
    router.post('/apply', controller.home.apply);	

    // admin
    router.post('/check', controller.admin.check);
    router.post('/grade', controller.admin.grade);	    		    		    		    		    		    		    		    		    		    		    		    		    		    		    		
    router.post('/approve', controller.admin.approve);	    		    		    		    		    		    		    		    		    		    		    		    		    		    		    		
    	    		    		    		    		    		    		    		    		    		    		    		    		    		    		    		
}