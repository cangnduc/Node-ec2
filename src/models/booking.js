'use strict';

const { BOOLEAN } = require('sequelize');

const Model = require('sequelize').Model;
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    
   statusID: DataTypes.STRING,
   doctorID: DataTypes.INTEGER,
    patientID: DataTypes.INTEGER,
    date: DataTypes.DATE,
    timetype: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};