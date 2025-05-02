'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bike extends Model {
    static associate(models) {}
  }

  Bike.init({
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bike',
  });

  return Bike;
};
