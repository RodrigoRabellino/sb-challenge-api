const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {
    // static async hashPassword(password) {
    //   return await bcrypt.hash(password);
    // }
    // static async checkPassword(password, hashedPassword) {
    //   return await bcrypt.compare(password, hashedPassword);
    // }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING(100),
        defaultValue: false,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        defaultValue: false,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100),
        defaultValue: false,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );

  User.beforeCreate(async (user, options) => {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return (user.password = hashedPassword);
    } catch (error) {
      console.log("before", error);
    }
  });

  return User;
};
