"use strict";

module.exports = function(sequelize, DataTypes) {
    var Answer = sequelize.define("Answer", {
        answer: DataTypes.STRING(500)
    } , {
        classMethods: {
            associate: function (models) {
                Answer.belongsTo(models.QuestionChoice);
                Answer.belongsTo(models.User);
            }
        }
    });

  return Answer;
};