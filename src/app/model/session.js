module.exports = function(sequelize, Sequelize) {
  var Session = sequelize.define("Session", {
    drinkGoal: { type: Sequelize.INTEGER },
    createdAt: { type: Sequelize.DATE },
    endedAt: { type: Sequelize.DATE },
    maxBAC: { type: Sequelize.FLOAT }
      });

  Session.associate = function(models) {
    Session.belongsTo(models.User, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      } 
    });
    Session.hasMany(models.Drink);
  };

  return Session;
};
