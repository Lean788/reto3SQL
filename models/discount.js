'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      discount.hasMany(models.products, {
        foreignKey: 'id_discount',
        sourceKey: 'id'
      });
    }
  }
  discount.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    discount_percent: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'discount',
  });
  return discount;
};