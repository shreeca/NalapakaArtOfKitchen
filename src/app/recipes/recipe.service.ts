import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Pasta',
      'A super-tasty Egg-Pasta - just awesome!',
      'https://www.tangophotographie.com/wp-content/uploads/2016/11/food-photographer-recipe-tango-photography.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Traditional-Dosa',
      'Yummy Southi',
      'https://i.pinimg.com/originals/49/a4/ce/49a4ce1fcce4a6444b551046c0e1455d.jpg',
      [
        new Ingredient('Aloo-Mixture', 2),
        new Ingredient('Chutneys', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
