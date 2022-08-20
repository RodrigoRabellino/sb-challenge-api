const loginRoutes = require("express").Router();
const { showUser } = require("../controllers/login");

loginRoutes.post("/", showUser);

module.exports = loginRoutes;
