module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html');//localhost:3000하면 실행되는 것(=index.html).
    });

    app.get('/site-register',function(req,res){
        res.render('site_registration.html');
    });
	
	

}