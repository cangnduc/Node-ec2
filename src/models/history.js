'use strict';

const { BOOLEAN } = require('sequelize');

const Model = require('sequelize').Model;
module.exports = (sequelize, DataTypes) => {
  class Histroy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Histroy.init({
    
    patientID: DataTypes.INTEGER,
    doctocID: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    files: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Histroy',
  });
  return Histroy;
};