const express = require("express");
const router = express.Router();

const {
    ingredientFetch,
   ingredientList}

 = require("../controllers/ingredientController");

 router.param("ingredientId", async (req, res, next, ingredientId) => {
    const ingredient = await ingredientFetch(ingredientId, next);
    if (ingredient) {
      req.ingredient = ingredient;
      next();
    } else {
      const err = new Error("ingredient Not Found");
      err.status = 404;
      next(err);
    }
  });

  router.get("/", ingredientList);

  module.exports = router;
