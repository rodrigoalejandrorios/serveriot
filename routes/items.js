const routes = require("express").Router();
const { getListItem } = require("../controllers/items");

routes.get("/", getListItem);

module.exports = routes;
