import Sequelize from 'sequelize';
import { config } from '../config/db.config';

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model.js')(sequelize, Sequelize);
db.role = require('./role.model.js')(sequelize, Sequelize);
db.todo = require('./todo.model.js')(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: 'user_roles',
});

db.user.belongsToMany(db.role, {
  through: 'user_roles',
});

db.user.hasMany(db.todo, {
  foreignKey: 'id',
  targetKey: 'createdBy',
});

db.ROLES = ['user', 'admin', 'moderator'];

module.exports = db;
