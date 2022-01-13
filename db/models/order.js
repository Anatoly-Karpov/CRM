const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Workgroup }) {
      // define association here
      this.belongsTo(Workgroup, { foreignKey: 'wgId' });
    }
  }
  Order.init({
    num: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    wgId: DataTypes.INTEGER,
    doc: DataTypes.TEXT,
    comments: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
