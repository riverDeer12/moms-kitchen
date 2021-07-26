import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteComponent } from 'app/shared/components/common/confirm-delete/confirm-delete.component';
import { EntityType } from 'app/shared/constants/entity-type';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss']
})
export class RecipeInfoComponent implements OnInit {
  id: string;
  returnUrl = '/recipes';
  loadingData: boolean;

  constructor(
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.loadingData = true;
    this.setPageSettings();
  }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadingData = false;
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Recipe details',
      'Here you can read more details about recipe'
    );
  }

  goBackToList(): void {
    this.router.navigateByUrl(this.returnUrl);
  }

  goToEditPage(): void {
    this.router.navigateByUrl('/admin/recipes/edit/' + this.id);
  }

  confirmDelete(): void {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.entityId = this.id;
    modalRef.componentInstance.entityType = EntityType.RECIPES;
    modalRef.componentInstance.returnUrl = '/admin/recipes';

    modalRef.result.then((data) => {
      this.router.navigateByUrl('/admin/recipes');
    }, (reason) => {
      console.log('Not good!');
    });
  }

}
