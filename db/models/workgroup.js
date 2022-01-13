const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Workgroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Order }) {
      // define association here
      this.hasMany(User, { foreignKey: 'workgroupId' });
      this.hasMany(Order, { foreignKey: 'wgId' });
    }
  }
  Workgroup.init({
    groupname: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Workgroup',
  });
  return Workgroup;
};
