const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRoute = require("./routes/index");
const userRoute = require("./routes/users");
const itemsRoute = require("./routes/items");
const deviseRoute = require("./routes/devices");
const weatherRoute = require("./routes/weather");

//UTILIZACIÓN DE VARIABLE DE ENTORNO

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//RESPUESTA DE LOGUEO
app.use(logger("dev"));
//CORS
app.use(cors());

app.use("/", indexRoute);
app.use("/users", userRoute);
app.use("/items", itemsRoute);
app.use("/devices", deviseRoute);
app.use("/weather", weatherRoute);
//global.__basedir = __dirname;

//console.log(global);

//PUERTO ACTIVO
module.exports = app;
