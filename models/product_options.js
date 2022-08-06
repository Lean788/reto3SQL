'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product_options.belongsTo(models.products, {
        foreignKey: 'id_product',
        targetKey: 'id'
      });
      
      product_options.belongsTo(models.models, {
        foreignKey: 'id_model',
        targetKey: 'id'
      });
      product_options.belongsTo(models.sizes, {
        foreignKey: 'id_size',
        targetKey: 'id'
      });
      product_options.belongsTo(models.colors, {
        foreignKey: 'id_color',
        targetKey: 'id'
      });

    }
  }
  product_options.init({
    product_selected: DataTypes.STRING,
    id_size: DataTypes.INTEGER,
    id_model: DataTypes.INTEGER,
    id_color: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_options',
  });
  return product_options;
};