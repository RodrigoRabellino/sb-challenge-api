const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false,
  }
);

const User = require("./models/User")(sequelize, Model, DataTypes);
const Tutorial = require("./models/Tutorial")(sequelize, Model, DataTypes);

//out of scope
// User.hasMany(Tutorial);
// Tutorial.belongsTo(User);

module.exports = { sequelize, User, Tutorial };
