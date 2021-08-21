import { LatestRecipes } from 'app/shared/dtos/recipes/latest-recipes';
import { Router } from '@angular/router';
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
  latestRecipes: LatestRecipes;
  navbarLabel = 'Mom\'s Kitchen';

  constructor(private recipesService: RecipesService, private router: Router) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.getLatestRecipes();
  }

  getLatestRecipes(): void {
    this.recipesService.getLatestRecipes().subscribe((response: LatestRecipes) => {
      this.latestRecipes = Object.assign(new Recipe(), response);
      this.loadingData = false;
    });
  }

  openRecipePage(id: string): void {
    this.router.navigateByUrl('/recipes/' + id);
  }

  openCategoryPage(id: string): void {
    this.router.navigateByUrl('/categories/' + id);
  }
}
