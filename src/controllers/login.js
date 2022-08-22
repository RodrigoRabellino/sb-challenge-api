const jwt = require("jsonwebtoken");
const { User } = require("../db/connection");

const showUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      console.log("usernotfound");
      return res.status(404).json({ message: "User not found" });
    }
    console.log("showUser", user.username);
    const valid = await User.prototype.validatePass(password, user.password);
    if (!valid) return res.status(401).json({ message: "Bad credentials" });

    user.accessToken = makeToken(user.email, user.id);
    res.status(200).json(user);
  } catch (error) {
    console.log("error in Login", error);
    res.status(500).json({ message: "server internal errors" });
  }
};

const makeToken = (email, id) =>
  jwt.sign({ email, id }, process.env.SECRET_JWT_USER);

module.exports = { showUser };
