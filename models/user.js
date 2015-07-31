"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
    },{
        classMethods: {
            associate: function (models) {
                User.hasMany(models.Answer)
            }
        }
    });
  
  return User;
};