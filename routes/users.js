const routes = require("express").Router();
const {
  getUser,
  postUser,
  deleteUser,
  UpdateUser,
} = require("../controllers/users");

routes.get("/", getUser);

routes.post("/", postUser);

routes.delete("/:id", deleteUser);

routes.put("/:id", UpdateUser);

module.exports = routes;
