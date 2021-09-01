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

  imageLoading: boolean;

  constructor(private router: Router) {
    this.imageLoading = true;
  }

  ngOnInit() {}

  imageLoaded(): void {
    console.log('Image loaded');
    this.imageLoading = false;
  }
}
