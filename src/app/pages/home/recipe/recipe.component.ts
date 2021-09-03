import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  id: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getRecipeId();
  }

  getRecipeId() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
