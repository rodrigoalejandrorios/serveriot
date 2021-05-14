const { Sequelize } = require("Sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  "serveriot",
  process.env.USERDB,
  process.env.PASSDB,
  {
    host: "localhost",
    dialect: "mssql",
    port: "1433",
    
  }
);

module.exports = sequelize;
