const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

const getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    //console.log(users);
    return res.json(users);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const postUser = async (req, res) => {
  const { username, email, password, endpoint, location, role } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
      endpoint,
      location,
      role,
    });

    return res.json(user);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    await user.destroy();
    return res.json({ message: "User delete" });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const UpdateUser = async (req, res) => {
  const id = req.params.id;

  const { role, item1, item2, item3, item4, item5 } = req.body;
  try {
    const user = await User.findOne({ where: { id } });
    user.role = role;
    user.item1 = item1;
    user.item2 = item2;
    user.item3 = item3;
    user.item4 = item4;
    user.item5 = item5;

    await user.save();
    return res.json(user);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getUser,
  postUser,
  deleteUser,
  UpdateUser,
};
