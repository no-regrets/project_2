module.exports = function(sequelize, DataTypes) {
    var Session = sequelize.define("Session", {
        drinkGoal: {type: DataTypes.INTEGER},
        createdAt: {type: DataTypes.DATE},
        endedAt: {type: DataTypes.DATE}
    });
  
    Session.associate = function(models) {
      models.Session.hasMany(models.Drink);
    };
  
    return Session;
  };
  