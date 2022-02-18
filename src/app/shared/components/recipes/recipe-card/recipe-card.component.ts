import { Recipe } from 'moms-kitchen-common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;

  imageLoading: boolean;

  constructor() {
    this.imageLoading = true;
  }

  ngOnInit() {}

  imageLoaded(): void {
    this.imageLoading = false;
  }
}
