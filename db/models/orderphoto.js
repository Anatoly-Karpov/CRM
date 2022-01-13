'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orderphoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Orderphoto.init({
    orderId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orderphoto',
  });
  return Orderphoto;
};