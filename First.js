var express=require('express');
var app=express();
var path = require("path");
var bodyParser=require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
//app.use(express.static(__dirname + '/Express'));
//Store all HTML files in view folder.
//app.use(express.static(__dirname + '/Script'));
app.get('/',function(req,res){
console.log("re");
	console.log(__dirname);
	res.sendFile('/home/com55/Desktop/express login/login.html');
	//res.sendFile('html5.html');
}); 
app.post('/index.html',urlencodedParser,function(req,res){
console.log("re");
	
	// res.sendFile(path.join(__dirname+'/index.html'));
	// res.send('Username: ' + req.query['username']);
	 //res.send('Username: ' + req.body.username+" "+req.body.password);
	 res.send(req.body);

	//res.sendFile('html5.html');
});
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
