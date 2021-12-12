import { RecipesService } from './../../../services/recipes/recipes.service';
import { Recipe } from './../../../dtos/recipes/recipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() id: string;

  recipe: Recipe;
  loadingData: boolean;

  constructor(private service: RecipesService) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    this.service.getRecipe(this.id).subscribe((response: Recipe) => {
      this.recipe = Object.assign(new Recipe(), response);
      this.loadingData = false;
    });
  }

}
