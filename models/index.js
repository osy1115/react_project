'use strict';


const Sequelize = require('sequelize');
const initModels = require('./init-models');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let models = initModels(sequelize);


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.test_list = models.test_list;
db.test_page_text = models.test_page_text;
db.test_page = models.test_page;
db.test_result = models.test_result;

module.exports = db;
