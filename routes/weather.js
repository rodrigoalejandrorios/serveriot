const routes = require("express").Router();
const weatherGet = require("../controllers/weather.controller");

routes.get("/", weatherGet);

module.exports = routes;
