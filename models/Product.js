// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references:{
        model:'category',
        key: 'id'
      }
    },
    tags: {
      type: DataTypes.INTEGER,
      references:{
        model:'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
