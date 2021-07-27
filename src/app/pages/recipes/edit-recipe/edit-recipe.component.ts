import { RecipesService } from './../../../shared/services/recipes/recipes.service';
import { CommonService } from 'app/shared/services/common/common.service';
import { ApiResponse } from './../../../shared/common/api-response';
import { Recipe } from './../../../shared/dtos/recipes/recipe';
import { Component, OnInit } from '@angular/core';
import { IRecipesService } from 'app/shared/services/recipes/i-recipes-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent implements OnInit {
  loadingData: boolean;
  id: string;
  returnUrl = '/admin/recipes';

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService
  ) {
    this.loadingData = true;
    this.setPageSettings();

  }

  ngOnInit() {
    this.getRecipeId();
  }

  getRecipeId(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadingData = false;
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Edit recipe',
      'Here you can edit recipe details.'
    );
  }
}
