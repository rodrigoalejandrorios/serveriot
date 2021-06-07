const sequelize = require("../loaders/sequelize");
const { DataTypes, Model } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    endpoint: {
      type: DataTypes.STRING(150),
      unique: true,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    item1: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    item2: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    item3: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    item4: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    item5: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "users",
    timestamps: false,
    freezeTableName: true,
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.user);
module.exports = User;
