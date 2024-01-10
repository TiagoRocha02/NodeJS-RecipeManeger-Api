const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  ingredients: Array,
  preparation: String,
  category:String,
  preptime: String, 
  fav: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

