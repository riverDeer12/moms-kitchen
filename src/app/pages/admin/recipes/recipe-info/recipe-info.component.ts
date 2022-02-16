import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteComponent } from 'app/shared/components/common/confirm-delete/confirm-delete.component';
import { EntityType } from 'app/core/constants/entity-type';
import {Recipe} from '../../../../../../projects/moms-kitchen-common/src/lib/dtos/recipes/recipe';
import {NotificationsService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/notifications/notifications.service';
import {CommonService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/common/common.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss']
})
export class RecipeInfoComponent implements OnInit {
  returnUrl = '/admin/recipes';

  recipe: Recipe;

  constructor(
    private commonService: CommonService,
    private notificationService: NotificationsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.setPageSettings();
  }

  ngOnInit() {
    this.listenToResolver();
  }

  /**
   * Listen to resolver
   * actions.
   */
  listenToResolver(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.recipe = Object.assign(new Recipe(), response.recipe);
    });
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Recipe details',
      'Here you can read more details about recipe'
    );
  }

  goToEditPage(): void {
    this.router.navigateByUrl('/admin/recipes/edit/' + this.recipe.id).then();
  }

  confirmDelete(): void {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.entityId = this.recipe.id;
    modalRef.componentInstance.entityType = EntityType.RECIPES;
    modalRef.componentInstance.returnUrl = '/admin/recipes';

    modalRef.result.then(() => {
      this.router.navigateByUrl('/admin/recipes').then();
    }, () => {
      this.notificationService.error('Modal error.');
    });
  }

}
