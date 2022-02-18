import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EntityType } from 'app/core/constants/entity-type';
import { Router } from '@angular/router';
import {
  RecipesService,
  CategoriesService,
  ComplexityLevelsService,
} from 'moms-kitchen-common';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss'],
})
export class ConfirmDeleteComponent implements OnInit {
  @Input() entityId: string;
  @Input() entityType: string;
  @Input() returnUrl: string;

  loadingData: boolean;

  constructor(
    private router: Router,
    public activeModal: NgbActiveModal,
    private recipesService: RecipesService,
    private complexityService: ComplexityLevelsService,
    private categoriesService: CategoriesService
  ) {
    this.loadingData = true;
  }

  ngOnInit() {}

  confirm(): void {
    switch (this.entityType) {
      case EntityType.RECIPES:
        this.deleteRecipe();
        break;
      case EntityType.CATEGORIES:
        this.deleteCategory();
        break;
      case EntityType.COMPLEXITY_LEVELS:
        this.deleteComplexityLevel();
        break;
      default:
        break;
    }
  }

  deleteRecipe(): void {
    this.recipesService
      .deleteRecipe(environment.apiUrl, this.entityId)
      .subscribe(() => {
        this.activeModal.close();
      });
  }

  deleteCategory(): void {
    this.categoriesService
      .deleteCategory(environment.apiUrl, this.entityId)
      .subscribe(() => {
        this.activeModal.close();
      });
  }

  deleteComplexityLevel(): void {
    this.complexityService
      .deleteComplexityLevel(environment.apiUrl, this.entityId)
      .subscribe(() => {
        this.activeModal.close();
      });
  }
}
