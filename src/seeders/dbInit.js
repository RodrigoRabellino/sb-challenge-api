const { sequelize } = require("../db/connection");

module.exports = async (active) => {
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
  }
};
