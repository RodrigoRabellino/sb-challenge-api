const jwt = require("jsonwebtoken");
const { User } = require("../db/connection");

export const showUser = async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await User.findOne({ were: { email: email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    user.accessToken = makeToken(user.email, user.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "server internal errors" });
  }
};

const makeToken = (email, id) =>
  jwt.sign({ email, id, type }, process.env.SECRET_JWT_USER);
