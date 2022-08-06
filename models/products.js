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
      products.hasMany(models.order_details, {
        foreignKey: 'id_product',
        sourceKey: 'id'
      });
      
      products.hasMany(models.product_options, {
        foreignKey: 'id_product',
        sourceKey: 'id'
      });
      
      products.belongsTo(models.categories, {
        foreignKey: 'id_category',
        targetKey: 'id'
      });

      products.belongsTo(models.discount, {
        foreignKey: 'id_discount',
        targetKey: 'id'
      });
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