module.exports = function (sequelize, DataTypes ) {
	// body...

var Burgers = sequelize.define("burgers" ,{
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
