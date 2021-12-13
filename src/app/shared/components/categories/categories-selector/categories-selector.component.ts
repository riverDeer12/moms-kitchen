import { RecipesService } from '../../../../core/services/recipes/recipes.service';
import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { Category } from '../../../../core/dtos/categories/category';
import { Component, Input, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories-selector',
  templateUrl: './categories-selector.component.html',
  styleUrls: ['./categories-selector.component.scss'],
})
export class CategoriesSelectorComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() recipeId?: string;
  @Input() selectorLabel: string;

  loadingData: boolean;
  categories: Category[];
  settings: IDropdownSettings = {};

  constructor(
    private categoriesService: CategoriesService,
    private recipesService: RecipesService
  ) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.getActiveCategories();
  }

  getActiveCategories(): void {
    this.categoriesService
      .getActiveCategories()
      .subscribe((response: Category[]) => {
        this.categories = response.map((x) => Object.assign(new Category(), x));
        this.getRecipeCategories();
      });
  }

  getRecipeCategories(): void {
    if (this.recipeId === undefined) {
      this.loadingData = false;
      return;
    }

    this.recipesService
      .getRecipeCategories(this.recipeId)
      .subscribe((response: Category[]) => {
        const categoryIds = response.map((x) => x.id);
        this.parentForm.get('categoryIds').setValue(categoryIds);
        this.loadingData = false;
      });
  }
}
