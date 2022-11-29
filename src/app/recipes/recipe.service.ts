import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingradients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
            'Chicken Qorma', 
            'South Asia special recipe of Chicken Qorma', 
            'https://spiceeats.com/wp-content/uploads/2020/07/Hyderabadi-Chicken-Korma.jpg',
            [
                new Ingredients('Chicken', 5),
                new Ingredients('Oil', 10),
            ]),
        new Recipe(
            'Zinger Burger', 
            'Special Turkish chezy Zinger Burger', 
            'https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg',
            [
                new Ingredients('Chiken', 2),
                new Ingredients('Bread', 3),
            ]),
    ];
    constructor(private slService:ShoppingListService){}

    getRecipe(){
        return this.recipes.slice();
    }

    getRecipeById(id: number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredients[]){
        this.slService.addIngredients(ingredients);
    }
}