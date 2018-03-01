var express = require('express')
var bodyParser = require("body-parser");
var methodOverride = require('method-override')

//set up express app
var app = express();

// set up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//accessing the public folder for css
app.use(express.static(process.cwd() + "/public"));


//set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//link contoller
var router = require("./controllers/burgers_controllers.js");
app.use('/', router);

var db = require("./models")

var PORT = process.env.PORT || 3000;

//starts the server to began listening
db.sequelize.sync().then(function(){
	app.listen(process.env.PORT || 3000, function() {
  console.log("App listening on PORT " + PORT);
	});
});	
