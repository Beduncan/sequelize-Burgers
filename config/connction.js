var Sequelize = require("sequelize");
require("dotenv").config();


// Creates mySQL connection using Sequelize
var sequelize =new Sequelize("burgers_dbs", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;