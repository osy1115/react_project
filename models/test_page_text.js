const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_page_text', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    page_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    answer1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    answer2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    answer3: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    answer4: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kakaotalk: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    point1: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    point2: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    point3: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    point4: {
      type: DataTypes.STRING(11),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_page_text',
    timestamps: false
  });
};
