const { Ingredient } = require("../db/models");

exports.ingredientFetch = async (ingredientId, next) => {
  try {
    const ingredient = await ingredient.findByPk(ingredientId);
    return ingredient;
  } catch (error) {
    next(error);
  }
};

exports.ingredientList = async (req, res, next) => {
  try {
    const ingredients = await ingredient.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(ingredients);
  } catch (error) {
    next(error);
  }
};
