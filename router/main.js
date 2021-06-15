module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html');//localhost:3000하면 실행되는 것(=index.html).
    });

    app.get('/attend',function(req,res){
        res.render('attendance.html');
    });

    app.get('/contract',function(req,res){
        res.render('contract.html');
    });

    app.get('/mgr',function(req,res){
        res.render('manager.html');
    });

    app.get('/noti',function(req,res){
        res.render('notification.html');
    });

    app.get('/site-show',function(req,res){
        res.render('site_show.html');
    });

    app.get('/site-register',function(req,res){
        res.render('site_registration.html');
    });

    app.get('/token',function(req,res){
        res.render('token.html');
    });
	
	

}