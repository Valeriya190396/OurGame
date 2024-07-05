'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, GameLine}) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(GameLine, { foreignKey: 'gameId' });
      // define association here
    }
  }
  Game.init({
    userId: {
      type: DataTypes.INTEGER
    },
    gameStatus: {
      type: DataTypes.BOOLEAN
    },
    point: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};