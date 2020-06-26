// /routes/users

var express = require('express');

var router = express.Router();

var User = require('../models/userModel');

router.get('/' , function(req, res){
	console.log(req.query);
	res.send("/users!!");
	/*
	User.find().sort({username : 1}).exec(function(err , users){
		if(err) return res.json(err);
		res.json(users);
	});
	*/
});


router.post('/' , function(req , res){
	console.log("create users!!!");
	console.log(req.body);

	
	
	User.create( { name : req.body.name , 
				   email : req.body.email ,
				   pssword : req.body.password} , function (err , user){
		                                             if ( err ) 
														 return res.json(err);
		                                             else res.sendStatus(200);
	                                             })
	
	/*
	User.create( req.body , function( err , user){
		if(err) return res.json(err);
	});
	*/
	
});

module.exports = router;