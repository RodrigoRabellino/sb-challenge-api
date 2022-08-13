const { sequelize, Tutorial, User } = require("../db/connection");

module.exports = async () => {
  let active = true;
  if (active) {
    await sequelize.sync();
    try {
      console.log("[Database] tables created");
      // await require("./userSeeder")();
      await require("./tutorialSeeder")();
      console.log("[Database] correct seed");
    } catch (error) {
      console.log("error in dbInit", error);
    }
    active = false;
  }
};
