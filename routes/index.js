const routes = require("express").Router();

const port = process.env.PORT;

routes.get("/", (req, res) => {
  res.json({ success: `Recibiendo respuesta desde el puerto ${port}` });
});

module.exports = routes;
