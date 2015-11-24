var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/blog_users', function(err, db) {
  		if(err) throw err;
  		console.log("connection create successfully");
      		// console.log("is there");
  			//res.render('registration.html');
});

export.module = MongoClient;