import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
 
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;
      }
    );
  }

  onIgredientAdded(igredient: Ingredient) {
    this.ingredients.push(igredient)
  }

}
