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
    static associate({Game, Question}) {
      this.belongsTo(Game, { foreignKey: 'gameId' });
      this.belongsTo(Question, { foreignKey: 'questId' });
      // define association here
    }
  }
  GameLine.init({
    gameId: {
      type: DataTypes.INTEGER
    },
    questId: {
      type: DataTypes.INTEGER
    },
    statusQuest: {
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'GameLine',
  });
  return GameLine;
};