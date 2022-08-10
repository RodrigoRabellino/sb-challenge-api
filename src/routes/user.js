const userRoutes = require("express").Router();
const { index, show, store, update, destroy } = require("../controllers/user");

userRoutes.get("/", index);
userRoutes.post("/", store);
userRoutes.put("/", update);
userRoutes.delete("/", destroy);
userRoutes.get("/:id", show);

module.exports = userRoutes;
