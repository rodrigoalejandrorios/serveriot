const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

const getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users);
    return res.json(users);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const postUser = async (req, res) => {
  const { username, email, password, endpoint, role } = req.body;
  try {
    const user = await User.create({
      id: uuidv4(),
      username,
      email,
      password,
      endpoint,
      role,
    });

    return res.json(user);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findOne({ where: { id } });
    await user.destroy();
    return res.json({ message: "User delete" });
  } catch (err) {
    tconsole.error(e);
    res.sendStatus(500);
  }
};

module.exports = {
  getUser,
  postUser,
  deleteUser,
};
