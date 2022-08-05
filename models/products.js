'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    gener: DataTypes.ENUM,
    SKU: DataTypes.STRING,
    price: DataTypes.FLOAT,
    id_category: DataTypes.INTEGER,
    id_discount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};