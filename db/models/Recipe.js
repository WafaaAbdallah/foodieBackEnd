const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define("Recipe", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },

    image: { type: DataTypes.STRING, allowNull: false },


    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  SequelizeSlugify.slugifyModel(Recipe, {
    source: ["name"],
  });
   Recipe.associate = (models) => {
    models.Ingredient.belongsToMany(Recipe, { 
        through: "Recipe_Ingredient",
        as: "recipes",
        foreignKey: "ingredientId",
 });
    Recipe.belongsToMany(models.Ingredient, { 
        through: "Recipe_Ingredient",
        as: "ingredients",
        foreignKey: "recipeId",
     });

  };

  return Recipe;
};




// const SequelizeSlugify = require("sequelize-slugify");

// module.exports = (sequelize, DataTypes) => {
//   const Recipe = sequelize.define("Recipe", {
//     name: {
//       type: DataTypes.STRING,
//     },
//     slug: {
//       type: DataTypes.STRING,
//     },
//     image: {
//       type: DataTypes.STRING,
//     },
    
//     },
//   );
//   SequelizeSlugify.slugifyModel(Recipe, {
//     source: ["name"],
//   });

//   return Recipe;
// };