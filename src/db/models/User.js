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
      firstName: {
        type: DataTypes.STRING(100),
        defaultValue: false,
        allowNull: false,
      },
      lastName: {
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
    const hashedPassword = await bcrypt.hash(user.password);
    user.password = hashedPassword;
  });

  return User;
};
