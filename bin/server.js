const dotenv = require("dotenv");
const http = require("http");
const app = require("../app");
const sequelize = require("../loaders/sequelize");

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || "5000";

server.listen(port, () => {
  try {
    console.log(`Enable port in localhost:${port}`);
    sequelize.sync().then(() => {
      console.log("Connection has been established successfully.");
    });
  } catch (e) {
    console.log(e);
  }
});
