const express = require("express");
const {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/RecipeController");

const router = express.Router();

router.route("/").get(getAllRecipes).post(createRecipe);
router.route("/:id").get(getRecipeById).put(updateRecipe).delete(deleteRecipe);

module.exports = router;
