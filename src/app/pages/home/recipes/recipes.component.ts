import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'app/shared/dtos/recipes/recipe';
import { RecipesService } from 'app/shared/services/recipes/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  loadingData: boolean;
  recipes: Recipe[];
  navbarLabel = 'Mom\'s Kitchen';
  filterForm: FormGroup;

  constructor(
    private service: RecipesService,
    private fb: FormBuilder
  ) {
    this.loadingData = true;
    this.setFilterForm();
  }

  ngOnInit() {
    this.getRecipes();
  }

  emptyForm = (): boolean => {
    return (
      this.filterForm.get('keyword').value === '' &&
      this.filterForm.get('categoryIds').value === ''
    );
  };

  setFilterForm(): void {
    this.filterForm = this.fb.group({
      keyword: new FormControl(''),
      categoryIds: new FormControl(''),
    });
  }

  getRecipes(): void {
    this.service.getActiveRecipes().subscribe((response: Recipe[]) => {
      this.recipes = response.map((x) => Object.assign(new Recipe(), x));
      this.loadingData = false;
    });
  }

  filterRecipes(): void {
    this.loadingData = true;

    if (!this.filterForm.valid) {
      return;
    }

    this.service
      .filterRecipes(this.filterForm.value)
      .subscribe((response: Recipe[]) => {
        this.recipes = response.map((x) => Object.assign(new Recipe(), x));
        this.loadingData = false;
      });
  }
}
