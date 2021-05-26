const routes = require("express").Router();
const deviseGet = require("../controllers/devices.controllers");

routes.get("/", deviseGet);

module.exports = routes;
