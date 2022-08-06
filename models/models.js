'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class models extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.hasMany(models.product_options, {
        foreignKey: 'id_model',
        sourceKey: 'id'
      });
    }
  }
  models.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'models',
  });
  return models;
};