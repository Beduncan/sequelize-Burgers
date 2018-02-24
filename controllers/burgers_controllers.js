//import express and burgers.js
var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js'); 
//create route the delfault to the index page. index redirected route.get
// create route to home page or index page render burgers. route.get
//create a route to create bugers route.post
//delete route. this will be a route as well
//export 
router.get("/", function (req, res) {
	res.redirect('/index');
});
router.get("/index", function(req, res){
		//running selectAll from burgers
	burger.selectAll(function(data){
		//displaying useing handlebars
		var handlebars = {burgers: data};
		console.log(handlebars);
		// rendering to index or home page
		res.render('index', handlebars);
	});	
});
//create a route to create a burger
router.post("/new/burger", function(req, res){
	//callling the insetone function from burgers
	console.log(req.body);
	burger.insertOne(req.body.burgerName, function(result){
		// console.log(result);
		// redirecting to the home page
		res.redirect("/index");
	});
});
router.post('/update/:id', function (req, res) {
	//calling updateOne from burgers.js
    burger.updateOne(req.params.id, function(data) {
        // redirecting to the home page
        res.redirect('/');
    });
});	
module.exports = router;