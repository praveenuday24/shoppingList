import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";

export class ShoppingListService{
    ingredientChanges = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient [] =[
        new Ingredient("Apple",10)
      ];

      getIngredient(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanges.emit(this.ingredients.slice());
      }

      addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanges.emit(this.ingredients.slice());
      }
}