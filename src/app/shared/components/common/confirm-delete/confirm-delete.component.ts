import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { RecipesService } from '../../../../core/services/recipes/recipes.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EntityType } from 'app/core/constants/entity-type';
import { ComplexityLevelsService } from 'app/core/services/complexity-levels/complexity-levels.service';
import { Router } from '@angular/router';

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
    this.recipesService.deleteRecipe(this.entityId).subscribe(() => {
      this.activeModal.close();
    });
  }

  deleteCategory(): void {
    this.categoriesService.deleteCategory(this.entityId).subscribe(() => {
      this.activeModal.close();
    });
  }

  deleteComplexityLevel(): void {
    this.complexityService
      .deleteComplexityLevel(this.entityId)
      .subscribe(() => {
        this.activeModal.close();
      });
  }
}
