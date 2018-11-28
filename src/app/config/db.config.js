const env = require('./env.js');

const Sequelize = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL){
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
  
    pool: {
      max: env.max,
      min: env.pool.min,
      acquire: env.pool.acquire,
      idle: env.pool.idle
    }
  });
}

const db = {};


//Models/tables
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
db.users = require('../model/user.js')(sequelize, Sequelize);
db.drinks = require('../model/drink.js')(sequelize, Sequelize);
db.sessions = require('../model/session.js')(sequelize, Sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;