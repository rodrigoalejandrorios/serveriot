const routes = require("express").Router();
const { getUser, postUser, deleteUser } = require("../controllers/users");

routes.get("/", getUser);

routes.post("/", postUser);

routes.delete("/", deleteUser);

module.exports = routes;
