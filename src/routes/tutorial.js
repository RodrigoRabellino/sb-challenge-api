const tutorialRoutes = require("express").Router();
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controllers/tutorial");

tutorialRoutes.get("/", index);
tutorialRoutes.post("/", store);
tutorialRoutes.put("/:id", update);
tutorialRoutes.get("/:id", show);
tutorialRoutes.delete("/:id", destroy);

module.exports = tutorialRoutes;
