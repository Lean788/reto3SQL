'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.customer, {
        foreignKey: 'id_customer'
      });

      orders.hasMany(models.order_details, {
        foreignKey: 'detail_id_order'
      });

    }
  }
  orders.init({
    amount: DataTypes.FLOAT,
    id_customer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};