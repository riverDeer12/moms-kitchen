import { RecipesService } from './../../shared/services/recipes/recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/shared/dtos/recipes/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  loadingData: boolean;
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipesService.getActiveRecipes().subscribe((response: Recipe[]) => {
      this.recipes = response.map((x) => Object.assign(new Recipe(), x));
      this.loadingData = false;
    });
  }
}
