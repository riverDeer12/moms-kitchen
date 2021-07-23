import { RecipesService } from './../../../services/recipes/recipes.service';
import { CategoriesService } from './../../../services/categories/categories.service';
import { Category } from './../../../dtos/categories/category';
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

  loadingData: boolean;
  categories: Category[];
  settings: IDropdownSettings = {};

  constructor(
    private categoriesService: CategoriesService,
    private recipesService: RecipesService
  ) {
    this.loadingData = true;
    this.initSettings();
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.recipeId === undefined
      ? this.getAllCategories()
      : this.getRecipeCategories();
  }

  getRecipeCategories(): void {
    this.recipesService
      .getRecipeCategories(this.recipeId)
      .subscribe((response: Category[]) => {
        this.categories = response.map((x) => Object.assign(new Category(), x));
        this.loadingData = false;
      });
  }

  getAllCategories(): void {
    this.categoriesService.getCategories().subscribe((response: Category[]) => {
      this.categories = response.map((x) => Object.assign(new Category(), x));
      this.loadingData = false;
    });
  }

  initSettings(): void {
    this.settings = {
      singleSelection: false,
      defaultOpen: false,
      itemsShowLimit: 3,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true,
    };
  }
}
