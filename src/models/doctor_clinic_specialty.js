'use strict';

const { BOOLEAN } = require('sequelize');

const Model = require('sequelize').Model;
module.exports = (sequelize, DataTypes) => {
  class DoctorClinicSpecialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DoctorClinicSpecialty.init({
    
   doctorID: DataTypes.INTEGER,
   clinicID: DataTypes.INTEGER,
   specialtyID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'DoctorClinicSpecialty',
  });
  return DoctorClinicSpecialty;
};