import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'app/shared/dtos/recipes/recipe';
import { RecipesService } from 'app/shared/services/recipes/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  loadingData: boolean;
  recipes: Recipe[];
  navbarLabel = 'Mom\'s Kitchen';

  constructor(private recipesService: RecipesService, private router: Router) {
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

  openRecipePage(id: string): void {
    this.router.navigateByUrl('/recipes/' + id);
  }

  openCategoryPage(id: string): void {
    this.router.navigateByUrl('/categories/' + id);
  }

}
