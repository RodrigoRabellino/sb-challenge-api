const jwt = require("jsonwebtoken");
const { User } = require("../db/connection");

const showUser = async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await User.findOne({ were: { email: email } });

    if (!user) return res.status(404).json({ message: "User not found" });
    if (User.prototype.validatePass(pass, user.password))
      return res.status(401).json({ message: "Bad credentials" });

    user.accessToken = makeToken(user.email, user.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "server internal errors" });
  }
};

const makeToken = (email, id) =>
  jwt.sign({ email, id, type }, process.env.SECRET_JWT_USER);

module.exports = { showUser };
