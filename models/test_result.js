const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_result', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    result_step: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    result_subject: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    result_sub: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stat1: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    stat2: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    stat3: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    stat4: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_result',
    timestamps: false
  });
};
