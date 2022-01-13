'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckboxReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CheckboxReport.init({
    reportId: DataTypes.INTEGER,
    checkboxId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CheckboxReport',
  });
  return CheckboxReport;
};