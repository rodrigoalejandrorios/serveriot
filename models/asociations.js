const Item = require("./GetItem");
const User = require("./User");

User.hasMany(Item, { as: "items", foreignKey: "userId" });

Item.belongsTo(User, { as: "user" });
