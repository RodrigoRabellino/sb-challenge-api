const { sequelize, Tutorial, User } = require("../db/connection");

module.exports = async (active) => {
  await sequelize.sync();
  console.log("[Database] tables created");
  if (active) {
    try {
      // await require("./userSeeder")();
      await require("./tutorialSeeder")();
      console.log("[Database] correct seed");
    } catch (error) {
      console.log("error in dbInit", error);
    }
    active = false;
  }
};
