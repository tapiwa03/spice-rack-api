const express = require('express');

const imageUpload = require('../helpers/imageUpload');
const checkAuth = require('../middleware/checkAuth');
const RecipesController = require('../controllers/recipes');

const router = express.Router();

router.get('/', RecipesController.getAllRecipes);

router.post('/', checkAuth, imageUpload.single('recipeImage'), RecipesController.addRecipe);

router.get('/:recipeId', RecipesController.getAllRecipes);

router.patch('/:recipeId', checkAuth, RecipesController.patchRecipe);

router.delete('/:recipeId', checkAuth, RecipesController.deleteRecipe);

module.exports = router;
