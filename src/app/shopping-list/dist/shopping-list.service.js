"use strict";
exports.__esModule = true;
exports.ShoppingListService = void 0;
var core_1 = require("@angular/core");
var ingredient_module_1 = require("../shared/ingredient.module");
var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.ingredientChanges = new core_1.EventEmitter();
        this.ingredients = [
            new ingredient_module_1.Ingredient("Apple", 10)
        ];
    }
    ShoppingListService.prototype.getIngredient = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanges.emit(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        var _a;
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientChanges.emit(this.ingredients.slice());
    };
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
