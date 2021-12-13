import { NotificationsService } from '../../../../core/services/notifications/notifications.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../../../../core/dtos/categories/category';
import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/core/services/common/common.service';
import { Router } from '@angular/router';
import { EntityType } from 'app/core/constants/entity-type';
import { ConfirmDeleteComponent } from '../../common/confirm-delete/confirm-delete.component';
import { Table } from 'primeng/table';
import { fadeInAnimation } from 'app/shared/animations/page.animation';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  animations: [fadeInAnimation]
})
export class CategoriesListComponent implements OnInit {
  categories: Category[];
  loadingData: boolean;

  constructor(
    private commonService: CommonService,
    private notificationService: NotificationsService,
    private categoriesService: CategoriesService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.loadingData = true;
    this.setPageSettings();
  }

  ngOnInit() {
    this.getCategories();
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Categories list',
      'List of all registered categories'
    );
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe(
      (response: Category[]) => {
        this.categories = response.map(x => Object.assign(new Category(), x));
        this.loadingData = false;
      },
      () => {
        this.notificationService.error('Error on getting categories');
      }
    );
  }

  confirmDelete(categoryId: string): void {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.entityId = categoryId;
    modalRef.componentInstance.entityType = EntityType.CATEGORIES;
    modalRef.componentInstance.returnUrl = '/admin/categories';
  }

  goToInfoPage(categoryId: string): void {
    this.router.navigateByUrl('/admin/categories/info/' + categoryId);
  }

  goToEditPage(categoryId: string): void {
    this.router.navigateByUrl('/admin/categories/edit/' + categoryId);
  }

  goToConfirmDeletePage(categoryId: string): void {
    this.router.navigateByUrl('/admin/categories/delete/' + categoryId);
  }

  clear(table: Table) {
    table.clear();
  }
}
