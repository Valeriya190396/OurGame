'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({GameLine, Category}) {
      this.belongsTo(Category, { foreignKey: 'catId' });
      this.hasMany(GameLine, { foreignKey: 'questId' })
      // define association here
    }
  }
  Question.init({
    catId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.TEXT
    },
    answer: {
      type: DataTypes.TEXT
    },
    score: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};