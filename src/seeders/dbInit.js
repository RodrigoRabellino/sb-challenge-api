const { sequelize } = require("../db/connection");

module.exports = async () => {
  let active = false;
  if (active) {
    try {
      await sequelize.sync({ force: true });
      console.log("[Database] tables created");
      await require("./userSeeder")();
      await require("./tutorialSeeder")();
      console.log("[Database] correct seed");
    } catch (error) {
      console.log("error in dbInit", error);
    }
    active = false;
  }
};
