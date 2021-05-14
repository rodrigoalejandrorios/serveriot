const sequelize = require("../loaders/sequelize");
const { DataTypes, Model } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrementIdentity: true,
    },
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
    role: {
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
