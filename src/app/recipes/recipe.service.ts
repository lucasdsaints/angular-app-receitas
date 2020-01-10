import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Cuscuz com ovo', 'Faça o cuscuz e coloque um ovo em cima',
            'https://live.staticflickr.com/8398/8682496993_7de91cdf7f_z.jpg',
            [
                new Ingredient('Massa de milho', 1),
                new Ingredient('Povilho', 1),
                new Ingredient('Sal', 1),
                new Ingredient('Ovo', 2)
            ]),
        new Recipe(
            'Fraldinha na cerveja',
            `Marinada na cerveja, a fraldinha sai do forno dourada, suculenta e macia.
          E ainda rende um molho saboroso. Atenção para a técnica de corte, que deixa as fatias da carne bem macias.`,
            'https://cdn.pixabay.com/photo/2015/08/17/12/04/skirt-steak-892402_960_720.jpg',
            [
                new Ingredient('Peça de fraldinha', 1),
                new Ingredient('Pimenta dedo de moça', 3),
                new Ingredient('Pimenta do reino', 2),
                new Ingredient('Batatas', 2)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}