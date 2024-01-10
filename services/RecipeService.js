const Recipe = require("../models/recipe");
 
exports.getAllRecipes = async () => {
  return await Recipe.find();
};

exports.createRecipe = async (recipe) => {
  return await Recipe.create(recipe);
};
exports.getRecipeById = async (id) => {
  return await Recipe.findById(id);
};

exports.updateRecipe = async (id, recipe) => {
  return await Recipe.findByIdAndUpdate(id, recipe);
};

exports.deleteRecipe = async (id) => {
  return await Recipe.findByIdAndDelete(id);
};
