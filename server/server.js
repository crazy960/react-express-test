const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 10050;
const bodyparser = require('body-parser');


app.use(bodyparser.json());
app.use( bodyparser.urlencoded({ extended: true }));

/*
app.use('/api' , function(req , res){
	res.json({username : 'bryan'});
})
*/


app.use(function (req, res, next) { // 1
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
	console.log(req.body);
  next();
});

mongoose.connect('mongodb://127.0.0.1:27017/admin',{ useNewUrlParser : true, user : 'root' , pass : '1234' , dbName : 'test'},
				 function(err){
	if(err)
		console.log("mongodb connection err");
	else
		console.log("mongodb connect success");
	
});


app.use('/users', require('./routes/users'));



app.listen(port , function(){
	console.log(`express is running ${port}`);
})
