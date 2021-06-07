const Item = require("../models/GetItem");
const User = require("../models/User");

User.hasMany(Item, { as: "botones", foreignKey: "usuarioId" });

Item.belongsTo(User, { as: "usuario" });
