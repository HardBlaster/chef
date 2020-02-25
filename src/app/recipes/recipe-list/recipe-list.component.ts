import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Test description for test recipe",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiamafoodblog.com%2Fwp-content%2Fuploads%2F2015%2F01%2FIMG_8869.jpg"),
    new Recipe("Test Recipe2", "Second test description for test recipe",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiamafoodblog.com%2Fwp-content%2Fuploads%2F2015%2F01%2FIMG_8869.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
