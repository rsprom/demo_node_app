"use strict";

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
        question: DataTypes.STRING(500),
        isActive: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function (models) {
                Question.hasMany(models.QuestionChoice);
            }
        }
    });

  return Question;
};