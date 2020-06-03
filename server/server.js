const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 10050;
const bodyparser = require('body-parser');


app.use(bodyparser.json());
app.use('/api' , function(req , res){
	res.json({username : 'bryan'});
})

mongoose.connect('mongodb://127.0.0.1:27017/admin',{ useNewUrlParser : true, user : 'root' , pass : '1234' , dbName : 'test'},
				 function(err){
	if(err)
		console.log("mongodb connection err");
	else
		console.log("mongodb connect success");
	
});


//app.get('/api', (req, res) => res.send('Hello World!'))

app.listen(port , function(){
	console.log(`express is running ${port}`);
})
