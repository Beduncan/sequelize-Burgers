//exporting burgers to be called later in burger_controllers

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("./../config/connction.js");

var Burgers = sequelize.define("burgers" ,{
  burgers: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
},{
  timestamps: false
});

Burgers.sync();

module.exports = Burgers
