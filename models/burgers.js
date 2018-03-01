module.exports = function (sequelize, DataTypes ) {
	// body...

var Burgers = sequelize.define("Burgers" ,{
  burgers: {
  	type: DataTypes.STRING,
  	allownull: false,
  },
  devoured: {
  	type: DataTypes.BOOLEAN,
  	allownull: false,
},{
  timestamps: false
});
return Burgers
};
