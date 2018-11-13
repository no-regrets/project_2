module.exports = function(sequelize, DataTypes) {
    var Drink = sequelize.define("Drink", {
      name: {type: DataTypes.STRING, allowNull: false},
      alcoholContent: {type: DataTypes.FLOAT, allowNull: false}
    });
  
    return Drink;
  };
  