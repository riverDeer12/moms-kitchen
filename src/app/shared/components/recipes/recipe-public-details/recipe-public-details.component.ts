import { fadeInAnimation } from 'app/shared/animations/page.animation';
import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Recipe } from 'app/shared/dtos/recipes/recipe';
import { RecipesService } from 'app/shared/services/recipes/recipes.service';

@Component({
  selector: 'app-recipe-public-details',
  templateUrl: './recipe-public-details.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./recipe-public-details.component.scss']
})
export class RecipePublicDetailsComponent implements OnInit {
  @Input() id: string;

  recipe: Recipe;
  loadingData: boolean;
  imageLoading: boolean;

  constructor(private service: RecipesService) {
    this.loadingData = true;
    this.imageLoading = true;
  }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe() {
    this.service
      .getRecipePublicDetails(this.id)
      .subscribe((response: Recipe) => {
        this.recipe = Object.assign(new Recipe(), response);
        this.loadingData = false;
      });
  }

  imageLoaded(): void {
    this.imageLoading = false;
  }
}
