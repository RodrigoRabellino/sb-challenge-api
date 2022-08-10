const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.query.accessToken;
  try {
    const validate = jwt.verify(token, process.env.SECRET_JWT_USER);
    if (validate) return next();
  } catch (error) {
    console.log("error in middleware isAuth", error);
    return res.status(500).json("internal server error");
  }
  res.status(401).json("Unauthorized");
};
