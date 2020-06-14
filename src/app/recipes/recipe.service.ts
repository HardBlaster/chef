import {EventEmitter, Injectable, OnInit} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({providedIn: "root"})
export class RecipeService implements OnInit{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Test Recipe",
      "Test description for test recipe",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiamafoodblog.com%2Fwp-content%2Fuploads%2F2015%2F01%2FIMG_8869.jpg",
      [
        new Ingredient('ingr1', 2),
        new Ingredient('ingr2', 2),
        new Ingredient('ingr3', 2)
      ]),
    new Recipe("Test Recipe2",
      "Second test description for test recipe",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiamafoodblog.com%2Fwp-content%2Fuploads%2F2015%2F01%2FIMG_8869.jpg",
      [
        new Ingredient('ingr4', 1),
        new Ingredient('ingr5', 20),
        new Ingredient('ingr6', 15)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  ngOnInit() {
  }
}
