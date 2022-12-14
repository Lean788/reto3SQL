'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class colors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      colors.hasMany(models.product_options, {
        foreignKey: 'id_color',
        sourceKey: 'id'
      });
    }
  }
  colors.init({
    name_color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'colors',
  });
  return colors;
};