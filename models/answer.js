"use strict";

module.exports = function(sequelize, DataTypes) {
    var Answer = sequelize.define("Answer", {
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