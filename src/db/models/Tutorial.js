const { DATE } = require("sequelize");

module.exports = (sequelize, Model, DataTypes) => {
  class Tutorial extends Model {}
  Tutorial.init(
    {
      title: {
        type: DataTypes.STRING(100),
        defaultValue: false,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(1000),
        defaultValue: false,
        allowNull: false,
      },
      videoUrl: {
        type: DataTypes.STRING(100),
        defaultValue: false,
      },
      publishedStatus: {
        type: DataTypes.STRING(100),
        defaultValue: false,
        allowNull: false,
      },
      deleteAt: {
        type: DATE,
      },
    },
    {
      sequelize,
      modelName: "Tutorial",
    }
  );

  return Tutorial;
};
