const routes = require("express").Router();
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;

routes.get("/", (req, res) => {
  res.json({ success: `Recibiendo respuesta desde el puerto ${port}` });
});

module.exports = routes;
