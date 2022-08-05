'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_details.init({
    detail_id_order: DataTypes.INTEGER,
    detail_id_product: DataTypes.INTEGER,
    detail_name: DataTypes.STRING,
    detail_price: DataTypes.STRING,
    detail_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_details',
  });
  return order_details;
};