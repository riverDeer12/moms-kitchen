import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDeleteComponent } from 'app/shared/components/common/confirm-delete/confirm-delete.component';
import { CommonService } from 'app/shared/services/common/common.service';
import { EntityType } from 'app/shared/constants/entity-type';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.scss']
})
export class CategoryInfoComponent implements OnInit {
  id: string;
  returnUrl = '/admin/categories';
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
    this.getCategory();
  }

  getCategory(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadingData = false;
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Category details',
      'Here you can read more details about category'
    );
  }

  goBackToList(): void {
    this.router.navigateByUrl(this.returnUrl);
  }

  goToEditPage(): void {
    this.router.navigateByUrl('/admin/categories/edit/' + this.id);
  }

  confirmDelete(): void {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.entityId = this.id;
    modalRef.componentInstance.entityType = EntityType.CATEGORIES;
    modalRef.componentInstance.returnUrl = '/categories';

    modalRef.result.then((data) => {
      this.router.navigateByUrl('/admin/categories');
    }, (reason) => {
      console.log('Not good!');
    });
  }

}
