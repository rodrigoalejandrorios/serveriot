const Item = require("../models/GetItem");
//const { v4: uuidv4 } = require("uuid");

const getListItem = async (req, res) => {
  try {
    const items = await Item.findAll();
    return res.json(items);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

module.exports = {
  getListItem,
};
