import { Category } from 'app/shared/dtos/categories/category';
import { CategoriesService } from './../../../services/categories/categories.service';
import { ComplexityLevel } from 'app/shared/dtos/complexity-levels/complexity-level';
import { RecipesService } from './../../../services/recipes/recipes.service';
import { Recipe } from './../../../dtos/recipes/recipe';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ComplexityLevelsService } from 'app/shared/services/complexity-levels/complexity-levels.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-create-recipe-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.scss'],
})
export class CreateRecipeFormComponent implements OnInit {
  @Input() returnUrl: string;

  loadingData: boolean;
  createForm: FormGroup;
  creationResponse: Recipe;

  complexityLevels: ComplexityLevel[];
  categories: Category[];

  complexityLevelsDropdownSettings: IDropdownSettings = {};
  categoriesDropdownSettings: IDropdownSettings = {};

  constructor(
    private recipesService: RecipesService,
    private complexityLevelsService: ComplexityLevelsService,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService
  ) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.setCreateForm();
  }

  setCreateForm() {
    this.createForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      complexityLevelId: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    });

    this.setComplexitySelect();

    this.setCategoriesSelect();
  }

  setCategoriesSelect(): void {
    this.categoriesService.getCategories().subscribe((response: Category[]) => {
      this.categories = response.map((x) => Object.assign(new Category(), x));
      this.initCategoriesDropdownSettings();
    });
  }

  setComplexitySelect(): void {
    this.complexityLevelsService
      .getComplexityLevels()
      .subscribe((response: ComplexityLevel[]) => {
        this.complexityLevels = response.map((x) =>
          Object.assign(new ComplexityLevel(), x)
        );
        this.initComplexityLevelsDropdownSettings();
      });
  }

  initComplexityLevelsDropdownSettings(): void {
    this.complexityLevelsDropdownSettings = {
      singleSelection: true,
      defaultOpen: false,
      itemsShowLimit: 3,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true,
    };
  }

  initCategoriesDropdownSettings(): void {
    this.categoriesDropdownSettings = {
      singleSelection: false,
      defaultOpen: false,
      itemsShowLimit: 3,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true,
    };
    this.loadingData = false;
  }

  submit(): void {
    console.log(this.createForm.value);
    // this.recipesService
    //   .createRecipe(this.createForm.value)
    //   .subscribe((response: Recipe) => {
    //     this.creationResponse = response as Recipe;
    //     this.router.navigateByUrl(this.returnUrl);
    //   });
  }
}
