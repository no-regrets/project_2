module.exports = function(sequelize, Sequelize) {
    var Drink = sequelize.define("Drink", {
      name: {
          type: Sequelize.STRING,
          allowNull: false
        },
      alcoholContent: {
          type: Sequelize.FLOAT,
          allowNull: false
        }
    });
  
    return Drink;
  };
  