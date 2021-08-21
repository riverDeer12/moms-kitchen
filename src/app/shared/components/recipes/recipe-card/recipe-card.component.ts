import { Router } from '@angular/router';
import { Recipe } from './../../../dtos/recipes/recipe';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private router: Router) {}

  ngOnInit() {}

  openCategoryPage(id: string): void {
    this.router.navigateByUrl('/categories/' + id);
  }

  openRecipePage(): void {
    this.router.navigateByUrl('/recipes/' + this.recipe.id);
  }
}
