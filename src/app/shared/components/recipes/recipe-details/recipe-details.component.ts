import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'moms-kitchen-common';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit() {}
}
