//var bcrypt = require("bcrypt-nodejs");

// module.exports = (sequelize, Sequelize) => {
//   var User = sequelize.define("User", {
//     username: { type: Sequelize.STRING, allowNull: false },
//     email: { type: Sequelize.STRING, allowNull: false },
//     password: { type: Sequelize.STRING, allowNull: false },
//     sex: { type: Sequelize.STRING, allowNull: false },
//     weight: { type: Sequelize.FLOAT, allowNull: false }
//   },
//   {
//     classMethods: {
//       validPassword: function(password, passwd, done, user) {
//         bcrypt.compare(password, passwd, function(err, isMatch) {
//           if (err) console.log(err);
//           if (isMatch) {
//             return done(null, user);
//           } else {
//             return done(null, false);
//           }
//         });
//       }
//     }
//   },
//   {dialect: 'mysql'});
// };
  



//   User.addHook('beforeCreate', function(user, fn) {
//       var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//           return salt;
//       });
//       bcrypt.hash(user, password, salt, null, function(err, hash) {
//           if(err) return next(err);
//           user.password=hash;
//           return fn(null,user);
//       });
//   });

//   User.associate = function(models) {
//     models.User.hasMany(models.Session);
//   };

//   return User;
// };

module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
    username: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    sex: { type: Sequelize.STRING, allowNull: false },
    weight: { type: Sequelize.FLOAT, allowNull: false }
	});
	
	return User;
};