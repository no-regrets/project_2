module.exports = function(sequelize, Sequelize) {
    var Session = sequelize.define("Session", {
        drinkGoal: {type: Sequelize.INTEGER},
        createdAt: {type: Sequelize.DATE},
        endedAt: {type: Sequelize.DATE}
    });
  
    Session.associate = function(models) {
      models.Session.hasMany(models.Drink);
    };
  
    return Session;
  };
  