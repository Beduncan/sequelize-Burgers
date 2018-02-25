//import express and burgers.js
var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
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
    burger.findAll({}).then(function(data) {
        var hbsObject = { burgers : data }
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});
//create a route to create a burger
router.post("/new/burger", function(req, res){
	 burger.create({ burgers: req.body.burgerName }, 
        { devoured: req.body.devoured }).then(function(data) {
        		console.log(req.body.burgerName);
		// redirecting to the home page
		res.redirect("/index");
	});
});
router.post('/update/:id', function (req, res) {
	//calling updateOne from burgers.js
    burger.update({ devoured: true },{
        // fields: ['devoured'],
        where: { id: req.params.id }
    }).then(function(data) {
        // redirecting to the home page
        res.redirect('/');
    });
});	
module.exports = router;