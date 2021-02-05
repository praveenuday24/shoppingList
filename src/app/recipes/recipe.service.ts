import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe(
            "Test Recipe",
            "At est recipe" ,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpRIzyMGnSgWwHCSErlSpKvs_nN8IqJpnEw&usqp=CAU",
            [
                new Ingredient(
                    "Buns",2
                ),
                new Ingredient(
                    "Fries",2
                )
            ]),
        new Recipe(
            "Test Recipe",
            "At est recipe" ,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpRIzyMGnSgWwHCSErlSpKvs_nN8IqJpnEw&usqp=CAU",
            [
                new Ingredient(
                    "Buns",3
                ),
                new Ingredient(
                    "Fries",3
                )
            ])
      ];

      constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }
      addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}