const jwt = require("jsonwebtoken");
const { User, Tutorial } = require("../db/connection");

const index = async (req, res) => {
  try {
    const users = await User.findAll({ order: [["CreatedAt", "ASC"]] });
    res.status(200).json(users);
  } catch (error) {
    console.log("error index user", error);
    res.status(500).json({ message: "server internal errors" });
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      include: [{ model: Tutorial }],
    });
    res.status(200).json(user);
  } catch (error) {
    console.log("error show user", error);
    res.status(500).json({ message: "server internal errors" });
  }
};

const store = async (req, res) => {
  let { firstName, lastName, email, password, address, phone } = req.body;
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      address,
      phone,
    });
    let response = {
      ...user,
      accessToken: makeToken(user.email, user.id),
    };
    res.status(201).json(response);
  } catch (error) {
    console.log("error store user", error);
    res.status(500).json({ message: "server internal errors" });
  }
};

const update = async (req, res) => {};

const destroy = async (req, res) => {};

const makeToken = (email, id) => {
  return jwt.sign({ email, id }, process.env.SECRET_JWT_USER);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
