const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const indexRoute = require("./routes/index");
const userRoute = require("./routes/users");
const itemsRoute = require("./routes/items");
const sequelize = require("./loaders/sequelize");

//UTILIZACIÓN DE VARIABLE DE ENTORNO
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
const port = process.env.PORT || "5000";

//RESPUESTA DE LOGUEO
app.use(logger("dev"));
//CORS
app.use(cors());

app.use("/", indexRoute);
app.use("/users", userRoute);
app.use("/items", itemsRoute);

//TEST DE CONEXIÓN A BASE DE DATOS

//PUERTO ACTIVO
app.listen(port, () => {
  try {
    console.log(`Enable port in localhost:${port}`);
    sequelize.sync().then(() => {
      console.log("Connection has been established successfully.");
    });
  } catch (e) {
    console.log(e);
  }
});
