const tutorialRoutes = require("./src/routes/tutorial");
const userRoutes = require("./src/routes/user");
const loginRoutes = require("./src/routes/login");

module.exports = (app) => {
  app.get("/", (req, res) =>
    res.json({ message: "Hi welcome to my Challenge api" })
  );
  app.use("/users", userRoutes);
  app.use("/tutorials", tutorialRoutes);
  app.use("/login", loginRoutes);
};
