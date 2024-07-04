'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GameLine.init({
    gameId: DataTypes.INTEGER,
    questId: DataTypes.INTEGER,
    statusQuest: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GameLine',
  });
  return GameLine;
};