const userRoutes = require("express").Router();
const {
  index,
  show,
  store,
  update,
  destroy,
  sendToken,
} = require("../controllers/user");

userRoutes.get("/", index);
userRoutes.post("/", store);
userRoutes.put("/", update);
userRoutes.delete("/", destroy);
userRoutes.get("/accesstoken", sendToken);
userRoutes.get("/:id", show);

module.exports = userRoutes;
