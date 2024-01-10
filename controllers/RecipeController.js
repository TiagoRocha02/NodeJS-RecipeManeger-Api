const recipeService = require("../services/RecipeService");

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeService.getAllRecipes();
    res.json({ data: recipes, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);
    res.json({ data: recipe , status: "success"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await recipeService.getRecipeById(req.params.id);
    res.json({ data: recipe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL parameters
    const updatedData = req.body; // Get the updated data from the request body

    // Call the recipeService's updateRecipe function with the correct parameters
    const recipe = await recipeService.updateRecipe(id, updatedData);

    res.json({ data: recipe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  
  /* try {
    const recipe = await recipeService.updateRecipe(req.params.id, req.name);
    res.json({ data: recipe, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } */
};

exports.deleteRecipe = async (req, res) => {
  try {
    const blog = await recipeService.deleteRecipe(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
