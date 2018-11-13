module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: {type: DataTypes.STRING, allowNull: false},
      email: {type: DataTypes.STRING, allowNull: false},
      password: {type: DataTypes.STRING, allowNull: false},
      sex: {type: DataTypes.STRING, allowNull: false},
      weight: {type: DataTypes.FLOAT, allowNull: false}
    });
  
    User.associate = function(models) {
      models.User.hasMany(models.Session);
    };
  
    return User;
  };
  