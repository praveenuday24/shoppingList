"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var recipes_component_1 = require("./recipes/recipes.component");
var recipe_list_component_1 = require("./recipes/recipe-list/recipe-list.component");
var recipe_detail_component_1 = require("./recipes/recipe-detail/recipe-detail.component");
var recipe_item_component_1 = require("./recipes/recipe-list/recipe-item/recipe-item.component");
var shopping_list_component_1 = require("./shopping-list/shopping-list.component");
var shopping_edit_component_1 = require("./shopping-list/shopping-edit/shopping-edit.component");
var dropdown_directive_1 = require("./shared/dropdown.directive");
var shopping_list_service_1 = require("./shopping-list/shopping-list.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                recipes_component_1.RecipesComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                recipe_item_component_1.RecipeItemComponent,
                shopping_list_component_1.ShoppingListComponent,
                shopping_edit_component_1.ShoppingEditComponent,
                dropdown_directive_1.DropdownDirective
            ],
            imports: [
                platform_browser_1.BrowserModule
            ],
            providers: [shopping_list_service_1.ShoppingListService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
