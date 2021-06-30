const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define("Ingredient", {
    name: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true, //its optional
    },
   
    image: {
      type: DataTypes.STRING,
     
    },
  });

  SequelizeSlugify.slugifyModel(Ingredient, {
    source: ["name"],
  });

  Ingredient.associate = (models) => {
    models.Category.hasMany(Ingredient, {
      foreignKey: "categoryId",
      as: "products",
      alloNull: false,
    });

    Ingredient.belongsTo(models.Category, { foreignKey: "categoryId" });
  };

  return Ingredient;
};