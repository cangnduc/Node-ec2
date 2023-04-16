'use strict';

const { BOOLEAN } = require('sequelize');

const Model = require('sequelize').Model;
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: BOOLEAN,
   
    roleID: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    positionID: DataTypes.STRING,
    image: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};