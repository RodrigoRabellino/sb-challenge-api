const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.query.accesstoken;
  try {
    const validate = jwt.verify(token, process.env.SECRET_JWT_USER);
    if (validate) return next();
  } catch (error) {
    return res.status(500).json({ message: "token expired" });
  }
};
