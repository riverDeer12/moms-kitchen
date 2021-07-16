import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from './../../../dtos/categories/category';
import { CategoriesService } from './../../../services/categories/categories.service';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';
import { ApiResponse } from 'app/shared/common/api-response';
import { Router } from '@angular/router';
import { EntityType } from 'app/shared/constants/entity-type';
import { ConfirmDeleteComponent } from '../../common/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  categories: Category[];
  loadingData: boolean;

  constructor(
    private commonService: CommonService,
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
      (error) => {
        console.log(console.error());
      }
    );
  }

  confirmDelete(categoryId: string): void {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.entityId = categoryId;
    modalRef.componentInstance.entityType = EntityType.CATEGORIES;
    modalRef.componentInstance.returnUrl = '/categories';
  }

  goToInfoPage(categoryId: string): void {
    this.router.navigateByUrl('/categories/info/' + categoryId);
  }

  goToEditPage(categoryId: string): void {
    this.router.navigateByUrl('/categories/edit/' + categoryId);
  }

  goToConfirmDeletePage(categoryId: string): void {
    this.router.navigateByUrl('/categories/delete/' + categoryId);
  }
}
