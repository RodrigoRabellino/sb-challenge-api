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
tutorialRoutes.delete("/", destroy);
tutorialRoutes.get("/:id", show);

module.exports = tutorialRoutes;
