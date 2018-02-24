var burgers = ("./../models/burgers.js")
var table = "burgers"
var orm = {

	selectAll: function (Cb) {
		//getting all for the table
		var queryString = "SELECT * FROM " + table;
		connection.query(queryString, function(err, res){
			if (err) throw err
			//calling the results of the quert to send into burger file
			Cb(res);
		});
	},
	insertOne: function(burgerName, Cb){
		//query funstion to insert on in to a table at ?
		var bur = String(burgerName);
		connection.query("INSERT INTO " + table + " SET ?",
		{
			burgers: bur,			
			devoured: false,
		},function(err, result){
			if (err) throw err;
			//calling back the result to send it to burgers.js
			Cb(result);
		});
	},
	updateOne: function(burgerId, Cb) {
		//query function to set devoured to true at id 
    connection.query("UPDATE burgers SET devoured=1 WHERE id=?", [burgerId], function(err, res) {
      if (err) throw err;
     //callingback result so it can be sent to burgers.js
      Cb(res);
    });
 	},
};
module.exports = orm;


