"use strict";

module.exports = function (sequelize, DataTypes) {
    var QuestionChoice = sequelize.define("QuestionChoice", {
        questionChoice: DataTypes.STRING(500),
        isActive: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function (models) {
                QuestionChoice.hasMany(models.Answer)
                QuestionChoice.belongsTo(models.Question);
            }
        }
    });
    
    return QuestionChoice;
};