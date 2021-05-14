const sequelize = require("../loaders/sequelize");
const { DataTypes, Model } = require("sequelize");

const Item = sequelize.define(
  "item",
  {
    keyname: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    alt: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    cname: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    exist: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "items",
    timestamps: false,
    freezeTableName: true,
  }
);

console.log(Item === sequelize.models.item);

module.exports = Item;
