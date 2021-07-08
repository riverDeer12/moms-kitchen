import { ApiResponse } from './../../../common/api-response';
import { RecipesService } from './../../../services/recipes/recipes.service';
import { CommonService } from 'app/shared/services/common/common.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/shared/dtos/recipes/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  loadingData: boolean;

  constructor(
    private commonService: CommonService,
    private recipesService: RecipesService
  ) {
    this.loadingData = true;
    this.setPageSettings();
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Recipes list',
      'List of all registered recipes'
    );
  }

  getRecipes(): void {
    this.recipesService.getRecipes().subscribe(
      (response: Recipe[]) => {
        this.recipes = response as Recipe[];
        this.loadingData = false;
      },
      (error) => {
        console.log(console.error());
      }
    );
  }
}
