var orm = require("../config/orm.js")
//createing varible to export
var burgers = {
  //
  selectAll: function (Cb) {
    orm.selectAll(function(res){
      //call back res so it can be used in burger_controllers
      Cb(res);
    });
  },
  //
  insertOne: function(burgerName, Cb){
    orm.insertOne(burgerName, function(res){
      //callback the result of insertone so it can be used later we are doing this to hind mysql function
      Cb(res);
    });
  },
  updateOne: function (burgerId, Cb) {
    orm.updateOne(burgerId, function (res){
      //calling back the result of updateone to be used in burger.js
      Cb(res);
    })
  }

  
}
//exporting burgers to be called later in burger_controllers

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Burgers = squelize.define("churches",{
  name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
},{
  timestamps: false
});

Burgers.sync();

module.exports = burgers
